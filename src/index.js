import '../styles/style.scss';

const form = document.getElementById('form');
const block = document.getElementById('block');
const falseBlock = document.getElementById('false');
const trueBlock = document.getElementById('true');

const buttonGetFalse = document.createElement('button');
buttonGetFalse.type = "button";
form.append(buttonGetFalse);
buttonGetFalse.innerHTML = 'getFalse';
buttonGetFalse.classList.add('btn');

const buttonGetTrue =document.createElement('button');
buttonGetTrue.type = "button";
form.append(buttonGetTrue);
buttonGetTrue.innerHTML = 'getTrue';
buttonGetTrue.classList.add('btn');

const buttonRemoveDiv = document.createElement('button');
buttonRemoveDiv.type = "Reset All";
form.append(buttonRemoveDiv);
buttonRemoveDiv.innerHTML = 'Remove all';
buttonRemoveDiv.classList.add('btn');

const ul = document.createElement('ul');
block.prepend(ul);

let todos;

const getTitle = () => {
        todos.forEach( item  => {
             const li = document.createElement('li')
             ul.append(li)
             li.innerHTML = `user ID № ${item.id}: ${item.title}`
             li.classList.add('titleList')
        });
};

const ul_False = document.createElement('ul');
falseBlock.append(ul_False)

buttonGetFalse.addEventListener('click', () =>{
        todos.forEach( item  => {
            const li = document.createElement('li');
            ul_False.append(li)
            li.innerHTML = item.completed
            li.classList.add('titleList')
            item.completed === false? li.innerHTML = `user ID № ${item.id}: ${item.completed}` : li.innerHTML = null;

            li.onclick = () => {

                const clickLi = !li.getAttribute('clicked');

                if(clickLi) {
                    li.setAttribute('clicked', true);
                    li.classList.add('clicked_Li');
                } else {
                    li.removeAttribute('clicked');
                    li.classList.remove('clicked_Li');
                }
            }

    });
})

const ul_True = document.createElement('ul');
trueBlock.append(ul_True)

buttonGetTrue.addEventListener('click', () =>{
        todos.forEach( item  => {
            const li = document.createElement('li');
            ul_True.append(li)
            li.innerHTML = item.completed
            li.classList.add('titleList')
            item.completed === true? li.innerHTML = `user ID № ${item.id}: ${item.completed}` : li.innerHTML = null;

            li.onclick = () => {

                const clickLi = li.getAttribute('clicked');

                if(!clickLi) {
                    li.setAttribute('clicked', true);
                    li.classList.add('clicked_Li');
                } else {
                    li.removeAttribute('clicked');
                    li.classList.remove('clicked_Li'); 
                }
            }

    });
    
})

const fetchTodos = () => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => todos = json);
}

const getTodos = async () => {
    await fetchTodos();
    getTitle();
};

getTodos();





