import stateReducer from './menu-reducer'

let store = {
    _state: {
        menu: {
            category: 'none',
            count: 0,
        },
        game: {
            words: {
                sport: ['мяч','лыжи','бег','здоровье','футбол','атлетика','движение','физкультура','велосипед','теннис','хоккей','бокс','спринт'],
                nature: ['дерево','цветок','насекомое','остров','пустыня','бабочка','птица','медведь','собака','кошка'],
                tech: ['машина','телефон','автобус','приложение','планшет','технология','самолет','компьютер'],
                chimestry: ['молекула','вещество','кислород','металл','железо','золото','уран','ртуть','водород'],
                country: ['россия','чехия','сша','бразилия','украина','польша','германия','франция','китай','индия'],
                weapon: ['танк','граната','автомат','пистолет','пулемет','гранатомет','мина'],
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