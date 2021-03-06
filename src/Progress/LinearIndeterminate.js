// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const styleSheet = {
  root: {
    width: '100%'
  },
};

function LinearIndeterminate(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(LinearIndeterminate);
