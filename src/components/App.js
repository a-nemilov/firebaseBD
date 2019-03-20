import React, { Component } from "react";
import fire from "./fire";
import Form from "./Form";

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }
  
  componentDidMount() {
    const itemsRef = fire.database().ref("BD");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          time: items[item].time
        });
      }
      this.setState({
        items: newState.reverse()
      });
    });
  }

  deleteItem = e => {
    e.preventDefault();
    let userRef = fire.database().ref("BD/" + event.target.id);
    userRef.remove();
  };

  render() {
    const { items } = this.state;
    return (
      <div className="border w-50 center-block container p-4">
        <div className="container p-0">
          <Form />
          <div className="col-12 mt-2 h3">
            Search histoty request - {items.length} (s)
          </div>
        </div>
        <div className="container">
          {this.state.items.map(item => (
            <div
              className="row justify-content-center border-bottom d-flex mt-3"
              key={item.id}
            >
              <div className="col-8 p-0">
                <p className="mb-0 text-secondary h6">{item.time}</p>
                <p className="text-break h4">{item.title}</p>
              </div>
              <div className="col-4 p-0 text-right">
                <button
                  id={item.id}
                  onClick={this.deleteItem}
                  className="btn btn-danger shadow"
                >
                  <i className="bg-dark p-1">&minus;</i> DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
