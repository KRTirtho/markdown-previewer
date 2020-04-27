import React from 'react';
import './App.css';
import marked from 'marked'

const def= "for different size of fonts(h1-h6) use: \n# h1 \n## h2\n### h3\n#### h4\n##### h5\n###### h6\n for link use: \n[link](www.something.com)\nfor Inline code use:\n`<p>Ok</p>` \nfor code Block use:\n```javascript \nfunction add(num1, num2) {\n return num1 + num2; \n} \n``` \nfor list Item use: \n* List Item \n> BlackQuote \nfor Image use:\n![Markdown Logo](https://markdown-here.com/img/icon256.png) \nfor bold Text use:\n__Bolded Text__";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input: ''
    } 
    this.handleChange = this.handleChange.bind(this) 
  }
handleChange(e){
  this.setState({
    input: e.target.value
  })
}  
  render(){
      return (
        <div>
          <div className="inputWrapper">
            <h1>Type in something</h1>
            <textarea placeholder={"Type Your MarkDown Language Here...\n\n\n"+def} id="editor" onChange={this.handleChange}/>
          </div>
          <h1 className="arrow">=></h1>
          <div style={{float:"right"}} className="prevWrapper">
            <h1 className="see">See what's heppening</h1>
            {this.state.input===''?<p id="preview" dangerouslySetInnerHTML={{__html:marked(def)}}></p>:<p id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></p>}
          </div>
          <div className="Instruction">
          <h2>Instruction: How to use MarkDown(MD)</h2>
          <div className="content-instuction">
          <p>for different size of fonts(h1-h6) use: <br/># h1 <br/>## h2<br/>### h3<br/>#### h4<br/>##### h5<br/>###### h6<br/> for link use: <br/>[link](www.something.com)<br/>for Inline code use:<br/>{`<p>Ok</p>`} <br/>for code Block use:<br/>```javascript <br/>function add(num1, num2) {"{"}<br/> return num1 + num2; <br/>{"}"} <br/>``` <br/>for list Item use: <br/>* List Item <br/>> BlackQuote <br/>for Image use:<br/>![Markdown Logo](https://markdown-here.com/img/icon256.png) <br/>for bold Text use:<br/>__Bolded Text__</p>
          </div>
          </div>
          <footer>
            <p>Made by <a href="https://www.facebook.com/Kr.Tirtho">KR Tirtho</a> | Copyright&copy; 2019-2020</p>
          </footer>
        </div> 
      )
  }
}

export default App;

