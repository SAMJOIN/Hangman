import stateReducer from './menu-reducer'

let store = {
    _state: {
        menu: {
            category: 'none',
            count: 0,
        },
        game: {
            words: {
                sport: ['мяч','лыжи'],
                nature: ['дерево','цветок'],
                tech: ['машина','телефон']
            },
            currentWord: '',
            attempt: 7,
            openLetters: ''
        }
        
    },

    getState() {
        return this._state;
    },
    callSubscriber() {
        console.log('')
    },
    subscribe(observer) {
        this.callSubscriber = observer;
    },
    dispatch(action) {

        this._state = stateReducer(this._state, action);
        this.callSubscriber(this._state);
    }
}

export default store;