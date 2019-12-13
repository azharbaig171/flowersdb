import React, { useState } from 'react';
import FlowersList from './components/FlowersList';
import AddSighting from './components/AddSighting';
import ViewFlower from './components/ViewFlower';
import UpdateFlower from './components/UpdateFlower';
import './App.css';

function App() {
  const [flower, setFlower] = useState('');

  function updateFlower(flower) {
    setFlower(flower);
  }
  return (
      <div className="bg">
        <div className="row">
          <h1 className= "button:hover">Flowers Database</h1>
        </div>
        {/*Search bar was here */}
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <FlowersList
                  updateFlower = {updateFlower.bind(this)}/>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewFlower
              flower = {flower}
              />
              <UpdateFlower/>
            </div>
            <AddSighting/>
          </div>
        </main>
      </div>
  );
}

export default App;
