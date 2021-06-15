//GLOBAL VARIABLES
const milToDays = (24*3600*1000);
const today = new Date();

//CREATING HOLIDAY CLASS
class Holiday {
  constructor({day,name}) {
    this.day = day;
    this.name = name;
  }

  //CALCULATE NUMBER OF DAYS
  getDays() {
    return parseInt((this.day-today)/milToDays);
  }

  //ADD "DAYS UNTIL" HOLIDAY TO LIST
  addToList() {
    $("#days-until").append(`<li>${this.getDays()} days until ${this.name}!</li>`);
  }
}

//CREATING HOLIDAY OBJECTS
let christ21 = new Holiday({day: new Date(2021,12,25), name: "Christmas"});
let ny22 = new Holiday({day: new Date(2022,01,01), name: "Valentines Day"});
let val22 = new Holiday({day: new Date(2022,02,14), name: "New Year"});

//UPDATING THE LIST
$("#trigger").click(function(){ 
  christ21.addToList();
  ny22.addToList();
  val22.addToList();
})
