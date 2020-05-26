import { createStore } from 'redux';

const INITIAL_STATE = {
    activeLesson: [],
    activeModule: [],
    modules: [
        { 
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
        }
    ]
};


// se 'state' vier vazio, logo preencho com o estado inicial
function reducer(state = INITIAL_STATE, action) {
    if(action.type === 'TOGGLE_LESSON' ) {
        return {
            ...state, // o estado atual
            activeLesson: action.lesson,  // seto a lesson selecionado no click do button
            activeModule: action.module   // seto o moduloe selecionado no click do button
        }
    }
    return state; // sempre retorno o estado
}

const store = createStore(reducer);

export default store;