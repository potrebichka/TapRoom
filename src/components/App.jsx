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
    this.state = {
      masterKegList: {},
      selectedKeg: null
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegId = v4();
    const newMasterKegList = Object.assign({}, this.state.masterKegList, {[newKegId]: newKeg});
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
          <Route path='/list' render={() => <KegList kegList={this.state.masterKegList}/>} />
          <Route path='/account' render={() => <Account kegList={this.state.masterKegList} onNewKegCreation={this.handleAddingNewKegToList} onKegSelection={this.handleChangingSelectedKeg} />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
};

export default App;