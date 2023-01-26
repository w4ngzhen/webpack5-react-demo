import {createRoot} from "react-dom/client";
import styles from './index.module.less';

const App = () => {
    return <div className={styles.app}>Hello, <span>App</span></div>
}

createRoot(document.querySelector('#app')).render(<App/>)