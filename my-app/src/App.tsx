import React, {
  useState,
} from 'react';
import './App.css';
import {
  TextField,
  FormLabel,
} from '@mui/material';
import styled from 'styled-components';

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const Control = styled.div`
  display: flex;
  justify-content: center;
  border: solid blue;
`;

const IO = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: stretch;
  border: solid red;
`;

const InputWrapper = styled.div`
  flex-frow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  border-right: 3px solid;
`;

const OutputWrapper = styled.div`
  flex-frow: 1;
  flex-shrink: 1;
  flex-basis: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// flex: 1 1 30%;

function App() {

  const [input, setInput] = useState()
  const [output, setOutput] = useState()

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <Calculator>
        <IO>
          <InputWrapper>
            <TextField onChange={onInputChange} fullWidth/>
          </InputWrapper>

          <OutputWrapper>
            <TextField disabled fullWidth value={output}>Result</TextField>
          </OutputWrapper>
        </IO>
        <Control>
          Aaa
        </Control>
      </Calculator>
    </div>
  );
}

export default App
