// import { Component } from "react";

// class ClassBasedComponent extends Component {
//   state = {
//     showText: false,
//     changeColor: false,
//     count: 0,
//     changeCountStyle: false,
//   };

//   handleClick = () => {
//     const { showText, changeColor } = this.state;

//     this.setState({
//       showText: !showText,
//       changeColor: !changeColor,
//     });
//   };

//   handleCount = () => {
//     const { count } = this.state;

//     this.setState({
//       count: count + 1,
//       changeCountStyle: count + 1 >= 5,
//     });
//   };

//   render() {
//     const { showText, changeColor, count, changeCountStyle } = this.state;

//     return (
//       <div>
//         {showText && (
//           <h4 style={{ color: changeColor ? "red" : "black" }}>
//             Class based component
//           </h4>
//         )}

//         <button onClick={this.handleClick}>Toggle Text</button>

//         <button onClick={this.handleCount}>Increase Count Value</button>

//         <h3
//           style={{
//             color: changeCountStyle ? "blue" : "black",
//             fontSize: changeCountStyle ? "30px" : "12px",
//           }}
//         >
//           Count is {count}
//         </h3>
//       </div>
//     );
//   }
// }

// export default ClassBasedComponent;
