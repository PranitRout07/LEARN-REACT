import React from 'react';
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
}) {
    return (
        <div>
            <label>
            {label}
            </label>
            <br/>
            <input
            type="number"
            placeholder="Amount"  
            value = {amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
           disabled={amountDisable}
           />
            <br/>
           <select value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            
            {currencyOptions.map((cur)=>(
                
                <option key={cur} value={cur}>
                   {cur}
                </option>  /* here you need to give an key.remember it to add */ 
            ))}

           </select>

        </div>
    );
}
export default InputBox;