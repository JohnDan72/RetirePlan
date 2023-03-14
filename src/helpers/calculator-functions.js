

export const calculeRetPlan = ({ salary = "$30,000.00", rate = "10.0", month_pay = ["$5,000","$10,000.00", "20,000.00"] }) => {
    

    const salaryGoal = Number(salary.replace(/\$|,/g, ""))
    const rateNumber = Number(rate)


    const response = month_pay.map((item, ind) => {
        let currentYear = new Date().getFullYear()
        let iteration = 1
        let currentSalaryAdvance = 0.0
        const annualSaving = Number(item.replace(/\$|,/g, "")) * 12.0;
        const annualSavingString = formatMoney(annualSaving);
        const maxYears = 100
        const result = {
            id: (ind + 1),
            salary,
            annualSaving: annualSavingString,
            rate: rate + "%",
            month_pay: item,
            success: false,
            advice: "",
            breakDown: [
                {
                    year: currentYear + "",
                    return: "$0.00",
                    investment_and_returns: annualSavingString,
                    final_salary: "$0.00",
                }
            ]
        }

        while ((iteration < maxYears) && (currentSalaryAdvance < salaryGoal)) {
            const auxPrevInvestment = Number(result.breakDown[iteration - 1].investment_and_returns.replace(/\$|,/g, ""))
            const newReturn = auxPrevInvestment * (rateNumber / 100)
            const newAccumulation = newReturn + auxPrevInvestment + annualSaving
            currentSalaryAdvance = newReturn / 12
            result.breakDown.push({
                year: ++currentYear + "",
                return: formatMoney(newReturn),
                investment_and_returns: formatMoney(newAccumulation),
                final_salary: formatMoney(currentSalaryAdvance)
            })
            iteration++
        }

        if (currentSalaryAdvance < salaryGoal) {
            result.advice = `Tu meta en un máximo de 100 años no podrá cumplirse con los parámetros insertados, Se recomiendoa intentar de nuevo, con un menor salario objetivo, aumentando la tasa de rendimiento o aumentando los abonos mensuales`
        }
        else {
            result.success = true
        }

        return result;

    })

    return response;

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
