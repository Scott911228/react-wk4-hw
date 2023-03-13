import styles from './header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.header__avatar} src="./images/avatar.png" alt="avatar" />
            <h1 className={styles.header__title}>Taihen</h1>
            <hr className="divider--light" />
            <p className={styles.header__slogan}>Slogan</p>
        </header>
    )
}