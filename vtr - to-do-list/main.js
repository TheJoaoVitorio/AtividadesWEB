let nomeTarefa = document.getElementById('tarefa');

let btn = document.getElementById('adicionar');
btn.addEventListener('click', async ()=> {
   
    if (nomeTarefa.value.trim() == ''){
        alert('Preencha os campos!')
    }else{
        
        await AdicionarTarefa(nomeTarefa.value);

        await LimpaInput(nomeTarefa);

        await SalvarTarefas();
    };
    
    
})

async function AdicionarTarefa(Tarefa, concluida = false) {
    let divPaiElementos = document.createElement('div');
    let novoElementoLi = document.createElement('li');
    let tarefas = document.getElementById('tarefas'); // ul

    let checkTarefa = document.createElement('i');
    let excluirTarefa = document.createElement('i');

    checkTarefa.innerHTML = `<i id="checkTarefa" class="fa-solid fa-check"></i>`;
    
    excluirTarefa.innerHTML = ` 
                                <i id="apagarTarefa" class="fa-solid fa-trash"></i>
                                `;
    divPaiElementos.classList = 'itensTarefa'

    novoElementoLi.textContent = Tarefa;

    divPaiElementos.appendChild(novoElementoLi);
    divPaiElementos.appendChild(checkTarefa);
    divPaiElementos.appendChild(excluirTarefa);

    tarefas.appendChild(divPaiElementos);

    checkTarefa.addEventListener('click',()=>{
        if (novoElementoLi.classList.contains('check')){
            novoElementoLi.classList.remove('check');
            SalvarTarefas()
        }else{
            novoElementoLi.classList = 'check';
            SalvarTarefas()
        };
        
    })

    excluirTarefa.addEventListener('click', ()=>{
        excluirTarefa.parentElement.remove();
        SalvarTarefas()
    });
}

function CarregarTarefas(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task=>{
        AdicionarTarefa(task.nome,task.concluida);
    })
}

async function SalvarTarefas() {
    let tasks = []
    let elementosTarefas = document.querySelectorAll('.itensTarefa');
    elementosTarefas.forEach(elemento=>{
        let nome = elemento.querySelector('li').textContent;
        let concluida = elemento.querySelector('li').classList.contains('check');
        tasks.push(
            {
                nome,
                concluida
            }
        )
        localStorage.setItem('tasks', JSON.stringify(tasks));
    })
}

async function LimpaInput(input) {
    input.value = ''
}

document.addEventListener('DOMContentLoaded', CarregarTarefas())