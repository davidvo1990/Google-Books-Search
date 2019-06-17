import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getRecipes(this.state.bookSearch)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({ recipes: res.data })
  //     })
  //     .catch(err => console.log(err));
  // };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get update state
    event.preventDefault();

    API.searchBooks(this.state.bookSearch).catch(err => console.log(err))

    setTimeout(() =>
      API.getBooks()
        .then(res => {
          // console.log(res.data.items)
          // console.log(this.state.bookSearch)
          // console.log(res.data)
          API.searchBooks(this.state.bookSearch).catch(err => console.log(err))

          this.setState({ books: res.data })
        })
        .catch(err => console.log(err))
      , 3000);



  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Book Display</h1>
              ) : (

                  <BookList>
                    {this.state.books.map(book => {
                       if(book.saved === false){
                      return (
                        < BookListItem
                          key={book._id}
                          title={book.title}
                          link={book.link}
                          ingredients={book.authors}
                          description={book.description}
                          image={book.image}
                        />
                      )};
                    })}
                  </BookList>

                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
