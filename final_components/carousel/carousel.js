import React from "react";
import { View, Text, VrButton } from "react-vr";

import CarouselItem from "./CarouselItem";
import { IMAGE, TEXT } from "./cardTypes";
import CardContainer from "../cards/CardContainer";

class CardCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardNumber: this.props.initialCard,
      textSlices: [],
      currentTextSliceIndex: 0,
      currentTextSlice: '',
      cardType: this.props.cardType,
      largeText: false,
      maxTextSize: this.props.maxTextSize || this.props.flex > 1 ? 200 : 120
    };

    this.nextCard = this.nextCard.bind(this);
    this.prevCard = this.prevCard.bind(this);
    this.nextSlice = this.nextSlice.bind(this);
    this.prevSlice = this.prevSlice.bind(this);
    this.textSet = this.textSet.bind(this);
  }

  componentDidMount() {
    this.textSet();
    if (
      this.props.cardType === IMAGE &&
      this.props.itemCollection &&
      this.props.itemCollection.length > 1
    ) {
      this.setState({ largeText: true });
    }
  }

  textSet(iterateCount = this.state.maxTextSize) {
    if (typeof this.props.children === "string") {
      const text = this.props.children || this.props.text;
      if (text.length < this.state.maxTextSize) {
        this.setState({ currentTextSlice: text });
      } else {
        for (let i = 0; i < text.length; i += iterateCount) {
          this.state.textSlices.push(text.slice(i, i + iterateCount));
        }

        this.setState({
          currentTextSlice: this.state.textSlices[0],
          largeText: true
        });
      }
    } else {
      for (let text of this.props.children) {
        text = text.props.children;
          for (let i = 0; i < text.length; i += iterateCount) {
            this.state.textSlices.push(text.slice(i, i + iterateCount));
          }
      }

      this.setState({
        currentTextSlice: this.state.textSlices[0],
        largeText: true
      });
    }
  }

  nextSlice() {
    const nextSliceNum = this.state.currentTextSliceIndex + 1;

    if (nextSliceNum > this.state.textSlices.length - 1) {
      this.setState({
        currentTextSlice: this.state.textSlices[0],
        currentTextSliceIndex: 0
      });
    } else {
      this.setState({
        currentTextSliceIndex: nextSliceNum,
        currentTextSlice: this.state.textSlices[nextSliceNum]
      });
    }
  }

  prevSlice() {
    const prevSliceNum = this.state.currentTextSliceIndex - 1;

    if (prevSliceNum < 0) {
      this.setState({
        currentTextSlice: this.state.textSlices[
          this.state.textSlices.length - 1
        ],
        currentTextSliceIndex: this.state.textSlices.length - 1
      });
    } else {
      this.setState({
        currentTextSlice: this.state.textSlices[prevSliceNum],
        currentTextSliceIndex: prevSliceNum
      });
    }
  }

  nextCard() {
    const nextCardNum = this.state.cardNumber + 1;

    if (nextCardNum > this.props.itemCollection.length - 1) {
      this.setState({
        cardNumber: 0
      });
    } else {
      this.setState({
        cardNumber: nextCardNum
      });
    }
  }

  prevCard() {
    const prevCardNum = this.state.cardNumber - 1;

    if (prevCardNum < 0) {
      this.setState({
        cardNumber: this.props.itemCollection.length - 1
      });
    } else {
      this.setState({
        cardNumber: prevCardNum
      });
    }
  }

  render() {
    const { itemCollection } = this.props;
    if (itemCollection) {
      const canNext = this.state.cardNumber < itemCollection.length;
      const canPrev = this.state.cardNumber > 0;
    }

    return (
      <CardContainer flex={this.props.flex || 1}>
        <View
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <CarouselItem
            card={itemCollection ? itemCollection[this.state.cardNumber] : null}
            cardType={this.state.cardType}
            flex={this.props.flex}
          >
            {this.state.currentTextSlice}
          </CarouselItem>

          {this.state.largeText && (
            <View>
              <VrButton
              style={{
                borderRadius: 40,
                opacity: 0.85,
                paddingLeft: 0.06,
                borderWidth: 0.01,
                width: 70,
                height: 70,
                backgroundColor: "#333",
                borderColor: "#222",
                position: "absolute",
                left: 10,
                bottom: 10
              }}
                onClick={
                  this.state.cardType === IMAGE ? this.prevCard : this.prevSlice
                }
              >
                <Text
                  style={{
                    color: "white",
                    bottom: 25,
                    left: 10,
                    fontSize: 80,
                    fontWeight: "bold"
                  }}
                >
                  {"<"}
                </Text>
              </VrButton>
              <VrButton
                onClick={
                  this.state.cardType === IMAGE ? this.nextCard : this.nextSlice
                }
                style={{
                  borderRadius: 40,
                  opacity: 0.85,
                  paddingLeft: 0.06,
                  borderWidth: 0.01,
                  width: 70,
                  height: 70,
                  backgroundColor: "#333",
                  borderColor: "#222",
                  position: "absolute",
                  right: 10,
                  bottom: 10
                }}
              >
                <Text
                  style={{
                    color: "white",
                    bottom: 25,
                    left: 15,
                    fontSize: 80,
                    fontWeight: "bold"
                  }}
                >
                  {">"}
                </Text>
              </VrButton>
            </View>
          )}
        </View>
      </CardContainer>
    );
  }
}

export default CardCarousel;
