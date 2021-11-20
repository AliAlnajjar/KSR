import stepperStyles from '../styles/Stepper.module.scss'

const Stepper = () => {
  return (

    
    <ol className ={stepperStyles.stepper}>
    <li className={stepperStyles.stepper__item}>
        <h3 className={stepperStyles.stepper__title}>Prosjekt Info</h3>
        <p className={stepperStyles.stepper__desc}></p>
    </li>
    <li className={stepperStyles.stepper__item}>
        <h3 className={stepperStyles.stepper__title}>sjekklister</h3>
        <p className={stepperStyles.stepper__desc}></p>
    </li>
    <li className={stepperStyles.stepper__item}>
        <h3 className={stepperStyles.stepper__title}>Preview</h3>
        <p className={stepperStyles.stepper__desc}></p>
    </li>
</ol>
  )
}
export default Stepper
