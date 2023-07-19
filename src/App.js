import styles from './Styles/app.module.css';
import Menu from './Components/Menu';
import Viselica from './Components/Viselica';

import { backMenuActionCreator } from './State/menu-reducer';


function App(props) {

  function goBackMenu() {
    props.dispatch(backMenuActionCreator());
  }

  if (props.state.menu.category === 'none') {
    return (
      <div className={styles.App}>
        <Menu state={props.state}
          dispatch={props.dispatch} />
      </div>
    );
  } else {
    return (
      <div className={styles.gameArea}>
        <button className={styles.menuBtn} onClick={goBackMenu}>Меню</button>
        <h1 className={styles.themeLabel}>Тема: {props.state.menu.category}</h1>

        <div className={styles.game}>
          <Viselica state={props.state}
            dispatch={props.dispatch}
          />
        </div>
      </div>
    );
  }
}

export default App;
