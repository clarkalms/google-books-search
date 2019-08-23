import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1 className="text-center"><i class="fab fa-bootstrap"></i><span className="oogle">OOGLE!</span></h1>
             <h2 className="text-center">Find a book to add to your reading list!</h2> 
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Reading List">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete Book
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">Add books to your reading list and see them here!</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
