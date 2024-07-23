// Função swap, com o objetivo de trocar os valores de duas posições de um vetor, tendo como parâmetros de entrada o vetor e as posições.
const swap = (vetor, posicao1, posicao2) => {
    [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]];

    return vetor;
}

// Função shuffle, com o objetivo de embaralhar os elementos de um vetor, tendo como parâmetros de entrada o vetor e a quantidade de trocas.
const shuffle = (vetor, numeroTrocas) => {
    for (let i = 0; i < numeroTrocas; i++) {
        const posicao1 = Math.floor(Math.random() * vetor.length);
        const posicao2 = Math.floor(Math.random() * vetor.length);

        swap(vetor, posicao1, posicao2);
    }

    return vetor;
}

// Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo Bubble Sort, tendo como parâmetro de entrada o vetor de inteiros.
const bubbleSort = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1);
                // [vetor[j], vetor[j + 1]] = [vetor[j + 1], vetor[j]];
            }
        }
    }

    return vetor;
}

// Função selection_sort, para ordenar um vetor de inteiros utilizando o algoritmo Selection Sort, tendo como parâmetro de entrada o vetor de valores inteiros.
const selectionSort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let menorIndice = i;

        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[menorIndice]) {
                menorIndice = j;
            }
        }

        if (menorIndice !== i) {
            swap(vetor, i, menorIndice);
            // [vetor[i], vetor[menorIndice]] = [vetor[menorIndice], vetor[i]];
        }        
    }

    return vetor;
}

// Função quick_sort, para ordenar um vetor de inteiros com o algoritmo Quick Sort, recursivo, tendo como parâmetros o vetor, posição inicial e posição final.
const quickSort = (vetor, inicio, fim) => {
    if (inicio < fim) {
        let indiceParticionamento = particionamento(vetor, inicio, fim);

        quickSort(vetor, inicio, indiceParticionamento - 1);
        quickSort(vetor, indiceParticionamento + 1, fim);
    }
}

// Função particionamento, de apoio a quick_sort, tendo como parâmetros o vetor, posição inicial, posição final e valor do pivô.
const particionamento = (vetor, inicio, fim) => {
    let pivo = vetor[fim];
    let i = inicio - 1;

    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivo) {
            i++;
            swap(vetor, i, j);
            // [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
        }
    }

    swap(vetor, i + 1, fim);
    // [vetor[i + 1], vetor[fim]] = [vetor[fim], vetor[i + 1]];

    return i + 1;
}