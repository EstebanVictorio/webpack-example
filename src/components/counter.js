import styled from "@emotion/styled"


const StyledCounter = styled.div`
  background-color: brown;
  padding: 25px;
  .counter {
    border: 5px solid red;
    color: red;
    font-size: 24px;
  }
`

const Counter = () => {
  return (
    <StyledCounter isBlue >
      <input className="counter" type="number"/>
    </StyledCounter>
  )
}

export default Counter
