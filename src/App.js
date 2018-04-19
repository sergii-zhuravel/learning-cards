import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      fullCard: true,
      cards: [
        {source: "Dead wood", translate: "балласт, что=нибуть негодное, бесполезное"},
        {source: "Put your oar in", translate: "Вставити свої п'ять копійок, втрутитися (в розмову)"},
        {source: "Been counter", translate: "Бухгалтер, людина що веде розрахунки"},
        {source: "Rat race", translate: "Бешенная погоня за богатством, ожесточенная конкуренция"},
        {source: "Dogsbody", translate: "мальчик на побегушках, принеси подай, за маленькую плату"},
        {source: "Cushy job", translate: "Непільная работенка, тепленькое местечко"},
        {source: "Get the boot", translate: "Бьіть уволенньім"},
        {source: "A Mickey Mouse job", translate: "Халтура, несерьезная, наспех сделанная работа"},
        {source: "Lip service", translate: "Неискренние словоизлияния, пустіе слова"},
        {source: "Lemon", translate: "Барахло, недоброкачественное изделие"}
      ]
    }
    this.onClickHandler = this.onClickHandler.bind(this)

  }
  
  onClickHandler() {
    this.setState(prevState => ({ 
      currentCard: (prevState.currentCard >= prevState.cards.length-1) ? 0 : prevState.currentCard + 1
    }))
  }
  onSelectHandler(data = true) {
    this.setState(prevState => ({ 
      fullCard: data
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a href="javascript:;" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <strong>Learning cards</strong>
              </a>
              <button onClick={this.onClickHandler} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
        <main>
          <section  className="jumbotron specialjum text-center">
            <div>
              <form action="" className="" >
                <div className="row">
                  <div className="col-md-6 text-right">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input onChange={() => this.onSelectHandler(true)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked={this.state.fullCard} />
                        Show full cards
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-left">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input onChange={() => this.onSelectHandler(false)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                        Show without translation
                    </label>
                    </div>
                  </div>
                </div>
                </form>
            </div>
                <div onClick={this.onClickHandler} style={{cursor:'pointer', borderRadius: 10}} className="container bg-light box-shadow py-5">
                  <h1 className="jumbotron-heading">{this.state.cards[this.state.currentCard].source}</h1>
                  {this.state.fullCard &&
                    <p className="lead text-muted">{this.state.cards[this.state.currentCard].translate}</p>
                  }
                </div>
                <span className="text-muted">-{this.state.currentCard + 1}-</span>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
