import {calculateInvestmentResults, formatter} from "../util/investment"
export default function Result({userInput}){
    const result=calculateInvestmentResults(userInput)
    console.log(result)
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((yearData)=>{
                        return(
                            <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}