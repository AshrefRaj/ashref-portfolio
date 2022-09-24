import Styles from '../assets/styles/calculator.module.css'
const Calculator = ({ greeting = null }) => {
  return (
    <div className={Styles.calc_container}>
      <div className={Styles.calculator}>
        <div className={Styles.displayContainer}>
          <div className={Styles.mini_display}></div>
          <div className={Styles.main_display}></div>
        </div>
      </div>
    </div>
  )
}

export default Calculator
