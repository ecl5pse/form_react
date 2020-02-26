import React from 'react';
import PropTypes from 'prop-types';
import  styles from 'PasswordInput.module.css';
import  className from 'classnames';
import Icon from '@mdi/react';


class PasswordInput extends React.Component{

constructor(props) {
  super(props);
  this.state={
    isHidden:true

  }
}


render() {
  const {isHidden}= this.state;
  const {className , ...rest} = this.props;
  return(
      <label className={className(styles.container,className)}>

        <Input></Input>
      </label>
  )
}

}

PasswordInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,

};

PasswordInput.defaultProps = {

  value:''
};

export  default  PasswordInput;