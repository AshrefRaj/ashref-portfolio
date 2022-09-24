import Styles from '../assets/styles/loader.module.css'
const Loader = ({ text = null }) => {
  return (
    <div className={Styles.loader_container}>
      <div className={Styles.spinner_box}>
        <div className={Styles.configure_border_1}>
          <div className={Styles.configure_core}></div>
        </div>
        <div className={Styles.configure_border_2}>
          <div className={Styles.configure_core}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
