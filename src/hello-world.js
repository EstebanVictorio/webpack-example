import Home from "pages/home"
import { Global, css } from "@emotion/core"
import ConfirmPayment from "pages/user/confirm-payment"
import Counter from "components/counter"
const HelloWorld = () => (
  <div>
    <Global css={
      css`
        body {
          margin: 0;
        }
      `
    }/>
    Hello world from React!
  <Home />
  <ConfirmPayment />
  <Counter />
  </div>
)

const container = document.querySelector("#root")
ReactDOM.render(<HelloWorld />, container)