
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Card from "./card";
import data from "./data";
import "../css/app.css"

function App() {
    const dataarr = data.map(item =>{
        return <Card
            key={item.id}
            {...item}
        />
    } )
  return (
    <div className="container App">
      <Navbar/>
      <MainContent/>
        <div className="flex-container">
            {dataarr}
        </div>

    </div>
  );
}

export default App;
