import styled from 'styled-components'
import { CellData } from './types'

const Control = ({ onCellClick }) => (
  <Container>
    <Cells>
      {cellsData.map(({value, label}) =>
        <CellComponent value={value} onCellClick={onCellClick} key={value}>
          <div>{label}</div>
        </CellComponent>
      )}
    </Cells>
  </Container>
)

export default Control

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Cells = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Cell = styled.div`
  background: azure;
  width: 125px;
  height: 70px;
  flex-shrink: revert;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid;
`;

const CellComponent = ({ children, value, onCellClick}) => (
  <Cell onClick={() => onCellClick(value)}>{children}</Cell>
);

const cellsData: CellData[] = [
  ["(", "("], 
  [")", ")"], 
  ["C", "C"], 
  ["Remove", "Remove"],
  ["7", "7"], 
  ["8", "8"], 
  ["9", "9"], 
  ["/", "÷"],
  ["4", "4"], 
  ["5", "5"], 
  ["6", "6"], 
  ["*", "*"],
  ["1", "1"], 
  ["2", "2"], 
  ["3", "3"], 
  ["-", "-"],
  ["0", "0"], 
  [".", "."], 
  ["=", "="], 
  ["+", "+"],
].map(([value, label]) => ({ value, label }))
