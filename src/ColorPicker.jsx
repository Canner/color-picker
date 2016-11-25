import React, { PropTypes }from 'react';
import ReactDOM from 'react-dom';
import Trigger from 'rc-trigger';
import ColorPickerPanel from './Panel';
import placements from './placements';

function refFn(field, component) {
  this[field] = component;
}

function prevent(e) {
  e.preventDefault();
}

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: props.color || props.defaultColor,
      alpha: props.alpha || props.defaultAlpha,
      open: false,
    };

    const events = [
      'onTriggerClick',
      'onChange',
      'onBlur',
      'getPickerElement',
      'getRootDOMNode',
      'getTriggerDOMNode',
      'onVisibleChange',
      'setOpen',
      'open',
      'close',
    ];

    events.forEach(e => {
      this[e] = this[e].bind(this);
    });

    this.savePickerPanelRef = refFn.bind(this, 'pickerPanelInstance');
    this.saveTriggerRef = refFn.bind(this, 'triggerInstance');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      this.setState({
        color: nextProps.color,
      });
    }
    if (nextProps.alpha !== null && nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha,
      });
    }
  }

  onTriggerClick(e) {
    e.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }

  onChange(colors) {
    this.setState({
      color: colors.color,
      alpha: colors.alpha,
    });
    this.props.onChange(colors);
  }

  onBlur() {
    this.setState({
      open: false,
    });
  }

  onVisibleChange(open) {
    this.setOpen(open);
  }

  setOpen(open, callback) {
    const { onOpen, onClose } = this.props;
    if (this.state.open !== open) {
      this.setState({
        open: open,
      }, callback);
      const event = {
        open: open,
      };
      if (open) {
        onOpen(event);
      } else {
        onClose(event);
      }
    }
  }

  getRootDOMNode() {
    return ReactDOM.findDOMNode(this);
  }

  getTriggerDOMNode() {
    return ReactDOM.findDOMNode(this.triggerInstance);
  }

  getPickerElement() {
    // const state = this.state;
    return (
      <ColorPickerPanel
        ref={this.savePickerPanelRef}
        defaultColor={this.state.color}
        alpha={this.state.alpha}
        prefixCls={this.props.prefixCls + '-panel'}
        onChange={this.onChange}
        onBlur={this.onBlur}
        close={this.close}
        saveText={this.props.saveText}
        mode={this.props.mode}
      />
    );
  }

  open(callback) {
    this.setOpen(true, callback);
  }

  close(callback) {
    this.setOpen(false, callback);
  }

  render() {
    const props = this.props;
    const state = this.state;
    const classes = [props.prefixCls + '-wrap'];
    if (state.open) {
      classes.push(props.prefixCls + '-open');
    }

    let children = props.children;

    if (children) {
      children = React.cloneElement(children, {
        ref: this.saveTriggerRef,
        unselectable: true,
        style: {
          opacity: this.state.alpha / 100,
          backgroundColor: this.state.color,
        },
        onClick: this.onTriggerClick,
        onMouseDown: prevent,
      });
    }

    const {
      prefixCls,
      placement,
      style,
      getCalendarContainer,
      align,
      animation,
      disabled,
      transitionName,
    } = props;

    return (
      <div className={classes.join(' ')}>
        <Trigger
          popup={this.getPickerElement()}
          popupAlign={align}
          builtinPlacements={placements}
          popupPlacement={placement}
          action={disabled ? [] : ['click']}
          destroyPopupOnHide
          getPopupContainer={getCalendarContainer}
          popupStyle={style}
          popupAnimation={animation}
          popupTransitionName={transitionName}
          popupVisible={state.open}
          onPopupVisibleChange={this.onVisibleChange}
          prefixCls={prefixCls}>
          {children}
        </Trigger>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  defaultColor: PropTypes.string,
  defaultAlpha: PropTypes.number,
  // can custom
  color: PropTypes.string,
  alpha: PropTypes.number,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  prefixCls: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['RGB', 'HSL', 'HSB']),
  placement: PropTypes.oneOf(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']),
  style: PropTypes.object,
  saveText: PropTypes.string,
};

ColorPicker.defaultProps = {
  defaultColor: '#F00',
  defaultAlpha: 100,
  onChange() {
  },
  onOpen() {
  },
  onClose() {
  },
  prefixCls: 'rc-color-picker',
  children: <span className="rc-color-picker-trigger"/>,
  placement: 'topLeft',
  style: {},
  saveText: 'Save',
};
