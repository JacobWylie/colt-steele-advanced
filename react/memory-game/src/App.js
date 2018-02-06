import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Navbar from './Navbar';
import Card from './Card';

// A card can be in 1 of 3 CardStates
// HIDING - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
//            the card should never move from MATCHING to another state during
//            game play.
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class App extends Component {
    constructor(props) {
      super(props);

      // The cards that we will use for our state.
      let cards = [
        {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
        {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
        {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
        {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
        {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
        {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
        {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
        {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
        {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
        {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
        {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
        {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
        {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
        {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
        {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
        {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
      ];
      cards = shuffle(cards);
      this.state = {cards, noClick: false};
    }

  render() {
    const cards = this.state.cards.map(card => (
      <Card key={card.id} />
    ));

    return (
      <div>
        <Navbar/>
        {cards}
      </div>
    );

  }
}

export default App;



























