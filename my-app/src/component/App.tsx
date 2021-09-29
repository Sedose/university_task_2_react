import {
  useState,
} from 'react'
import {
  TextField,
  Container,
} from '@mui/material'
import styled from 'styled-components'
import Control from './control/Control'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Either, Left } from 'purify-ts'
import { create, all } from 'mathjs'

const math = create(all, { })

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 510px;
`;

const IO = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

const App = () => {

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const evalAndSetOutputOrErrorToast = () => {
    (input ? Either.encase(() => math.evaluate?.(input)) : Left(""))
      .chain((right) =>
        Number.isFinite(right) ?
          Either.of(right) :
          Left("Cannot evaluate the expression!")
      )
      .ifLeft((left: any) => toast.error(left ? left : "Invalid input!"))
      .ifRight((result) => setOutput(result))
  }

  const operate = (value) => {
    const operations = {
      C: () => setInput(""),
      Remove: () => setInput(input.slice(0, input.length - 1)),
      "=": () => evalAndSetOutputOrErrorToast()
    }
    operations[value]()
  }

  const onControlCellClick = (value) => {
    setOutput("")
    if (isOperation(value)) {
      operate(value)
    } else {
      setInput(input + value)
    }
  }

  return (
    <div className="App">
      <Container>
        <ToastContainer />
        <Calculator>
          <IO>
            <TextField fullWidth value={output} disabled />
            <TextField fullWidth value={input} />
          </IO>
          <Control onCellClick={onControlCellClick} />
        </Calculator>
      </Container>
    </div>
  );
}

export default App

const isOperation = (value) => {
  return ["C", "Remove", "="].some(it =>
    it === value
  )
}


