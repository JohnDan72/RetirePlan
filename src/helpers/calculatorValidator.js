
export const validMoney = (value = '') => {
    value = value.replace(/\$|,/g, "")
    if (value === '') return value;
    const match = value.match(/(^[1-9]\d{0,10}$)|(^[1-9]\d{0,10}\.$)|(^[1-9]\d{0,10}\.\d{1,2}$)/g) //accept: "450" | "450." | "450.85"
    if (match) {
        return formatMoneyAux(match[0])
    }

    return false
}

export const validInt = (value = '', maxLength = 2) => {
    if (value === '') return value;
    const match = value.match(/(^[1-9]\d{0,1}$)|(^[1-9]\d{0,1}\.\d{0,2}$)/g)
    if (match) return match[0]

    return false
}

export const validAge = (value = '', MAX_AGE) => {
    if (value === '') return value;
    const match = value.match(/^[1-9]\d{0,2}$/g)
    if(match) {
        if(Number(value) >= 0 && Number(value) <= MAX_AGE){
            return match[0]   
        }
    }
    return false
}

export const validTagInput = (value = [], item, maxItems = 6) => {
    if(!validRepetition(value, item)){ return }
    if(value.length > maxItems){
        value.pop()
        return
    }
    const validation = item.value.match(/(^[1-9]\d{0,10}$)|(^[1-9]\d{0,10}\.\d{1,2}$)/g)
    if (!validation || validation === '') {
        value.pop()
    }
    else {
        value.pop()
        value.push(formatMoney(item.value))
    }
    return
}

const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value)
}

const formatMoneyAux = (value) => {
    let result = ""
    const splited = value.split(".")
    const integerPart = Number(splited[0]).toLocaleString("en-US");
    const decimalPart = splited[1] != null ? '.' + splited[1] : null
    
    result += (decimalPart) ? integerPart + decimalPart : integerPart;
    return result
}

const validRepetition = (value, item) => {
    value.pop()
    if(!value.includes(formatMoney(item.value))){ 
        value.push(item.value)
        return true
    }
    return false;
}
