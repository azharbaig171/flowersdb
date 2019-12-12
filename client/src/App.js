import React from 'react';
import logo from './logo.svg';
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
                  {/*All Flowers List goes here */}
                </table>
              </div>
            </div>
            <div className="column2">
              {/*View Flowers List goes here */}
              {/*Add Flowers List goes here */}
            </div>
          </div>
          {/*Credit to data was here */}
        </main>
      </div>
  );
}

export default App;
