import React from 'react';
import {useSelector} from 'react-redux';

const Total = props => {
  const car = useSelector(state => state.car);
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
