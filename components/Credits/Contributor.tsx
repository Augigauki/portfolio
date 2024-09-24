import styles from './Credits.module.css'

interface ContributorProps {
    name: string;
    role: string;
}

const Contributor = ({role, name}: ContributorProps) => {
    return(
        <div className={styles.contributor}>
            <p className={styles.role}>{role}</p>
            <p className={styles.name}>{name}</p>
        </div>
    )
};

export default Contributor;