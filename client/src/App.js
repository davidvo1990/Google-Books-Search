import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Pages/Search";
import Saved from "./components/Pages/Saved";
import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Jumbotron /> */}
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
// import Nav from "./components/Nav";
// import Input from "./components/Input";
// import Button from "./components/Button";
// import API from "./utils/API";
// import { BookList, BookListItem } from "./components/BookList";
// import { Container, Row, Col } from "./components/Grid";

// // document.on("click", ".savedButton", function(){
// //   console.log(this)
// // })

// class App extends Component {
//   state = {
//     books: [],
//     bookSearch: "",
//     id : 0
//   };

//   handleInputChange = event => {
//     // Destructure the name and value properties off of event.target
//     // Update the appropriate state
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   // handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   API.getBooksAPI(this.state.bookSearch)
//   //     .then(res => {
//   //       // console.log(res.data.items)
//   //       this.setState({ books: res.data.items })
//   //     })
//   //     .catch(err => console.log(err));
//   // };

//   handleFormSubmit = event => {
//     // When the form is submitted, prevent its default behavior, get update state
//     event.preventDefault();

//     API.searchBooks(this.state.bookSearch).catch(err => console.log(err))

//     setTimeout(() =>
//       API.getBooks()
//         .then(res => {
//           // console.log(res.data.items)
//           // console.log(this.state.bookSearch)
//           // console.log(res.data)
//           this.setState({ books: res.data })
//         })
//         .catch(err => console.log(err))
//       , 3000);
//   };

//   handleSaved = id =>{
//     console.log(id)
//     API.savedBook(id)
//     .then(res => {
//       // console.log(res)
//       // console.log("hello")
//     })
//     .catch(err => console.log(err))
//   };

//   render() {
//     return (
//       <div>
//         <Nav />
//         <Jumbotron />
//         <Container>
//           <Row>
//             <Col size="md-12">
//               <form>
//                 <Container>
//                   <Row>
//                     <Col size="xs-9 sm-10">
//                       <Input
//                         name="bookSearch"
//                         value={this.state.bookSearch}
//                         onChange={this.handleInputChange}
//                         placeholder="Search for Book"
//                       />
//                     </Col>
//                     <Col size="xs-3 sm-2">
//                       <Button
//                         onClick={this.handleFormSubmit}
//                         type="success"
//                         className="input-lg"
//                       >
//                         Search
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Container>
//               </form>
//             </Col>
//           </Row>
//           <Row>
//             <Col size="xs-12">
//               {!this.state.books.length ? (
//                 <h1 className="text-center">No Book Display</h1>
//               ) : (
//                   <BookList>
//                     {this.state.books.map(book => {
//                       if (book.saved === false) {
//                         return (
//                           < BookListItem
//                             key={book._id}
//                             title={book.title}
//                             link={book.link}
//                             authors={book.authors}
//                             description={book.description}
//                             image={book.image}

//                             // key={book.volumeInfo.title}
//                             // title = {book.volumeInfo.title}
//                             // link={book.volumeInfo.previewLink}
//                             // authors={book.volumeInfo.authors}
//                             // description={book.volumeInfo.description}
//                             // image={book.volumeInfo.imageLinks.smallThumbnail}
//                             onClick={()=>this.handleSaved(book._id)}                            
//                           />
//                         )
//                       };
//                     })}
//                   </BookList>

//                 )}
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;
