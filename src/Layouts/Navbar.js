// // import { Badge, Button } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";
// // import { CartContext } from "../App";

// const Navbars = () => {
//   const [isLogged, setisLogged] = useState(false);

//   //   const { cart, setCart } = React.useContext(CartContext);

//   useEffect(() => {
//     checkStorage();
//     return () => {};
//   }, [isLogged]);

//   function checkStorage() {
//     if (localStorage.getItem("user", "newCartItems")) {
//       setisLogged(true);
//     } else {
//       setisLogged(false);
//     }
//   }
//   const logout = () => {
//     localStorage.removeItem("user");
//     setisLogged(false);
//   };

//   return (
//     <div>
//       <Navbar bg="light">
//         <Container>
//           <Navbar.Brand className="nav-link">Logo</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <li className="nav-link">
//                 {!isLogged ? (
//                   <Link to="/login">Login</Link>
//                 ) : (
//                   <Link to="/admin" onClick={logout}>
//                     Logout
//                   </Link>
//                 )}
//               </li>

//               <li
//                 className="nav-link"
//                 style={{
//                   margin: "1px",
//                   padding: "2px",
//                   textDecoration: "none",
//                 }}
//               ></li>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };

// export default Navbars;
