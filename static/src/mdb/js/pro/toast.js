import { getjQuery, typeCheckConfig, onDOMContentLoaded } from '../mdb/util/index';
import EventHandler from '../mdb/dom/event-handler';
import Manipulator from '../mdb/dom/manipulator';
import SelectorEngine from '../mdb/dom/selector-engine';
import BSToast from '../bootstrap/mdb-prefix/toast';
import Stack from '../mdb/util/stack';
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
const NAME = 'toast';
const SELECTOR_TOAST = '.toast';
const SELECTOR_HEADER = '.toast-header';

const EVENT_SHOW_BS = 'show.bs.toast';
const EVENT_SHOWN_BS = 'shown.bs.toast';
const EVENT_HIDE_BS = 'hide.bs.toast';
const EVENT_HIDDEN_BS = 'hidden.bs.toast';

const EVENT_SHOW = 'show.mdb.toast';
const EVENT_SHOWN = 'shown.mdb.toast';
const EVENT_HIDE = 'hide.mdb.toast';
const EVENT_HIDDEN = 'hidden.mdb.toast';

const DefaultType = {
  position: '(string|null)',
  animation: 'boolean',
  autohide: 'boolean',
  width: '(string || null)',
  color: '(string|null)',
  delay: '(boolean|number)',
  offset: 'number',
  appendToBody: 'boolean',
  stacking: 'boolean',
};

const Default = {
  position: null,
  animation: true,
  autohide: true,
  width: null,
  color: null,
  delay: 500,
  offset: 10,
  appendToBody: false,
  stacking: true,
};

class Toast extends BSToast {
  constructor(element, data = {}) {
    super(element, data);
    this._config = this._getConfig(data);
    this._setup();
  }

  // Getters

  get parent() {
    const [parent] = SelectorEngine.parents(this._element, this._config.container);
    return parent;
  }

  get position() {
    if (!this._config.position) return null;
    const [y, x] = this._config.position.split('-');
    return { y, x };
  }

  get verticalOffset() {
    if (!this._config.stacking || !this.position) return 0;

    return this.stackUtil.calculateOffset();
  }

  // Public

  update(updatedData = {}) {
    this._config = this._getConfig(updatedData);
    this._setupColor();

    if (!this._config.position) {
      return;
    }

    if (this._config.stacking) {
      this._setupStacking();

      EventHandler.on(this._element, 'hidden.bs.toast', () => {
        setTimeout(() => this._updateToastStack(), 150);
      });
    }

    this._setupPosition();
    this._setupAlignment();
  }

  dispose() {
    EventHandler.off(this._element, EVENT_SHOW_BS);
    EventHandler.off(this._element, EVENT_SHOWN_BS);
    EventHandler.off(this._element, EVENT_HIDE_BS);
    EventHandler.off(this._element, EVENT_HIDDEN_BS);

    super.dispose();
  }

  // Private

  _setup() {
    this._setupColor();
    if (this._config.width) {
      this._setupWidth();
    }
    if (!this._config.position) {
      return;
    }

    if (this._config.stacking) {
      this._setupStacking();

      EventHandler.on(this._element, 'hidden.bs.toast', () => {
        setTimeout(() => this._updateToastStack(), 150);
      });
    }

    this._setupPosition();
    this._setupDisplay();
    if (!this._config.container && this._config.appendToBody) {
      this._appendToBody();
    }

    this._bindShownEvent();
    this._bindHideEvent();
  }

  _setupStacking() {
    this.stackUtil = new Stack(this._element, SELECTOR_TOAST, {
      position: this.position.y,
      offset: this._config.offset,
      container: this._config.container,
      filter: (el) => {
        const instance = Toast.getInstance(el);

        if (!instance) return false;

        return (
          instance._config.container === this._config.container &&
          instance._config.position === this._config.position
        );
      },
    });

    EventHandler.on(this._element, 'closed.bs.alert', () => {
      this._updateAlertStack();
    });
  }

