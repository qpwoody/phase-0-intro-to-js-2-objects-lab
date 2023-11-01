// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "12 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newObj = {...employee}
    delete newObj.name
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name
    return employee
}
