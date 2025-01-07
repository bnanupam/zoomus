import React from 'react'

export default function Navbar() {
    return (
        <div className="nav d-flex justify-content-between pt-3 pe-2">
            <div className="leftItem">

                <ul className="nav-item d-flex list-unstyled">
                    <li>
                        <a href="/" className="nav-link">
                            <img className="logo" src="https://st2.zoom.us/static/6.3.29842/image/new/topNav/Zoom_logo.svg" alt="Zoom Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Product</a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">Solutions</a>
                    </li>
                    <li>
                        <a href="#" className='nav-link'>Resources</a>
                    </li>
                    <li>
                        <a href="#" className='nav-link'>Plan & Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="rightItem">
                <ul className="nav-item d-flex list-unstyled gap-3">
                    <li>
                        <button type="button" className="btn btn-outline-primary">Contact Sales</button>
                    </li>
                    <li>
                        <button type="button" className="btn btn-primary">Sign Up free</button>
                    </li>
                </ul>
            </div>
        </div >

    )
}
