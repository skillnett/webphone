import React from 'react';
import cn from 'classnames';

export const ActionCallButton = ({ action, icon, text, isActive, disabled, iconHeight }) => {

    const Icon = icon;

    return (
        <button
            type="button"
            onClick={action}
            disabled={disabled}
            className="call__action-btn d-flex flex-column align-items-center justify-content-between"
        >
            <Icon
                className={cn("call__action-btn__icon", isActive && "call__action-btn__icon--active", disabled && "call__action-btn__icon--disabled")}
                style={{ height: iconHeight }}
            />
            <span className={cn("call__action-btn__text", isActive && "call__action-btn__text--active", disabled && "call__action-btn__text--disabled")}>{text}</span>
        </button>
    );
}