import v1 from './../v1.png'
import v2 from './../v2.png'
import v3 from './../v3.png'
import v4 from './../v4.png'
import v5 from './../v5.png'
import v6 from './../v6.png'
import v7 from './../v7.png'
import Word from "./Word";
import styles from './../Styles/viselica.module.css'
import Letters from "./Letters";

const Viselica = (props) => {

    let word = props.state.game.currentWord;

    let picture = function () {
        switch (props.state.game.attempt) {
            case 6:
                return v1
            case 5:
                return v2
            case 4:
                return v3
            case 3:
                return v4
            case 2:
                return v5
            case 1:
                return v6
            case 0:
                return v7
        }
    }


    return (
        <div className={styles.viselica}>
            <div className={styles.picContainer}>
                <img className={styles.pic} src={picture()} />
            </div>
            <Word word={word}
                openLetters={props.state.game.openLetters}
            />
            <Letters word={word}
                openLetters={props.state.game.openLetters}
                attempt={props.state.game.attempt}
                dispatch={props.dispatch}
                category={props.state.menu.category}
            />
        </div>
    );
}


export default Viselica;