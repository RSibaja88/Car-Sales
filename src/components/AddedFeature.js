import React from 'react';
import {useDispatch} from 'react-redux';
import { removeUpgrade } from '../actions/carActions';
// import {removeUpgrade} from '../actions/carActions';

const AddedFeature = props => {
  const dispatch = useDispatch();
  const handleRemoveUpgrade = () => {
    dispatch(removeUpgrade(props.feature))
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveUpgrade}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
