import { useState } from 'react';
import { Days} from "./components/Days";
import './App.css';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>  
      <div className="App">   
          <p>
          This page should give you a count of the number of days from today to Christmas Day, New Years Day and Valentines Day.
          </p>
          <div>
            <button onClick={() => setIsToggled(!isToggled)}>Show Days Until
            </button>
            { isToggled && <Days />}
          </div>      
      </div>
    </>
  );
}

export default App;
