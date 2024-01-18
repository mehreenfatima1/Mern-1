const supervisors = [
    { id: 1, name: "Jawwad", age: 19, lengthofservice: 9 },
    { id: 2, name: "Ali", age: 20, lengthofservice: 18 },
    { id: 3, name: "Abeer", age: 33, lengthofservice: 35 },
    { id: 4, name: "Sabih", age: 25, lengthofservice: 20 },
    { id: 5, name: "Mahi", age: 35, lengthofservice: 4 }
  ];
  
  const totalCompensation = {
    salary: 50000,
    MedicalAllowance: 10000,
    TravelAllowance: 5000,
    HousingAllowance: 5000,
    totalCompens: function () {
      const results = [];
  
      for (let i = 0; i < supervisors.length; i++) {
        let totalCompensation = this.salary;
  
        if (supervisors[i].age > 30) {
          if (supervisors[i].lengthofservice > 12) {
            totalCompensation += this.MedicalAllowance + this.TravelAllowance + this.HousingAllowance;
          } else {
            totalCompensation += this.MedicalAllowance;
          }
        } else if (supervisors[i].age < 30 && supervisors[i].lengthofservice > 12) {
          totalCompensation += this.TravelAllowance + this.HousingAllowance;
        }
  
        results.push(`The total compensation of ${supervisors[i].name} is ${totalCompensation}`);
      }
  
      return results;
    }
  };
  
  
    supervisors.__proto__=totalCompensation;
  
  
  console.log(supervisors.totalCompens());
  
  
  