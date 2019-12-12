import React from 'react';
import FlowersList from './components/FlowersList';
import AddSighting from './components/AddSighting';
import ViewFlower from './components/ViewFlower';
import UpdateFlower from './components/UpdateFlower';
import './App.css';

function App() {
  return (
      <div className="bg">
        <div className="row">
          <h1 className= "button:hover">UF Directory App</h1>
        </div>
        {/*Search bar was here */}
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Flowers</b>
                    </td>
                  </tr>
                  <FlowersList/>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewFlower/>
              <UpdateFlower/>
              <AddSighting/>
            </div>
          </div>
          {/*Credit to data was here */}
        </main>
      </div>
  );
}

export default App;
