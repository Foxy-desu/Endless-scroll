import {NavLink} from 'react-router-dom';
import styles from './button.module.scss';

interface IButton {
  toPath: string,
  textContent: string,
}

export const Button = ({toPath, textContent}: IButton) => {
  return (
    <NavLink className={styles.button} to={toPath}>{textContent}</NavLink>
  )
};