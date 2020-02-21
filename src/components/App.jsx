import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import KegList from './KegList';
import wood_background from '../assets/images/wood_background.jpg';
import {v4} from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);

    const newMasterKegList = {};

    let newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Gold", 
      brand: "Saint Archer Brewing Company", 
      price: 7.00, 
      alcoholContent: 4.2
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Insignia",
      brand: "Mystic Brewery",
      price: 8.50,
      alcoholContent: 5.0
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Easy Jack",
      brand: "Firestone Walker Brewing Company",
      price: 7.50,
      alcoholContent: 4.0,
      ibu: 47
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Pale Ale",
      brand: "Sierra Nevada Brewing Co.",
      price: 7.00,
      alcoholContent: 5.6,
      ibu: 38
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Golden Monkey",
      brand: "Victory Brewing Company",
      price: 8.00,
      alcoholContent: 9.5,
      ibu: 25
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Margarita Gose",
      brand: "Cigar City Brewing",
      price: 7.50,
      alcoholContent: 4.2,
      ibu: 5
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Fat Tire",
      brand: "New Belgium Brewing Company",
      price: 7.00,
      alcoholContent: 5.2,
      ibu: 22
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Guinness Draught",
      brand: "Guinness",
      price: 8.00,
      alcoholContent: 4.2,
      ibu: 45
    }

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: "Ginger Root Kombucha",
      brand: "Urban Farm Fermentory",
      price: 9.00,
      alcoholContent: 1.5
    }

    this.state = {
      masterKegList: newMasterKegList,
      selectedKeg: null
    }
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    const newKegId = v4();
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKegId]: newKeg});
    // const newMasterKegList = {...this.state.masterKegList, [newKegId]: newKeg};
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }


  render() {
    return (
      <div className="page_background">
        <style jsx>{`
                  .page_background {
                      background: url(${wood_background}) no-repeat center center fixed;
                      min-height: 100vh;
                      background-size: cover;
                      overflow: hidden;
                  }
              `}</style>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/list' render={() => <KegList kegList={this.state.masterKegList} employee={false}/>} />
          <Route path='/account' render={() => <KegList kegList={this.state.masterKegList} onNewKegCreation={this.handleAddingNewKegToList} onKegSelection={this.handleChangingSelectedKeg} employee={true}/>} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
};

export default App;