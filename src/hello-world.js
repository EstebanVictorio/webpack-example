import Home from "pages/home"
import ConfirmPayment from "pages/user/confirm-payment"
import Counter from "components/counter"
const HelloWorld = () => (
  <div>
    Hello world from React!
  <Home />
  <ConfirmPayment />
  <Counter />
  </div>
)

const container = document.querySelector("#root")
ReactDOM.render(<HelloWorld />, container)