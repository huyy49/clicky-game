import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBars from "./components/NavBars";
import friends from "./friends.json";

class App extends Component {

  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highScore: 0,
  };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState(
        { highScore: this.state.score }
      );
      console.log(this.state.highScore);
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    this.setState(
      { score: 0 }
    );
    return true;
  }

  clickCount = id => {
    // eslint-disable-next-line array-callback-return
    this.state.friends.find((event, i) => {
      if (event.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState(
            { score: this.state.score + 1 },
          );
          console.log(this.state.score);
          this.state.friends.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        <NavBars score={this.state.score} highscore={this.state.highScore}>Clicky Game</NavBars>
        <Wrapper>
          <Title />
          {this.state.friends.map(friend => (
            <FriendCard
              clickCount={this.clickCount}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
