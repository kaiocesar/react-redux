import React from 'react';

import { connect } from 'react-redux';

function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON', // é sempre preciso retornar essa chave
        module,
        lesson,
    }
}

 // componentes que utilizam o connect, herdam essa função 'dispatch'
 // a função dispatch serve para dispararmos ações para o redux
const Sidebar = ({ modules, dispatch }) => (
    <aside>
        { modules.map(module => (
            <div>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}
                    <button onClick={() => dispatch(toggleLesson(module, lesson)) }>Assistir aula</button>
                    </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

export default connect(state => ({ modules: state.modules }))(Sidebar);