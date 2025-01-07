import React from 'react'
import '../scss/common.scss'


export default function Header() {
    return (
        <header>
            <nav className="topNav">
                <div className="container-fluid bg-dark text-white p-2">
                    <ul className="list-unstyled d-flex justify-content-end column-gap-2">
                        <li>search</li>
                        <li>Search</li>
                        <li>Support</li>
                        <li>0008000503335</li>
                        <li>Request a Demo</li>
                        <li>Join</li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn btn-dark dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Host
                            </button>
                        </li>

                        <li>Sign in</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
