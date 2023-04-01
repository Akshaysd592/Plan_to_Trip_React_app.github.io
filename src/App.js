import React , {useState} from "react";
import data from './data';
import Tours from "./components/Tours"
const App = () =>{
    
const [tours, setTours] = useState(data);

function removeTour(id){
    const newTours = tours.filter(tour=>tour.id !=id);
    setTours(newTours);
}

function AddTour(name){
     alert(name + " is added to Trip");
}
if(tours.length == 0){
  return (
    <div className="refresh">
      <h2>No Tours Left</h2>
      <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>

    </div>
  );
}

return (
  <div className="App">
    <Tours tours={tours} removeTour={removeTour} AddTour={AddTour}></Tours>
  </div>
)




}

export default App;



