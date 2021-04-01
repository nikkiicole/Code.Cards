
import './App.css';
import axios from 'axios'
import {Route} from "react-router-dom"
import Footer from './Component/Footer'
import Header from './Component/Header'
import Form from './Component/Form'
import Categories from './Component/Categories'
import CategoryDetail from './Component/CategoryDetail'
import BelowHeader from './Component/BelowHeader'
import { baseURL, config } from "./services"
import { useState, useEffect } from 'react'

function App() {
  
  const [cards, setCards] = useState([]);
  //this is used to togglle between true and flase this resolves the refresh issue
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getData();
  }, [toggle]);

  async function getData() {
    let response = await axios.get(baseURL, config);
    setCards(response.data.records);
  }
  // console.log(categories)
  
  return (
    <div className="App">
      <Header />
<BelowHeader />

      <Route exact path ="/">
        <Categories />
      </Route>

        {/* render categories */}
        {/* run callback function for each thing if return is truth it will include that in the filtered array 
        each card will check if true itll come through array */}   
      <Route path ="/arrays">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Arrays")}/>
      </Route>

      <Route path ="/objects">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Objects")} />
      </Route>

      <Route path ="/functions">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Functions")} />
      </Route>

      <Route path ="/statements">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Statements")} />
      </Route>

      <Route path ="/expressions">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Expressions & Operators")} />
      </Route>

      <Route path ="/loops">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Loops")} />
      </Route>

      <Route path ="/dom">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "The DOM")} />
      </Route>

      <Route path ="/react">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "React")} />
      </Route>

      <Route path ="/types">
        <CategoryDetail cards={cards.filter(card => card.fields.categories === "Types, Values, & Variables")} />
      </Route>

      <Route path="/new">
        <Form setToggle={setToggle} cards={cards }/>
      </Route>
      
      
        <Footer />
    </div>
  )
}

export default App;
