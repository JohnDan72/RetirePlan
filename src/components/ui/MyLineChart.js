import React, { useContext } from 'react';
import { Line, LineChart } from '@rsuite/charts';
import { GeneralContext } from '../../GeneralContext';


const MyLineChart = () => {
    const { planData: data } = useContext(GeneralContext).reducerData;

    const getChartData = () => {
        const result = []
        const sortedData = data.sort((a, b) => b.breakDown.length - a.breakDown.length);
        const dataLength = data.length;
        for (let ind = 0; ind < sortedData[0].breakDown.length; ind++) {
            const dataLines = [sortedData[0].breakDown[ind].year]
            for (let j = 0; j < dataLength; j++) {
                const element = sortedData[j].breakDown[ind];
                if (element) {
                    dataLines.push(Number(clean(element.final_salary)))
                }
                else {
                    dataLines.push(null)
                }
            }
            
            result.push(dataLines)
        }
        return result

    }
    const clean = (text) => (text.replace(/\$|,/g, ""))
    return (
        <LineChart data={getChartData()}>
            {
                data.map((item, ind) => (
                    <Line key={ind} name={`Abono: ${item.month_pay}`} area />
                ))
            }
        </LineChart>
    );
}

export default MyLineChart;