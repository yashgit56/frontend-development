// import React from "react";

// type TestProps = {
//   favcol?: string; // optional prop
// };

// type TestState = {
//   favoritecolor: string;
// };

// class Test extends React.Component<TestProps, TestState> {
//   constructor(props: TestProps) {
//     super(props);
//     this.state = {
//       favoritecolor: "lightblue",
//     };
//     document.body.style.backgroundColor = this.state.favoritecolor;
//     console.log("class componet constructor method called");
//   }

//   // Lifecycle method: sync state with props
//   static getDerivedStateFromProps(
//     props: TestProps,
//     state: TestState
//   ): Partial<TestState> | null {
//     console.log("class componet getDerivedStateFromProps method called");
//     if (props.favcol && props.favcol !== state.favoritecolor) {
//       document.body.style.backgroundColor = props.favcol;
//       return { favoritecolor: props.favcol }; // update state if prop changed
//     }
//     return null; // no update
//   }

//   //   componentDidMount() {
//   //     console.log("Test component has mounted!");
//   //     console.log("Initial favorite color:", this.state.favoritecolor);

//   //     setTimeout(() => {
//   //       console.log("componentDidMount method called");
//   //       this.setState({ favoritecolor: "yellow" });
//   //     }, 1000);
//   //   }

//   getSnapshotBeforeUpdate(prevProps: TestProps, prevState: TestState) {
//     document.getElementById("div1")!.innerHTML =
//       "Before the update, the favorite was " + prevState.favoritecolor;
//   }

//   shouldComponentUpdate(
//     nextProps: Readonly<TestProps>,
//     nextState: Readonly<TestState>,
//     nextContext: any
//   ): boolean {
//     return true; // default true
//   }

//   componentDidUpdate(
//     prevProps: Readonly<TestProps>,
//     prevState: Readonly<TestState>,
//     snapshot?: any
//   ): void {
//     document.getElementById("div2")!.innerHTML =
//       "The updated favorite is " + this.state.favoritecolor;
//   }

//   changeColor = () => {
//     this.setState({ favoritecolor: "blue" });
//     document.body.style.backgroundColor = "blue";
//   };

//   render(): React.ReactNode {
//     console.log("class componet render method called");
//     return (
//       <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>
//           Change color
//         </button>
//       </div>
//     );
//   }
// }

// export default Test;
