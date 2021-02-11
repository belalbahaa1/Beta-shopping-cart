import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Section from './components/Section';
import "./App.css"
import { DataProvider } from "./components/Context";


class App extends Component {
 
  render() {
    return (
      <DataProvider>
         <div className="app">
        <BrowserRouter>
          <Header />
          <Section />
        </BrowserRouter>
    </div>
     </DataProvider>
    );
  }
}

export default App;
