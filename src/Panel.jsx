import React, {PropTypes} from 'react';
import Colr from 'colr';
import Board from './Board';
import Preview from './Preview';
import Ribbon from './Ribbon';
import Alpha from './Alpha';
import Params from './Params';

function noop() {
}

const colr = new Colr();

export default class Panel extends React.Component {
  constructor(props) {
    super(props);

    const color = props.color || props.defaultColor;
    const hsv = colr.fromHex(color).toHsvObject();

    this.state = {
      paramsHsv: hsv,
      hsv: hsv,
      alpha: props.alpha || props.defaultAlpha,
    };

    const events = [
      'onChange',
      'onAlphaChange',
      'onFocus',
      'onBlur',
      'onSystemColorPickerOpen',
      'onSave',
    ];
    // bind methods
    events.forEach(m => {
      this[m] = this[m].bind(this);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.color) {
      const hsv = colr.fromHex(nextProps.color).toHsvObject();
      this.setState({
        hsv,
      });
    }
    if (nextProps.alpha !== undefined) {
      this.setState({
        alpha: nextProps.alpha,
      });
    }
  }

  onChange(hsvObject, syncParams = true) {
    const hsv = hsvObject;
    const state = {
      hsv,
    };
    if (syncParams) {
      state.paramsHsv = hsv;
    }
    this.setState(state);
  }

  onSave(e) {
    e.preventDefault();
    const { hsv } = this.state;
    const { onChange, close } = this.props;
    const ret = {
      color: this.getHexColor(hsv),
      hsv,
      alpha: this.state.alpha,
    };
    onChange(ret);
    close();
  }

  onSystemColorPickerOpen(e) {
    // only work with broswer which support color input
    if (e.target.type === 'color') {
      this.systemColorPickerOpen = true;
    }
  }

  onAlphaChange(alpha) {
    this.setState({
      alpha,
    });
  }

  onFocus() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
      this._blurTimer = null;
    } else {
      this.props.onFocus();
    }
  }

  onBlur() {
    if (this._blurTimer) {
      clearTimeout(this._blurTimer);
    }
    this._blurTimer = setTimeout(()=> {
      // if is system color picker open, then stop run blur
      if (this.systemColorPickerOpen) {
        this.systemColorPickerOpen = false;
        return;
      }

      this.props.onBlur();
    }, 100);
  }

  getHexColor(hsv) {
    return colr.fromHsvObject(hsv || this.state.hsv).toHex();
  }

  render() {
    const prefixCls = this.props.prefixCls;
    const saveText = this.props.saveText;
    const hsv = this.state.hsv;
    const alpha = this.state.alpha;
    const stopDefault = e => {
      e.preventDefault();
    };
    return (
      <div
        className={prefixCls}
        style={this.props.style}
        onClick={stopDefault}
        onMouseDown={stopDefault}
        onMouseUp={stopDefault}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        tabIndex="0"
        >
        <div className={prefixCls + '-' + ('inner')}>
          <Board
            rootPrefixCls={prefixCls}
            hsv={hsv}
            onChange={this.onChange}
            />
          <div className={prefixCls + '-' + ('wrap')}>
            <div className={prefixCls + '-' + ('wrap-ribbon')}>
              <Ribbon
                rootPrefixCls={prefixCls}
                hsv={hsv}
                onChange={this.onChange}
                />
            </div>
            <div className={prefixCls + '-' + ('wrap-alpha')}>
              <Alpha
                rootPrefixCls={prefixCls}
                alpha={alpha}
                hsv={hsv}
                onChange={this.onAlphaChange}
                />
            </div>
            <div className={prefixCls + '-' + ('wrap-preview')}>
              <Preview
                rootPrefixCls={prefixCls}
                alpha={alpha}
                onChange={this.onChange}
                onInputClick={this.onSystemColorPickerOpen}
                hsv={hsv}
                />
            </div>
          </div>
          <div className={prefixCls + '-' + ('wrap')} style={{height: 40, marginTop: 6}}>
            <Params
              rootPrefixCls={prefixCls}
              hsv={this.state.paramsHsv}
              alpha={alpha}
              onAlphaChange={this.onAlphaChange}
              onChange={this.onChange}
              mode={this.props.mode}
              />
          </div>
          <div className={prefixCls + '-' + ('wrap')}>
            <button
              className={`${prefixCls}-save-btn`}
              onClick={this.onSave}>{saveText}</button>
          </div>
        </div>
      </div>
    );
  }
}

import typeColor from './utils/validationColor';

Panel.propTypes = {
  defaultAlpha: PropTypes.number,
  defaultColor: typeColor,
  // can custom
  prefixCls: PropTypes.string,
  color: typeColor,
  alpha: PropTypes.number,
  style: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  close: PropTypes.func,
  saveText: PropTypes.string,
  mode: PropTypes.oneOf(['RGB', 'HSL', 'HSB']),
};

Panel.defaultProps = {
  prefixCls: 'rc-color-picker-panel',
  defaultColor: '#ff0000',
  defaultAlpha: 100,
  style: {},
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  mode: 'RGB',
};
