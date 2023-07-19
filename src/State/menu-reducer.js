const SELECT_CATEGORY = 'SELECT_CATEGORY'
const BACK_MENU = 'BACK-MENU'
const MINUS_ATTEMPT = 'MINUS-ATTEMPT'
const OPEN_LETTER = 'OPEN-LETTER'
const ADD_POINT = 'ADD-POINT'



function stateReducer(state, action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            state.menu.category = action.newCategory;
            function getRandomInt(min, max) { // рандом в интервале [min,max)
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            function getWord() { // Получаем массив слов из категорий
                switch (state.menu.category) {
                    case 'Спорт':
                        return state.game.words.sport;
                    case 'Природа':
                        return state.game.words.nature;
                    case 'Техника':
                        return state.game.words.tech;
                    default:
                        return [];
                }
            }

            let words = getWord(); // Создаём массив слов

            let word = words[getRandomInt(0, words.length)]; // Рандомно выбираем слово из массива

            state.game.currentWord = word;
            return state;

        case MINUS_ATTEMPT:
            state.game.attempt--;
            return state;

        case BACK_MENU:
            state.menu.category = 'none';
            state.game.currentWord = '';
            state.game.openLetters = '';
            state.game.attempt = 7;
            return state;

        case OPEN_LETTER:
            state.game.openLetters += action.letter;
            return state;

        case ADD_POINT:
            state.menu.count++;
            return state;

        default:
            return state;
    }
}

export const addPointActionCreator = () => {
    return {
        type: ADD_POINT
    }
}

export const openLetterActionCreator = (text) => {
    return {
        type: OPEN_LETTER,
        letter: text
    }
}

export const minusAttemptActionCreator = () => {
    return {
        type: MINUS_ATTEMPT
    }
}

export const selectCategorySportActionCreator = () => {
    return {
        type: SELECT_CATEGORY,
        newCategory: 'Спорт'
    }
}
export const selectCategoryNatureActionCreator = () => {
    return {
        type: SELECT_CATEGORY,
        newCategory: 'Природа'
    }
}
export const selectCategoryTechActionCreator = () => {
    return {
        type: SELECT_CATEGORY,
        newCategory: 'Техника'
    }
}
export const backMenuActionCreator = () => {
    return {
        type: BACK_MENU
    }
}



export default stateReducer;