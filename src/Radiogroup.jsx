/**
* thanks for https://github.com/chenglou/react-radio-group
* @author: zhouquan.yezq
* @time  : 5/25 2015
*/

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Item from './RadiogroupItem';

class Radiogroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: props.defaultValue,
    };
  }

  handleChange(value) {
    const me = this;
    me.props.onChange(value);
  }

  processChild() {
    const me = this;
    const length = React.Children.count(me.props.children);
    if (!length) return false;
    const elements = React.Children.map(me.props.children, (child, index) => {
      if (!!child.type && child.type.displayName === 'RadiogroupItem') {
        return React.cloneElement(child, {
          jsxdisabled: me.props.disabled,
          onChange: me.handleChange.bind(me),
          key: index,
          checked: me.props.value === child.props.value,
        });
      }
      return null;
    });
    return elements;
  }

  render() {
    const me = this;
    return (
      <div
        className={classnames({
          'kuma-radio-group': true,
          [me.props.className]: !!me.props.className,
        })}
      >
        {me.processChild()}
      </div>
    );
  }
}

Radiogroup.displayName = 'Radiogroup';
Radiogroup.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
Radiogroup.defaultProps = {
  value: '',
  onChange: () => { },
};

Radiogroup.Item = Item;


export default Radiogroup;
