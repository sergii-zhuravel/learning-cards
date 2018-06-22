import React from 'react'

const BiCards = ({state, changeRootState, toggleFullCards, reverseCards, onClickHandler} = state) =>
  <section className="jumbotron specialjum text-center">
    <div>
      <form action="" className="" >
        <div className="d-flex justify-content-center">
          <div className="col-md-6 text-right">
            <div className="form-check">
              <label className="form-check-label">
                <input onChange={() => toggleFullCards()} className="form-check-input" type="checkbox" checked={state.fullCard} />
                Show with translation
          </label>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <div className="form-check">
              <label className="form-check-label">
                <input onChange={() => reverseCards()} className="form-check-input" type="checkbox" checked={state.englishFirst} />
                Show English first
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div onClick={onClickHandler} style={{ cursor: 'pointer', borderRadius: 10 }} className="container bg-light box-shadow py-5">
      <h1 className="jumbotron-heading">{state.cards[state.currentCard].source}</h1>
      {state.fullCard &&
        <p className="lead text-muted">{state.cards[state.currentCard].translate}</p>
      }
      {state.cards[state.currentCard].examples &&
          state.cards[state.currentCard].examples.map((example, index) => <span key={index} style={{color:'Green'}}>{example}</span>)
      }
    </div>
    <div className="text-muted">
      <button onClick={() => { changeRootState({ currentCard: 0 }) }} className="fa fa-fast-backward"></button>
      <button onClick={() => { changeRootState({ currentCard: state.currentCard != 0 ? state.currentCard - 1 : 0 }) }} className="fa fa-step-backward"></button>
      -{state.currentCard + 1}-
      <button onClick={() => { changeRootState({ currentCard: state.currentCard < state.cards.length - 1 ? state.currentCard + 1 : state.cards.length - 1 }) }} className="fa fa-step-forward"></button>
      <button onClick={() => { changeRootState({ currentCard: state.cards.length - 1 }) }} className="fa fa-fast-forward"></button>
    </div>
  </section>

export default BiCards