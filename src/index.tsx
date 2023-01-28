import {createRoot} from "react-dom/client";
import styles from './index.module.less';
import IconComment from './icon-comment.svg';
import IconCommentUrl from './icon-comment.svg?abc';

console.log(IconComment)
console.log(IconCommentUrl)

const App = () => {
    return <div className={styles.app}><IconComment width='64' height='64'/></div>
}

createRoot(document.querySelector('#app')).render(<App/>)