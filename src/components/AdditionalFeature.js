import React from 'react';
import {useDispatch} from 'react-redux';
import {addUpgrade} from '../actions/carActions';

const AdditionalFeature = props => {
  const dispatch = useDispatch();
  const handleAddedUpgrade = () => {
    dispatch(addUpgrade(props.feature));
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAddedUpgrade}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
