import React from 'react';

import { connect } from 'react-redux';

const Sidebar = ({ modules }) => (
    <aside>
        { modules.map(module => (
            <div>
                <strong>{module.title}</strong>
                <ul>
                    {module.lessons.map(lesson => (
                    <li key={lesson.id}>{lesson.title}</li>
                    ))}
                </ul>
            </div>
        ))}
    </aside>
)

export default connect(state => ({ modules: state }))(Sidebar);