import Symbol from "./Symbol";
import styles from "./../Styles/viselica.module.css"

const Word = (props) => {

    let symbols = props.word.split('');

    let letters = symbols.map((el) => {
        return <Symbol letter={el} openLetters={props.openLetters}/>
    })
    

    return (
        <div className={styles.word}>
            {letters}
        </div>
    );
}

export default Word;