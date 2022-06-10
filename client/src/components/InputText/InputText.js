import React from 'react';

export class InputText extends React.Component {
    render() {
        return (
            <div className="form">
            <form action="/" method="POST">
              <div className="input-container">
                <label>Area </label>
                <input type="text" name="area" required />
              </div>
              <div className="input-container">
                <label>Occupation </label>
                <input type="text" name="occupation" required />
              </div>
              <div className="input-container">
                <label>Minimum Rent Price </label>
                <input type="text" name="minRentPrice" required />
              </div>
              <div className="input-container">
                <label>Maximum Rent Price </label>
                <input type="text" name="maxRentPrice" required />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        )
        
    }
}