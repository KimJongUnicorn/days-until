import React from 'react'

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
    return (
      `${this.getDays()} days until ${this.name}!`
    );
  }
}

//CREATING HOLIDAY OBJECTS
let christ21 = new Holiday({day: new Date(2021,11,25), name: "Christmas"});
let ny22 = new Holiday({day: new Date(2022,0,1), name: "New Year"});
let val22 = new Holiday({day: new Date(2022,1,14), name: "Valentine's Day"});

const christmas = christ21.addToList();
const newYear = ny22.addToList();
const valentines = val22.addToList();

//CREATING THE LIST OF HOLIDAYS
export const Days = () => {
    return (
        <div>
            <ul>
                <li>{christmas}</li>
                <li>{newYear}</li>
                <li>{valentines}</li>
            </ul>
        </div>
    )
}

