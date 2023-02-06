

export const Button = function Button(){


    return (
        <div class="widget-button">
          <button
            disabled={disable}
            class={cx('jet-button btn btn-primary p-1 overflow-hidden', {
              'btn-loading': loading,
              'btn-custom': hasCustomBackground,
            })}
            style={computedStyles}
            onClick={(event) => {
              event.stopPropagation();
              fireEvent('onClick');
            }}
            onMouseOver={() => {
              fireEvent('onHover');
            }}
            data-cy={`draggable-widget-${String(component.name).toLowerCase()}`}
          >
            {label}
          </button>
        </div>
      );
}