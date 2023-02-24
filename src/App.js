import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Cylinder Classic',
          img: 'cylinder.jpg',
          desc: 'null',
          category: 'cylinder hats',
          price: '50.49'
        },
        {
          id: 2,
          title: 'Fedora Classic',
          img: 'fordfedora.jpg',
          desc: 'null',
          category: 'fedoras',
          price: '50.49'
        },
        {
          id: 3,
          title: 'Cap Classic',
          img: 'cap.jpg',
          desc: 'null',
          category: 'caps',
          price: '50.49'
        },
        {
          id: 4,
          title: 'Beanie Classic',
          img: 'winter hat.jpg',
          desc: 'null',
          category: 'winter hats',
          price: '50.49'
        },
        {
          id: 5,
          title: 'Beret Classic',
          img: 'beret.jpg',
          desc: 'null',
          category: 'berets',
          price: '50.49'
        },
      ],
      orders: [
        {

        }
      ],
      currentItems: [
        {

        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    this.state.currentItems = this.state.items
  }
  render () {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if(!isInArray) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
}

export default App;
