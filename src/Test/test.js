import React, { Component } from 'react'

class Gree extends Component {

  constructor() {
    super()
    this.state = {
      id: "Subcribe",
      message: 'Please Subcribe',
      var : 0,
    }
    console.log(this.state.var);
  }
  changeMessage() {
    this.state.var++;
    if ( this.state.id === "Subcribe") {
      this.setState({
        id:"Subcribed",
        message: 'Thank for subscribing'
      })
    }
    else {
      this.setState({
        id:"Subcribe",
        message: 'Please Subcribe'
      })
    }




    console.log(this.setState.message)


  }

  render() {
    return (
      <div>
        <h1 >{this.state.message} {this.state.var}</h1>
        <button onClick={() => this.changeMessage()}  > {this.state.id}</button>

      </div>
    )
  }

}


// class Greet extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     static getDerivedStateFromProps(props, state) {
//       return {favoritecolor: props.favcol };
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }


// class Greet extends React.Component {
//     render() {
//         console.log(typeof(this.props));
//       return <h2>Hello, I am a {this.add("karim")} and {this.props.price}!</h2>;

//   }

//   add(props){
//       return this.props.brand +"and" +props + ".....";
//   }

//   }
// // var Greet = (props)=>{
// //     return <h2>Hellooo, I am a {props.brand} and {props.price}!</h2>;
// // }

export default Gree;