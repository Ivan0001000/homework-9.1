let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function getTotalSalary(department) {
  totalSalary = 0;
  if (Array.isArray(department)) {
    for (let employee of department) {
      totalSalary += employee.salary;
    }
  } else {
    for (let subDep of Object.values(department)) {
      totalSalary += getTotalSalary(subDep);
    }
  }
  return totalSalary;
}

let total = getTotalSalary(company);
console.log(total);
