import '../assets/styles/calculator.css'
import { useState } from 'react'
const Calculator = ({ greeting = 'CALCULATOR' }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const handleClick = (event) => {
    const val = event.target.textContent
    switch (val) {
      case '=': {
        if (question !== '') {
          var ans = ''
          try {
            ans = Function('return ' + question)
          } catch (err) {
            setAnswer('Math Error')
          }
          if (ans === undefined) {
            setAnswer('Math Error')
          } else {
            setAnswer(ans)
            setQuestion('')
          }
          break
        } else if (answer !== '') {
          setAnswer(Function('return ' + answer + question))
        }
        break
      }
      case 'CE': {
        setAnswer('')
        setQuestion('')
        break
      }
      case 'C': {
        var str = question
        str = str.substr(0, str.length - 1)
        setQuestion(str)
        break
      }
      default: {
        if (question === '' && answer !== '') {
          setQuestion(answer + val + question)
        } else {
          setQuestion(question + val)
        }
        break
      }
    }
  }
  return (
    <section className="calculatorContainer">
      <h1>{greeting}</h1>
      <link
        href="https://fonts.googleapis.com/css?family=Orbitron"
        rel="stylesheet"
        type="text/css"
      ></link>
      <link
        href="http://fonts.cdnfonts.com/css/scientific-calculator-lcd"
        rel="stylesheet"
      ></link>
      <div className="container">
        <div className="calculator">
          <div className="display">
            <div className="display-1">{question}</div>
            <div className="border">
              <div className="display-2">{answer}</div>
            </div>
            <div className="temp-result"></div>
          </div>
          <div className="all_button">
            <div onClick={handleClick}>C</div>
            <div onClick={handleClick}>CE</div>
            <div onClick={handleClick}>%</div>
            <div onClick={handleClick}>/</div>
            <div onClick={handleClick}>7</div>
            <div onClick={handleClick}>8</div>
            <div onClick={handleClick}>9</div>
            <div onClick={handleClick}>*</div>
            <div onClick={handleClick}>4</div>
            <div onClick={handleClick}>5</div>
            <div onClick={handleClick}>6</div>
            <div onClick={handleClick}>-</div>
            <div onClick={handleClick}>1</div>
            <div onClick={handleClick}>2</div>
            <div onClick={handleClick}>3</div>
            <div onClick={handleClick}>+</div>
            <div onClick={handleClick}>0</div>
            <div onClick={handleClick}>.</div>
            <div className="equal" onClick={handleClick}>
              =
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Calculator
