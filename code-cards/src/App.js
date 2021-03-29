
import './App.css';
import axios from 'axios'
import {Route} from "react-router-dom"
import Footer from './Component/Footer'
import Header from './Component/Header'
import Form from './Component/Form'
import Categories from './Component/Categories'
import Flashcard from './Component/Flashcard'
import { baseURL, config } from "./services"
import {useState, useEffect} from 'react'
function App() {
  
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let response = await axios.get(baseURL, config);
    setCards(response.data.records);
  }
  // console.log(categories)
  
  return (
    <div className="App">
      <Header />
      <Route exact path ="/">
        {/* render categories */}
         <Categories />
        </Route>
      <Route path ="/arrays">
        {/* render categories */}
        {cards.map((category) => {
          console.log(category)
          // filter(category=> category.includes("Arrays")) 
          //figure out how to filter each category 
          /// tried includes 
          // tried filter 
          return <Flashcard category={category}
            key={category.id} />;
         
        
        })}
      </Route>
      <Route path ="/objects">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/functions">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/statements">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/expressions">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/loops">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/dom">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/react">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
      </Route>
      <Route path ="/types">
        {/* render categories */}
        {cards.map((category)=>{
          return <Flashcard category={category} key={category.id} />;
        })}
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
