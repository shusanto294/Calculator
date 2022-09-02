const { createApp } = Vue
    
createApp({
  data() {
    return {
      calculation: 0,
      calculationString: '',
      calculationStringOnScreen: ''
    }
  },
  methods: {
      updateCanlucationString(input){
          this.calculationString += input;
          this.calculationStringOnScreen += input;
          console.log(this.calculationString);

          if(input == '+' || input == '-' || input == '*' || input == '/'){
              this.calculation = 0;
              this.calculationStringOnScreen = '';
          }
      },
      calculate(){
          var calculation = eval(this.calculationString);
          this.calculation = calculation;
          this.calculationStringOnScreen = '';
      },
      clear(){
          this.calculation = 0;
          this.calculationString = '';
          this.calculationStringOnScreen = '';
      }
  }
}).mount('#app')