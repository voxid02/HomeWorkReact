import React from "react";
import {Remarkable} from "remarkable";

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {value: "Hello,world"}
  }
  handleChange(event){
    this.setState({value: event.target.value})
  }

getRawMarkup(){
  const md = new Remarkable()
  return {__html: md.render(this.state.value)};
}

render(){
  return(
    <div className = "MarkdownEditor">
      <h3>Входные данные</h3>
      <label htmlFor="markdown-content">
        Введите что-то в формате markdown
      </label>
      <textarea
      id="markdown-content"
      onChange={this.handleChange}
      defaultValue={this.state.value}
      />
      <h3>Вывод</h3>
      <div 
        className="content"
        dangerouslySetInnerHTML={this.getRawMarkup()}
        />
     </div>
    )
  }
}
export default MarkdownEditor;