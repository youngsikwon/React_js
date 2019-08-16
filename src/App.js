import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

class App extends Component {
   constructor(props){
     super(props);
     this.state = {
       subject : {
         title:'WEB', sub:'World Wid web!'
       },
       contents: [
         {id:1, title:'HTML', desc:'HTML is for inffomatin'},
          {id:2, title:'CSS', desc:'CSS is for design'},
          {id:3, title:"JavaScript", desc:"JavaScript is for intractive"}
       ]
     }
   }
  render() {
    return (
      <div className="App">
        <Subject 
        ]
        title = {this.state.subject.title}
        sub = {this.state.subject.sub}>
        </Subject>
         <TOC data={this.state.contents}></TOC>
         <Content title="HTML" desc="HTML is HyperText Markup Langues"></Content>
      </div>
      
    );
  }
}

export default App;

