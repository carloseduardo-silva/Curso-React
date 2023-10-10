import styles from './Cars.module.css'

const Cars = ({name, color, year}) => {
  return (
    <div className={styles.info}>
        <h1 > {name}</h1>
        <p> COLOR: {color}</p>
        <p> YEAR: {year}</p>
      
    </div>
  )
}

export default Cars
