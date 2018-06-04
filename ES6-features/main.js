class Lista {

    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ListaTarefas extends Lista {
    
}

const MinhasTarefas = new ListaTarefas();

document.getElementById('addTarefa').onclick = function() {
    MinhasTarefas.add('Ir para a academia');
}