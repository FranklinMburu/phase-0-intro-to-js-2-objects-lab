// Write your solution in this file!
// Initialize the employee object
let employee = {
    name: 'Sam'
  };
  
  // 1. updateEmployeeWithKeyAndValue - Non-destructive update
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };  // Using spread operator to return a new object
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue - Destructive update
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;  // Mutates the original object
    return employee;
  }
  
  // 3. deleteFromEmployeeByKey - Non-destructive delete
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };  // Create a copy of the object
    delete newEmployee[key];  // Remove the specified key from the copy
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey - Destructive delete
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];  // Mutates the original object
    return employee;
  }
  
  module.exports = {
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  