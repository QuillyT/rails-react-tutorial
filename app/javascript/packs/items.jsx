import React from 'react'
import { render } from 'react-dom';
import PropTypes from 'prop-types'
import Main from '../components/items/_main.js.jsx'

document.addEventListener('DOMContentLoaded', () => {
    const container = document.body.appendChild(document.createElement('div'));
    render(<Main/>, container);
});