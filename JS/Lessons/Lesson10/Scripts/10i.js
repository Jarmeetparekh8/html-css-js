let calculation = localStorage.getItem('cal') || "";
    showCalculation(calculation);
    function updateCalculation(val){
      calculation += val;
      localStorage.setItem('cal',calculation);
      showCalculation(calculation)
    }
    function evalcal(){
      let result = eval(calculation);
      calculation = String(result);
      localStorage.setItem('cal',calculation);
      return result;
    }
    function showCalculation(param){
      let display = document.querySelector('.displayCalculation');
      if(param === "reset"){
      display.innerText = `Calculation resetted !`;
      }
      else{
        display.innerText = param;
      }
    }