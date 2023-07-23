import styles from './../Styles/menu.module.css'
import {selectCategorySportActionCreator,selectCategoryNatureActionCreator,selectCategoryTechActionCreator,selectCategoryChimestryActionCreator,
    selectCategoryCountryActionCreator,selectCategoryWeaponActionCreator} from './../State/menu-reducer'

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
    function selectCategoryChimestry() {
        props.dispatch(selectCategoryChimestryActionCreator());
    }
    function selectCategoryCountry() {
        props.dispatch(selectCategoryCountryActionCreator());
    }
    function selectCategoryWeapon() {
        props.dispatch(selectCategoryWeaponActionCreator());
    }

    return (
        <div className={styles.menu}>
            <h1 className={styles.themeLabel}>Тема</h1>
            <p className={styles.countLabel}>Угадано слов: {props.state.menu.count}</p>
            <div className={styles.selector}>
                <button className={styles.categoryBtn} onClick={selectCategorySport} >Спорт</button>
                <button className={styles.categoryBtn} onClick={selectCategoryNature} >Природа</button>
                <button className={styles.categoryBtn} onClick={selectCategoryTech} >Техника</button>
                <button className={styles.categoryBtn} onClick={selectCategoryChimestry} >Химия</button>
                <button className={styles.categoryBtn} onClick={selectCategoryCountry} >Страны</button>
                <button className={styles.categoryBtn} onClick={selectCategoryWeapon} >Оружие</button>
            </div>
        </div>
    );

}

export default Menu;