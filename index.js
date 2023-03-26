// Write your solution in this file!
const employee = {name: "Allan", streetAddress: "Kondele"};

function updateEmployeeWithKeyAndValue(employee, name, john) {
     return {...employee,[name]:john} 
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, Alex) {
    employee[name] = Alex;

    return employee;
  };

  function deleteFromEmployeeByKey(employee, name, john) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name, Alex) {
    delete employee.name;  
    return employee;
  };
