//@flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import cx from 'classnames';

export const styleSheet = theme => ({
  fullWidth: {
    width: "100%"
  }
});

const ButtonX = (props) => {
  const {
    fullWidth: fW ,
    classes: {fullWidth, ...otherClasses},
    className,
    children,
    ...other} = props;

  return(
    <Button
       className = {cx(
         { [fullWidth]: fW },
         className
       )}
       classes={{...otherClasses}}
       {...other}
       >
      {children}
    </Button>
  );
  ButtonX.defaultProps = {
    children: null,
    fullWidth: false,
  }
  ButtonX.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    fullWidth: PropTypes.bool,
  }
}

export default withStyles(styleSheet)(ButtonX)
