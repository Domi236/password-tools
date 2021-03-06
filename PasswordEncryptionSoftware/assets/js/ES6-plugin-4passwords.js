
  class Encryption {
    constructor(config) {
      this.login = config.loginField;
      this.hideField = config.elHideField;
      this.btnHidden = config.elHideBtn;
      this.hideOutput = config.elHideOutput;
      this.showField = config.elShowField;
      this.btnShown = config.elShowBtn;
      this.showOutput = config.elShowOutput;

      this.password1 = config.passwordOne;
      this.password2 = config.passwordTwo;
      this.password3 = config.passwordThree;
      this.password4 = config.passwordFour;
      
      
      this.newTxt = "";
      this.newTxt2 = "";
      this.oldText = "";
      this.oldText2 = "";

      this.uppercaseKeyArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      this.lowercaseKeyArray = ['a','b','c','d','e','f','g','h','i','j','k','l','k','n','o','p','q','r','s','t','u','v','w','x','y','z'];
      this.numbersKeyArray = ['0','1','2','3','4','5','6','7','8','9'];
      this.specialCharacterArray = ['!','§','$','%','&','/','(',')','=','?','*','#','+','~','{','}','ß','-'];
      this.randomArrayIndex = [];
      this.randomInput = "";

      this.password = "";
      this.input = "";
      this.output = "";
      this.number = 0;
      this.btnHidden.addEventListener('click', () => this.hide());
      this.btnShown.addEventListener('click', () => this.show());
    }
    
  hide() {
    this.password = this.login.value;
    this.input = this.hideField.value;
    if (this.password == this.password1 || this.password == this.password2 || this.password == this.password3 || this.password == this.password4) {
      this.nextLetter();
      this.uppercaseLetter();
      this.hideOutput.innerHTML = this.newTxt;
      this.newTxt = "";
    }else{
      this.randomArrayIndex = this.uppercaseKeyArray.concat(this.lowercaseKeyArray, this.numbersKeyArray, this.specialCharacterArray);
      this.randomInput = "";
      for (var i = 0; i < this.input.length; i++){
        this.randomInput += this.randomArrayIndex[Math.floor(Math.random() * this.randomArrayIndex.length)];
      }
      this.hideOutput.innerHTML = this.randomInput;
    }
  }

  nextLetter(){
    this.input = this.hideField.value;
    for (var i = 0; i < this.input.length; i++){
      if (this.password == this.password1){
        this.number = 1;
        if(this.input.charAt(i) === "z"){   
          this.newTxt = this.newTxt.concat("a");
        }
      }else if (this.password == this.password2){
        this.number = 2;
        if(this.input.charAt(i) === "y"){
          this.newTxt = this.newTxt.concat("a");
        }else if(this.input.charAt(i) === "z"){
          this.newTxt = this.newTxt.concat("b");
        }
      }else if (this.password == this.password3){
        this.number = 3;
        if(this.input.charAt(i) === "x"){
          this.newTxt = this.newTxt.concat("a");
        }else if(this.input.charAt(i) === "y"){
          this.newTxt = this.newTxt.concat("b");
        }else if(this.input.charAt(i) === "z"){
          this.newTxt = this.newTxt.concat("c");
        }
      }else if (this.password == this.password4){
        this.number = 4;
        if(this.input.charAt(i) === "w"){
          this.newTxt = this.newTxt.concat("a");
        }else if(this.input.charAt(i) === "x"){
          this.newTxt = this.newTxt.concat("b");
        }else if(this.input.charAt(i) === "y"){
          this.newTxt = this.newTxt.concat("c");
        }else if(this.input.charAt(i) === "z"){
          this.newTxt = this.newTxt.concat("d");
        }
      }
      if (this.input.charAt(i) === " "){
        this.newTxt = this.newTxt.concat("ß");
      } else {
        this.newTxt = this.newTxt.concat(String.fromCharCode(this.input.charAt(i).charCodeAt(0) + this.number));
      }
    }
  }
  
 
  uppercaseLetter(){
    for (var i = 0; i < this.newTxt.length; i++){
      switch(this.newTxt.charAt(i)){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        this.newTxt2 = this.newTxt2 + (this.newTxt.charAt(i).toUpperCase());
        break;
        default: 
        this.newTxt2 = this.newTxt2 + this.newTxt.charAt(i);
        break;
    }
    }
  }
  ////////////////////////////////////////////////////////////

  show() {
    this.password = this.login.value;
    this.output = this.showField.value;
    if (this.password == this.password1 || this.password == this.password2 || this.password == this.password3 || this.password == this.password4) {
      this.lasttLetter();
      this.lowerCaseLetter();
      this.showOutput.innerHTML = this.oldText;
      this.oldText = "";
    }else{
      this.randomArrayIndex = this.uppercaseKeyArray.concat(this.lowercaseKeyArray, this.numbersKeyArray, this.specialCharacterArray);
      this.randomOutput = "";
      for (var i = 0; i < this.output.length; i++){
        this.randomOutput += this.randomArrayIndex[Math.floor(Math.random() * this.randomArrayIndex.length)];
      }
    this.showOutput.innerHTML = this.randomOutput;
    }
  }

  lasttLetter(){
    this.output = this.showField.value;
    for (var i = 0; i < this.output.length; i++){
      if (this.password == this.password1){
        this.number = 1;
        if(this.output.charAt(i) === "a"){  
          this.oldText = this.oldText.concat("z");
        }
      }else if (this.password == this.password2){
        this.number = 2;
        if(this.output.charAt(i) === "a"){
          this.oldText = this.oldText.concat("y");
        }else if(this.output.charAt(i) === "b"){
          this.oldText = this.oldText.concat("z");
        }
      }else if (this.password == this.password3){
        this.number = 3;
        if(this.output.charAt(i) === "a"){
          this.oldText = this.oldText.concat("x");
        }else if(this.output.charAt(i) === "b"){
         this.oldText = this.oldText.concat("y");
        }else if(this.output.charAt(i) === "c"){
          this.oldText = this.oldText.concat("z");
        }
      }else if (this.password == this.password4){
        this.number = 4;
        if(this.output.charAt(i) === "a"){
          this.oldText = this.oldText.concat("w");
        }else if(this.output.charAt(i) === "b"){
          this.oldText = this.oldText.concat("x");
        }else if(this.output.charAt(i) === "c"){
          this.oldText = this.oldText.concat("y");
        }else if(this.output.charAt(i) === "d"){
          this.oldText = this.oldText.concat("z");
        }
      }
      if (this.output.charAt(i) === "ß"){
          this.oldText = this.oldText.concat(" ");
        }else{
      this.oldText = this.oldText.concat(String.fromCharCode(this.output.charAt(i).charCodeAt(0) - this.number));
      }
    }
  }

  lowerCaseLetter(){
    for (var i = 0; i < this.oldText.length; i++){
      switch(this.oldText.charAt(i)){
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        this.oldText2 = this.oldText2 + (this.oldText.charAt(i).toLowerCase());
        break;
        default: 
        this.oldText2 = this.oldText2 + this.oldText.charAt(i);
        break;
    }
    }
  }
};

/*example code*/
var software = new Encryption({
  loginField: document.getElementById('login'),
  elHideField: document.getElementById('input'),
  elHideBtn: document.getElementById('btnHide'),
  elHideOutput: document.getElementById('yourKey'),
  elShowField: document.getElementById('inputResult'),
  elShowBtn: document.getElementById('btnShow'),
  elShowOutput: document.getElementById('yourText'),
  passwordOne: 'Password',
  passwordTwo: 'Beene300',
  passwordThree: 'CallMeKing',
  passwordFour: 'Dominik'
});

// var software = new Encryption({
//   //you need to set all of these things
//   loginField: '.das-ist-mein-login-input-selector',
//   elHideField: '.das-ist-mein-hide-input-selector',
//   elHideBtn: '.das-ist-mein-hide-button-selector',
//   elHideOutput: '.das-ist-mein-hide-output-selector',
//   elShowField: '.das-ist-mein-show-input-selector',
//   elShowBtn: '.das-ist-mein-show-button-selector',
//   elShowOutput: '.das-ist-mein-show-output-selector',
//   passwordOne: 'write your password down here',
//   passwordTwo: 'write your password down here',
//   passwordThree: 'write your password down here',
//   passwordFour: 'write your password down here',
// });
