import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {addUpgrade, removeUpgrade} from './actions/carActions';

const App = (props) => {

  const removeFeature = item => {
    removeUpgrade(item);
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    addUpgrade(item);
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStatetoProps(state) {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToProps = {
  addUpgrade,
  removeUpgrade
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);
