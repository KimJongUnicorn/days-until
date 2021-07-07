import { useState } from 'react';
import { Days} from "./components/Days";
import Sidebar from './components/Sidebar';
import './App.css';

const items= [
  {
    name: 'datesUntil', 
    label: 'Dates Until',
    items: [
      { 
        name: 'lookForward', 
        label: 'Dates to look forward to',
        items: [
          { name: 'bday', label: `My Birthday!`},
          { name: 'glasto22', label: 'Glastonbury 2022' },
          { name: 'worldCup22', label: 'World Cup' },

        ],
      },
      { 
        name: 'bankHolidays22', 
        label: 'UK 2022 Bank Holidays',
        items: [
          { name: 'newYear', label: `New Year's Day`},
          { name: 'goodFri', label: `Good Friday`},
          { name: 'easter', label: `Easter Monday`},
          { name: 'mayBank', label: `May Bank Holiday`},
          { name: 'springbank', label: `Spring Bank Holiday`},
          { name: 'plat', label: `Platinum Jubilee`},
          { name: 'summerBank', label: `Summer Bank Holiday`},
          { name: 'boxing', label: `Boxing Day`},
          { name: 'christmas', label: `Christmas Day`},
        ]
      },
    ],
  },
]

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
      <div className="App">  
        <div className="Side">
          <Sidebar items={items} />
        </div> 
        <div className="Page">
          <p>
          This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.
          </p>
          <div>
            <button onClick={() => setIsToggled(!isToggled)}>Show Days Until
            </button>
            { isToggled && <Days />}
          </div>
        </div>        
      </div>
    </>
  );
}

export default App;
