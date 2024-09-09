import styles from './Line.module.css'

type LineProps = {
    color: string;
}

const Line = ({color}: LineProps) => {
    return(
        <div className={styles.line} style={{backgroundColor: color}}/>
    )
};

export default Line;