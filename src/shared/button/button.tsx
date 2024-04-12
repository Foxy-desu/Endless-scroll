import styles from './button.module.scss';
import { ButtonType } from '../types';

export const Button: ButtonType = ({clickHandler, postId, btnText}) => {
  return (
      <button className={styles.button} type='button' onClick={()=> {
        if (postId) {
          clickHandler(postId);
        } else {
          clickHandler(-1);
        }
      }}>{btnText}</button>
  )
};
