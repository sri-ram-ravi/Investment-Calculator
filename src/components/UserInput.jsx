export default function UserInput({userInput,setUserInput}){
    function handleChange(inputIdentifier,newValue){
        setUserInput(
            prevInput=>{
                return {
                    ...prevInput,
                    [inputIdentifier]:+newValue
                }
            }
        )
    }
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" required value={userInput.initialInvestment} onChange={(event)=>handleChange('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number" required value={userInput.annualInvestment} onChange={(event)=>handleChange('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expectd Return</label>
                    <input type="number" required value={userInput.expectedReturn} onChange={(event)=>handleChange('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number" required value={userInput.duration} onChange={(event)=>handleChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    )
}