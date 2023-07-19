import styles from './../Styles/menu.module.css'
import {selectCategorySportActionCreator,selectCategoryNatureActionCreator,selectCategoryTechActionCreator} from './../State/menu-reducer'

function Menu(props) {

    function selectCategorySport() {
        props.dispatch(selectCategorySportActionCreator());
    }
    function selectCategoryTech() {
        props.dispatch(selectCategoryTechActionCreator());
    }
    function selectCategoryNature() {
        props.dispatch(selectCategoryNatureActionCreator());
    }

    return (
        <div className={styles.menu}>
            <h1>Тема</h1>
            <p>Угадано слов: {props.state.menu.count}</p>
            <div className={styles.selector}>
                <button className={styles.categoryBtn} onClick={selectCategorySport} >Спорт</button>
                <button className={styles.categoryBtn} onClick={selectCategoryNature} >Природа</button>
                <button className={styles.categoryBtn} onClick={selectCategoryTech} >Техника</button>
            </div>
        </div>
    );

}

export default Menu;