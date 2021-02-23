import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/diegodvv.png" alt="Diego Vieira" />
      <div>
        <strong>Diego Vieira</strong>
        <p>Level 1</p>
      </div>
    </div>
  )
}