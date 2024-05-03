export const convertToRupees = (value, currency) => {
    let convertedValue = 0;
    const conversionRate = 75;
    if(currency=="USD")
    {
        const numericValue = parseFloat(value); 
        convertedValue = numericValue * conversionRate;
    }
    else{
        convertedValue = parseFloat(value.slice(0, -1));
    }
    return convertedValue*100000;
  }