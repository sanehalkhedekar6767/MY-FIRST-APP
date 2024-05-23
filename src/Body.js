import "./Body.css";
import { Component, React, Fragment } from "react";

//class component==>
class body extends Component {
  render() {
    return (
      <Fragment>
        <div class="container mt-5">
        <h2>Learning React Js</h2>
        <div class="card">
          <img src="logo512.png" alt="Image" class="reactImage" />
        </div>
      </div>
      </Fragment>
    );
  }
}
export default body;


//function component==>
// function body(){
//     return(
//         <div class="container mt-5">
//         <h2>Learning React Js</h2>
//         <div class="card">

//             <img src="logo512.png" alt="Image" class="reactImage"/>

//         </div>
//       </div>

//     );
// }
// export default body;
