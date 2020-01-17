import React from 'react';
import Sidebar from './components/sidebar/Sidebar'
import './styles/index.scss';
import Content from "./components/content/Content";

function App() {
  return (
    <section className="app">
        <Sidebar/>
        <Content/>
    </section>
  );
}

export default App;
