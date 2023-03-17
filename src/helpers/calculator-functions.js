

export const calculeRetPlan = ({ salary = "$30,000.00", rate = "10.0", month_pay = ["$5,000", "$10,000.00", "20,000.00"], age = 26 }, MAX_AGE) => {
    const salaryGoal = Number(salary.replace(/\$|,/g, ""))
    const rateNumber = Number(rate)
    const ageNumber = Number(age)

    const response = month_pay.map((item, ind) => {
        let currentYear = new Date().getFullYear()
        let iteration = 1
        let currentSalaryAdvance = 0.0
        const annualSaving = Number(item.replace(/\$|,/g, "")) * 12.0;
        const annualSavingString = formatMoney(annualSaving);
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
                    id: iteration,
                    key: `t-${ind}-r-${iteration-1}`,
                    year: currentYear + "",
                    return: "$0.00",
                    investment_and_returns: annualSavingString,
                    final_salary: "$0.00",
                    current_age: ageNumber + ' años',
                }
            ]
        }

        while (((ageNumber + iteration) < MAX_AGE) && (currentSalaryAdvance < salaryGoal)) {
            const auxPrevInvestment = Number(result.breakDown[iteration - 1].investment_and_returns.replace(/\$|,/g, ""))
            const newReturn = auxPrevInvestment * (rateNumber / 100)
            const newAccumulation = newReturn + auxPrevInvestment + annualSaving
            currentSalaryAdvance = newReturn / 12
            result.breakDown.push({
                id: (iteration + 1),
                key: `t-${ind}-r-${iteration}`,
                year: ++currentYear + "",
                return: formatMoney(newReturn),
                investment_and_returns: formatMoney(newAccumulation),
                final_salary: formatMoney(currentSalaryAdvance),
                current_age: (ageNumber + iteration) + ' años'
            })
            iteration++
        }

        if (currentSalaryAdvance < salaryGoal) {
            result.advice = `Tu meta no podrá cumplirse antes de que cumplas máximo ${MAX_AGE} años debido a que los parámetros insertados pueden ser poco realistas. Intenta de nuevo, con un menor salario objetivo, aumentando la tasa de rendimiento o aumentando los abonos mensuales`
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
