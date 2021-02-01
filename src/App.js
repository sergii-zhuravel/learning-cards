import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import BiCards from "./components/BiCards";
import NewWords from "./components/NewWords";
import menu from "./data/menu.json";
import business from "./data/1.json";
import mood from "./data/2.json";
import newWords from "./data/3.json";
import conditional from "./data/4.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: business.items,
      mode: "cards",
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onSubjectClick = this.onSubjectClick.bind(this);
  }

  changeRootState(object) {
    this.setState(object);
  }

  onClickHandler() {
    this.setState((prevState) => ({
      currentCard:
        prevState.currentCard >= prevState.cards.length - 1
          ? 0
          : prevState.currentCard + 1,
    }));
  }

  toggleFullCards() {
    this.setState((prevState) => ({
      fullCard: !prevState.fullCard,
    }));
  }

  reverseCards() {
    this.setState((prevState) => ({
      englishFirst: !prevState.englishFirst,
      cards: prevState.cards.map((el) => {
        return { source: el.translate, translate: el.source };
      }),
    }));
  }

  onSubjectClick(id) {
    let cards = [];
    switch (id) {
      case 1:
        cards = business;
        break;
      case 2:
        cards = mood;
        break;
      case 3:
        cards = newWords;
        break;
      case 4:
        cards = conditional;
        break;
      default:
        cards = business;
    }

    this.setState(() => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: cards.items,
    }));
  }

  onMoodIdiomsClick() {
    this.setState((prevState) => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: mood.items,
    }));
  }
  onNewWordsClick() {
    this.setState((prevState) => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: newWords.items,
    }));
  }
  onConditionsClick() {
    this.setState((prevState) => ({
      isMenuOpen: false,
      currentCard: 0,
      fullCard: true,
      englishFirst: true,
      cards: conditional.items,
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            className={
              "bg-dark collapse " + (this.state.isMenuOpen ? "show" : "")
            }
            id="navbarHeader"
          >
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4 className="text-white">About</h4>
                  <p className="text-muted">
                    Choose a subject and train the phrases.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4 className="text-white">Subjects</h4>
                  <ul className="list-unstyled">
                    {menu.source.map((item) => (
                      <li key={item.id}>
                        <a
                          onClick={() => {
                            this.onSubjectClick(item.id);
                          }}
                          href="#"
                          className="text-white"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark box-shadow">
            <div className="container d-flex justify-content-between">
              <a
                href="javascript:;"
                className="navbar-brand d-flex align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                <strong>Learning cards</strong>
              </a>
              <button
                onClick={() => {
                  this.setState({ isMenuOpen: !this.state.isMenuOpen });
                }}
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
        <main>
          {this.state.mode === "cards" && (
            <BiCards
              state={this.state}
              changeRootState={this.changeRootState.bind(this)}
              toggleFullCards={this.toggleFullCards.bind(this)}
              reverseCards={this.reverseCards.bind(this)}
              onClickHandler={this.onClickHandler.bind(this)}
            />
          )}
          {this.state.mode === "new-words" && <NewWords />}
        </main>
      </div>
    );
  }
}

export default App;
