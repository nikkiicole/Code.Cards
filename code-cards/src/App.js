import axios from 'axios'
import {Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import { baseURL, config } from "./services"
import React from 'react'

import Footer from './Component/Footer'
import Header from './Component/Header'
import Form from './Component/Form'
import Categories from './Component/Categories'
import CategoryDetail from './Component/CategoryDetail'
import BelowHeader from './Component/BelowHeader'
import './App.css';

function App() {
  
  const [cards, setCards] = useState([]);
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
