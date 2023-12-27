
function showresult() {
    if (process.argv.length <= 2) {
      console.log("Please provide some numbers");
      return;
    }
  
    var nums = process.argv.slice(2);
  
    for (var i = 0; i < nums.length; i++) {
      if (isNaN(nums[i])) {
        console.log("Please provide all the numbers");
        return;
      }
    }
  
    function addition() {
      var result = 0;
      for (var i = 0; i < nums.length; i++) {
        result += parseInt(nums[i]);
      }
      return result;
    }
  
    function subtraction() {
      var result = parseFloat(nums[0]);
      for (var i = 1; i < nums.length; i++) {
        result -= nums[i];
      }
      return result;
    }
  
    function multiplication() {
      var result = 1;
      for (var i = 0; i < nums.length; i++) {
        result *= parseFloat(nums[i]);
      }
      return result;
    }
  
    console.log(
      "Addition result is " +
        addition() +
        ", Subtraction result is " +
        subtraction() +
        ", Multiplication result is " +
        multiplication()
    );
  }
  
  showresult();
    









