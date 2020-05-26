import React from 'react';
import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule }) => (
    <div>
        <div className="">
            <strong>Módulo:</strong> <span>{activeModule.title}</span>
        </div>
        <div className="">
            <strong>Aula:</strong> <span>{activeLesson.title}</span>
        </div>
    </div>
)

export default connect(state => ({ 
    activeLesson: state.course.activeLesson, 
    activeModule: state.course.activeModule
}))(Video)