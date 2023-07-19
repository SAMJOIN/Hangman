import styles from './../Styles/viselica.module.css'
import { minusAttemptActionCreator, openLetterActionCreator, addPointActionCreator, backMenuActionCreator } from './../State/menu-reducer'


const Letters = (props) => {

    const letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ',
        'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э',
        'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];

    let word = props.word;
    let symbols = word.split('');

    function checkLetter(letter) {
        let str = '';
        let flag = false;
        symbols.forEach(function (element) {
            if (element == letter) {
                flag = true;
                str += letter;
            }
        });
        return [flag, str];
    }

    let attempt = props.attempt;


    const keyboard = letters.map(el =>
        <button
            onClick={(el) => {
                if (attempt > 1) {

                    if (checkLetter(el.target.innerHTML)[0]) {
                        el.target.style.background = 'green';
                        props.dispatch(openLetterActionCreator(checkLetter(el.target.innerHTML)[1]));
                        // Выход при победе
                        debugger;
                        if (props.openLetters.length+1 == word.length) {
                            setTimeout(function () {
                                props.dispatch(addPointActionCreator());
                                props.dispatch(backMenuActionCreator());
                            }, 2000);
                            
                        }
                    } else {
                        el.target.style.background = 'red';
                        props.dispatch(minusAttemptActionCreator());
                    }
                    el.target.disabled = 'true';

                } else if (attempt == 1) {
                    debugger;
                    if (checkLetter(el.target.innerHTML)[0]) {
                        el.target.style.background = 'green';
                        props.dispatch(openLetterActionCreator(checkLetter(el.target.innerHTML)[1]));
                        // Выход при победе
                        if (props.openLetters.length+1 == word.length) {
                            props.dispatch(addPointActionCreator());
                            setTimeout(function () {
                                props.dispatch(backMenuActionCreator());
                            }, 2000);
                        }

                    } else {
                        el.target.style.background = 'red';
                        props.dispatch(minusAttemptActionCreator());
                        props.dispatch(openLetterActionCreator(word));

                        setTimeout(function () {
                            props.dispatch(backMenuActionCreator());
                        }, 2000);


                    }
                    el.target.disabled = 'true';
                }



            }
            }
            className={styles.key} value={el}>{el}
        </button>);

    return (
        <div className={styles.keyboardBox}>
            <div className={styles.keyboard}>
                {keyboard}
            </div>
        </div>
    );
}

export default Letters;