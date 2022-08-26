import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ isSmall, text = "Button", type }) => (
    <button
        type="button"
        className={[
            'vds-button',
            `vds-button--${type}`,
            isSmall ? `vds-button--small` : '',
        ].join(' ')}
    >
        <span className='vds-button__text'>{text}</span>
    </button>
)

Button.propTypes = {
    isSmall: PropTypes.bool,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'disabled',
    ]),
}

Button.defaultProps = {
    isSmall: false,
    type: 'primary',
}

export default Button
