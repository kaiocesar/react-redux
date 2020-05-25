import { createStore } from 'redux';

function reducer() {
    return [{ 
        id: 1, 
        title: 'iniciando com react', 
        lessons: [
            { 
                id: 1, 
                title: 'Primeira aula'},
            { 
                id: 2, 
                title: 'Segundo aula'}
        ]
    },
    {
        id: 2,
        title: 'iniciando com redux', 
        lessons: [
            {
                id: 3,
                title: 'Tercera aula'
            },
            {
                id: 4,
                title: 'Quarta aula'
            },
        ]
    }];
}

const store = createStore(reducer);

export default store;