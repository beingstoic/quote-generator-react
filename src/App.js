import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quoteText:'',
      quoteAuthor:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
componentDidMount(){
  this.handleChange();

}
  handleChange(){
    console.log('heya!');
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  fetch(proxyUrl+apiUrl)
    .then((response)=>response.json())
    .then((data)=>this.setState({
      quoteText:data.quoteText,
      quoteAuthor:data.quoteAuthor
    }))
  }
  
  render(){
    return(
      <div className="App">
        <div id="quote-box" className='quote-container'>
          <div id='text'>
               <i className="fas fa-quote-left fa-2x"></i>
    <span id="quote">{this.state.quoteText}</span>
          </div>
          <div className='author'>
          <span id="author">{this.state.quoteAuthor}</span>
          </div>
          
          <div id = 'button-container'>
            <div className='button-icon-container'>
              <a href="twitter.com/intent/tweet" id='tweet-quote'><i className="fab fa-twitter"></i></a>
              <a href="twitter.com/intent/tweet" id='tumble-quote'><i className="fab fa-tumblr"></i></a>
            </div>
           
            <button id='new-quote' onClick={()=>{this.handleChange()}}>New Quote</button>
          </div>
          
        <div className="loader" id="loader"></div>
        </div>
      </div>
    );
  }
 
}

export default App;
