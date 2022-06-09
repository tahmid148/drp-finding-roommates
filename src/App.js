import './App.css';

function App() {
  return (
    <div className="App">
      <h1 data-testid="header">IS THIS DEPLOYED?!</h1>
      <script>
        
      var img = document.createElement("img");
      img.src = "drpLandingPage.png";

      var div = document.getElementById("x");
      div.appendChild(img);
      div.setAttribute("style", "text-align:center");

      </script>
    </div>
  );
}

export default App;
