let React = require('react');
let ReactDOM = require('react-dom');

class RadiogroupItem extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleChange(e) {
        let me = this;
        me.props.onChange(me.props.value);
    }

    render() {
        let me = this;
        return (
            <label className={`${me.props.prefixCls}`}>
                <input type="radio" disabled={me.props.disabled} ref="radio" className="kuma-checkbox" checked={me.props.checked} onChange={me._handleChange.bind(me)} />
                <s></s>
                <span className={`${me.props.prefixCls}-content`}>{me.props.text}</span>
            </label>
        )
    }
}

RadiogroupItem.displayName = "RadiogroupItem";
RadiogroupItem.propTypes = {
    prefixCls: React.PropTypes.string,
    text: React.PropTypes.string,
    value: React.PropTypes.string,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func
};
RadiogroupItem.defaultProps = {
    prefixCls: "kuma-radio-group-item",
    text: "",
    value: "",
    className: "kuma-checkbox",
    disabled: false,
    onChange: () => {},
}

module.exports = RadiogroupItem;