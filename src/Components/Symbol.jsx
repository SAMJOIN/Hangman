import styles from './../Styles/viselica.module.css'

const Symbol = (props) => {

    let openLetters = props.openLetters;


    function showLetters(letter) {
        if (openLetters.indexOf(letter) !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className={styles.symb}>
            <p className={styles.letter} style={{visibility: showLetters(props.letter)? 'visible' : 'hidden'}}>{props.letter}</p>
            <hr  width="50" size="3" color="black" />
        </div>
    );
}

export default Symbol;