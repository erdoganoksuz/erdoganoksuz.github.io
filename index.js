
const $input=document.querySelector("input");


$input.addEventListener("input",(e)=>{
  console.log(e.target.value)
			const amount = e.target.value.replace(",",".");
	    const matched = amount.match(/^([0-9]{0,3})(\.|)([0-9]{0,2})/g);
    if (Array.isArray(matched)) {
      if (Number(matched[0]) > 750) {
        //setAmount(wallet.remainingDepositLimit.toString());
				$input.value= 750;
        return false;
      } else $input.value= matched[0];
    }
    setInputActive(inputActive);
    return true;
})
