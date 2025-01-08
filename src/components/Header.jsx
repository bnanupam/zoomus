import { useState } from 'react'
import '../scss/common.scss'

export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false)

    function handleSearch() {
        setIsExpanded(true)
    }
    function handleCloseExpandedSearch() {
        setIsExpanded(false)
    }
    // const handleSearch = () => {
    //     setIsExpanded(true)

    // }
    // const handleCloseExpandedSearch = () => {
    //     setIsExpanded(false)
    // }

    return (
        <header>
            <nav className="topNav">
                <div className="container-fluid bg-dark text-white p-3">
                    <ul className="list-unstyled d-flex justify-content-end column-gap-3 mb-0">
                        <li>
                            <div role="button" onClick={handleSearch} className={`${isExpanded ? 'd-none' : 'd-block'}`}>
                                <span className='searchIconImg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" enable-background="new 0 0 20 20" viewBox="0 0 20 20" role="img">
                                        <g fill="currentColor">
                                            <path d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"></path>
                                            <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span id='searchText' className="searchText" aria-label="Search" tabIndex="-1">
                                    Suchen
                                </span>
                            </div>
                            <div className={isExpanded ? 'd-block' : 'd-none'}>
                                <span className="searchIcon" aria-label="Search" tabIndex="-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                    </svg>
                                </span>
                                <input id="searchInput" type="text" role="searchbox" aria-label="Search" placeholder="Suche hier eingeben..." data-url="https://www.zoom.com/de/search/" />
                                <span className="cancelSearchIcon" onClick={handleCloseExpandedSearch} aria-label="Cancel Search" tabIndex="-1" style={{ cursor: 'pointer' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{ margin: 0 }}>
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                </span>
                            </div>
                        </li>
                        <li>Support</li>
                        <li>0008000503335</li>
                        <li> Demo unfordern</li>
                        <li>Beitreten</li>
                        <li>
                            Host
                        </li>
                        <li>Anmelden</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
