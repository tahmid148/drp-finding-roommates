import React from 'react';

export class InputText extends React.Component {
    render() {
        return (
            <div className="form">
            <form>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div>
        )
        
    }
}