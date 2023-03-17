import { Schema } from "rsuite";
const { StringType } = Schema.Types;


const minSalary = 1;
// const maxSalary = 20;
const minRate = 1;
const minAge = 1;

const model = Schema.Model({
    salary: StringType()
        .isRequired('Campo requerido')
        .minLength(minSalary, `Debe tener mínimo ${minSalary} cifras`)
        .addRule((value, data) => {
            const transformed = value.replace(/\$|,/g, "")
            return !(/^[1-9]\d*\.{1,2}$/.test(transformed));
        }, 'Ingresa una cantidad válida (example: 4500, 4500.51)')
    ,
    rate: StringType()
        .isRequired('Campo requerido')
        .minLength(minRate, `Debe tener mínimo ${minRate} cifras`)
        .addRule((value, data) => {
            return !(/^[1-9]\d{0,1}\.{1,2}$/.test(value));
        }, 'Ingresa una tasa válida (example: 10, 10.51)')
    ,
    age: StringType()
        .isRequired('Campo requerido')
        .minLength(minAge, `Debe tener mínimo ${minAge} cifras`)
        .addRule((value, data) => {
            return !(/(^\D)|(^0)/.test(value));
        }, 'Ingrese una edad válida')
});

export default model;