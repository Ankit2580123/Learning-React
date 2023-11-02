import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
                    <div className="navbar">
                                        <div className="max-width">
                                                            <div className="logo"><a href="/">Portfo<span>lio.</span></a></div>
                                       
                                        <ul className="menu">
                                                            <li><a href="/">{props.title}</a></li>
                                                            <li><a href="/">{props.about}</a></li>
                                                            <li><a href="/">Skills</a></li>
                                                            <li><a href="/">Projects</a></li>
                                                            <li><a href="/">{props.contact}</a></li>
                                        </ul>
                                        <div className="menu-btn">
                                                            <i className="fa-solid fa-bars"></i>
                                        </div>
                                        </div>
                                        
                    </div>
  )
}

Navbar.propTypes = {
                    title:PropTypes.string,
                    about:PropTypes.string,
                    contact:PropTypes.number

}
//lets understand default proptypes

Navbar.defaultProps={
                    title:"set title here",
                    about:"set about here"
}