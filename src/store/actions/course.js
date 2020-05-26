export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON', // é sempre preciso retornar essa chave
        module,
        lesson,
    }
}