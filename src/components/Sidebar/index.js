import React from 'react';

import { connect } from 'react-redux';
import * as CourseActions from '../../store/actions/course';
import { bindActionCreators } from 'redux';

 // componentes que utilizam o connect, herdam essa função 'dispatch'
 // a função dispatch serve para dispararmos ações para o redux
const Sidebar = ({ modules, toggleLesson }) => (
    <aside>
        { modules.map(module => (
            <div>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}
                    <button onClick={() => toggleLesson(module, lesson) }>Assistir aula</button>
                    </li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)


const mapStateToProps = state => ({
    modules: state.course.modules
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(CourseActions, dispatch)


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Sidebar);