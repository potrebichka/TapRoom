import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import KegList from './KegList';
import NewKeg from './NewKeg';
import wood_background from '../assets/images/wood_background.jpg';
import {v4} from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);

    const newMasterKegList = {};

    let newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Gold', 
      brand: 'Saint Archer Brewing Company', 
      price: 7.00, 
      alcoholContent: 4.2,
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Insignia',
      brand: 'Mystic Brewery',
      price: 8.50,
      alcoholContent: 5.0, 
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Easy Jack',
      brand: 'Firestone Walker Brewing Company',
      price: 7.50,
      alcoholContent: 4.0,
      ibu: 47,
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Pale Ale',
      brand: 'Sierra Nevada Brewing Co.',
      price: 7.00,
      alcoholContent: 5.6,
      ibu: 38, 
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Golden Monkey',
      brand: 'Victory Brewing Company',
      price: 8.00,
      alcoholContent: 9.5,
      ibu: 25,
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Margarita Gose',
      brand: 'Cigar City Brewing',
      price: 7.50,
      alcoholContent: 4.2,
      ibu: 5,
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Fat Tire',
      brand: 'New Belgium Brewing Company',
      price: 7.00,
      alcoholContent: 5.2,
      ibu: 22, 
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Guinness Draught',
      brand: 'Guinness',
      price: 8.00,
      alcoholContent: 4.2,
      ibu: 45,
      pints: 124
    };

    newKegId = v4();
    newMasterKegList[newKegId] = {
      name: 'Ginger Root Kombucha',
      brand: 'Urban Farm Fermentory',
      price: 9.00,
      alcoholContent: 1.5,
      pints: 124
    };

    this.state = {
      masterKegList: newMasterKegList,
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleEditingKeg = this.handleEditingKeg.bind(this);
    this.handlePintsChange = this.handlePintsChange.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
    const newKegId = v4();
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKegId]: newKeg});
    // const newMasterKegList = {...this.state.masterKegList, [newKegId]: newKeg};
    this.setState({masterKegList: newMasterKegList});

  }


  handleEditingKeg(updatedKeg) {
    const updatedMasterKegList = Object.assign({}, this.state.masterKegList, {[updatedKeg.id]: updatedKeg});
    this.setState({masterKegList: updatedMasterKegList});
  }

  handlePintsChange(id) {
    const updatedKeg = Object.assign({}, this.state.masterKegList[id], {pints: this.state.masterKegList[id].pints-1});
    const updatedMasterKegList = Object.assign({}, this.state.masterKegList, {[id]: updatedKeg});
    this.setState({masterKegList: updatedMasterKegList});
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
          <Route path='/account' render={() => <KegList kegList={this.state.masterKegList}  employee={true} onEditKeg={this.handleEditingKeg} onPintsChange={this.handlePintsChange}/>} />
          <Route path='/newkeg' render={() => <NewKeg onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;