import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import { useState } from "react"
function App() {
  const [userInput,setUserInput]=useState([{
    initailInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
}])
  return (
    <>
        <Header/>
        <UserInput userInput={userInput} setUserInput={setUserInput}/>
        <Result userInput={userInput}/>
    </>
  )
}

export default App
