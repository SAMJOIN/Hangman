import viselica from "./../viselica.jpg"
import Word from "./Word";
import styles from './../Styles/viselica.module.css'
import Letters from "./Letters";

const Viselica = (props) => {

    let word = props.state.game.currentWord;


    return (
        <div className={styles.viselica}>
            <img className={styles.pic} src={viselica} />
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