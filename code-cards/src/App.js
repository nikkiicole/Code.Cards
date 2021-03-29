
import './App.css';
import {Route} from "react-router-dom"
import Footer from './Component/Footer'
import Header from './Component/Header'
import Form from './Component/Form'
import Categories from './Component/Categories'
import Flashcard from './Component/Flashcard'
function App() {
  
  return (
    <div className="App">
      <Header />
      <Route path ="/">
 {/* render categories */}
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      
      <p>Hello</p>
        <Footer />
    </div>
  )
}

export default App;
