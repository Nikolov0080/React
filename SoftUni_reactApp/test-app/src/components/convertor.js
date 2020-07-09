import React from "react";
import axios from "axios";
import { Button, Card } from 'react-bootstrap';


class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "GBP",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  convertHandler = () => {
    if (this.state.fromCurrency !== this.state.toCurrency) {
      axios
        .get(
          `http://api.openrates.io/latest?base=${
          this.state.fromCurrency
          }&symbols=${this.state.toCurrency}`
        )
        .then(response => {
          const result =
            this.state.amount * response.data.rates[this.state.toCurrency];
          this.setState({ result: result.toFixed(5) });
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      this.setState({ result: "You cant convert the same currency!" });
    }
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {
    return (
      <div className="Converter">
        <h2>
          <span>Currency</span>Converter
          <span role="img" aria-label="money">

          </span>
        </h2>
        <div style={{ textAlign: 'center' }} className="From">
          <Button variant="primary" onClick={this.convertHandler}>Convert</Button>
          <br></br>
          <input
            name="amount"
            type="text"
            value={this.state.amount}
            onChange={event => this.setState({ amount: event.target.value })}
          />
          <br></br>

          <select
            name="from"
            onChange={event => this.selectHandler(event)}
            value={this.state.fromCurrency}
          >
            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>

          <select
            name="to"
            style={{ margin: '20px' }}
            onChange={event => this.selectHandler(event)}
            value={this.state.toCurrency}
          >

            {this.state.currencies.map(cur => (
              <option key={cur}>{cur}</option>
            ))}
          </select>

          <br></br>
          <br></br>

          <Card
            bg="dark"
            text="light"
            style={{ width: '18rem' }}
          >
            <Card.Header>Result Box</Card.Header>
            <Card.Body>
              <Card.Text>
                {this.state.result && this.state.result}
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

      </div>
    );
  }
}
export default Converter;