  _setupColor() {
    if (!this._config.color) {
      return;
    }

    const header = SelectorEngine.findOne(SELECTOR_HEADER, this._element);

    const toasts = [
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'light',
      'dark',
    ];

    const color = toasts.includes(this._config.color) ? this._config.color : 'primary';

    toasts.forEach((color) => {
      this._element.classList.remove(`toast-${color}`);
      if (header) header.classList.remove(`toast-${color}`);
    });

    Manipulator.addClass(this._element, `toast-${color}`);
    if (header) Manipulator.addClass(header, `toast-${color}`);
  }

  _setupWidth() {
    Manipulator.style(this._element, {
      width: this._config.width,
    });
  }

  _setupPosition() {
    if (this._config.container) {
      Manipulator.addClass(this.parent, 'parent-toast-relative');
      Manipulator.addClass(this._element, 'toast-absolute');
    } else {
      Manipulator.addClass(this._element, 'toast-fixed');
    }
  }

  _setupAlignment() {
    const oppositeY = this.position.y === 'top' ? 'bottom' : 'top';
    const oppositeX = this.position.x === 'left' ? 'right' : 'left';
    if (this.position.x === 'center') {
      Manipulator.style(this._element, {
        [this.position.y]: `${this.verticalOffset + this._config.offset}px`,
        [oppositeY]: 'unset',
        left: '50%',
        transform: 'translate(-50%)',
      });
    } else {
      Manipulator.style(this._element, {
        [this.position.y]: `${this.verticalOffset + this._config.offset}px`,
        [this.position.x]: `${this._config.offset}px`,
        [oppositeY]: 'unset',
        [oppositeX]: 'unset',
        transform: 'unset',
      });
    }
  }

  _setupDisplay() {
    if (!this._element.classList.contains('show')) {
      Manipulator.style(this._element, {
        display: 'none',
      });
    }

    EventHandler.on(this._element, EVENT_HIDDEN_BS, () => {
      EventHandler.trigger(this._element, EVENT_HIDDEN);

      Manipulator.style(this._element, {
        display: 'none',
      });
    });
    EventHandler.on(this._element, EVENT_SHOW_BS, () => {
      EventHandler.trigger(this._element, EVENT_SHOW);

      this._setupAlignment();
      Manipulator.style(this._element, {
        display: 'block',
      });
    });
  }

  _bindShownEvent() {
    EventHandler.on(this._element, EVENT_SHOWN_BS, () => {
      EventHandler.trigger(this._element, EVENT_SHOWN);
    });
  }

  _bindHideEvent() {
    EventHandler.on(this._element, EVENT_HIDE_BS, () => {
      EventHandler.trigger(this._element, EVENT_HIDE);
    });
  }

  _getConfig(options) {
    const config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...options,
    };
    typeCheckConfig(NAME, config, DefaultType);
    return config;
  }

  _appendToBody() {
    this._element.parentNode.removeChild(this._element);
    document.body.appendChild(this._element);
  }

  _updatePosition() {
    Manipulator.style(this._element, {
      [this.position.y]: `${this.verticalOffset + this._config.offset}px`,
    });
  }

  _updateToastStack() {
    this.stackUtil.nextElements.forEach((el) => {
      const instance = Toast.getInstance(el);

      if (!instance) {
        return;
      }

      instance._updatePosition();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * Data Api implementation - auto initialization
 * ------------------------------------------------------------------------
 */

SelectorEngine.find(SELECTOR_TOAST).forEach((toast) => {
  let instance = Toast.getInstance(toast);
  if (!instance) {
    instance = new Toast(toast);
  }
  return instance;
});

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

onDOMContentLoaded(() => {
  const $ = getjQuery();

  if ($) {
    const JQUERY_NO_CONFLICT = $.fn[NAME];
    $.fn[NAME] = Toast.jQueryInterface;
    $.fn[NAME].Constructor = Toast;
    $.fn[NAME].noConflict = () => {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Toast.jQueryInterface;
    };
  }
});

export default Toast;
