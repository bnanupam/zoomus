import '../scss/custom.scss'
export default function Footer() {
    return (
        <footer className="container-fluid bg-dark text-white p-5">
            <div className="row gx-4">
                <div className="col-2">
                    <h3>About us</h3>
                    <ul className="list-unstyled">
                        <li><a href="https://blog.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1nd66tr*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIyMzY0My45LjEuMTczNjIyMzY1NC4wLjAuMA..">Zoom Blog</a></li>
                        <li><a href="https://explore.zoom.us/en/customer/all/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*17cbyhc*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIyMzY0My45LjEuMTczNjIyMzY1NC4wLjAuMA..#">Customers</a></li>
                        <li><a href="https://explore.zoom.us/en/team/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1wttrii*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIyMzY0My45LjEuMTczNjIyMzY1NC4wLjAuMA..#">Our Team</a></li>
                        <li><a href="https://careers.zoom.us/home?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*u8uqbj*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI2NzAuMC4wLjA.#">Careers</a></li>
                        <li><a href="https://marketplace.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1ilq2gq*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Integrations</a></li>
                        <li><a href="#https://partner.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1a3zzp1*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.">Partners</a></li>
                        <li><a href="https://investors.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1a3zzp1*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Investors</a></li>
                        <li><a href="https://news.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1a3zzp1*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Press</a></li>
                        <li><a href="https://explore.zoom.us/en/zoom-esg/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1a3zzp1*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Sustainability & ESG</a></li>
                        <li><a href="https://zoomcares.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*a2jfo*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Zoom Cares</a></li>
                        <li><a href="https://explore.zoom.us/en/media-kit/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*a2jfo*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Media Kit</a></li>
                        <li><a href="#https://learn-zoom.us/show-me?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*a2jfo*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.">How to Videos</a></li>
                        <li><a href="https://developers.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*a2jfo*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Developer Platform</a></li>
                        <li><a href="https://explore.zoom.us/en/zoom-ventures/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*a2jfo*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.#">Zoom Ventures</a></li>
                        <li><a href="#https://shophappy.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*rpvw4r*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzI4ODEuMC4wLjA.">Zoom Merchandise Store</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h3>Download</h3>
                    <ul className='list-unstyled'>
                        <li><a href="https://zoom.us/download#client_4meeting">Zoom app</a></li>
                        <li><a href="https://zoom.us/download#room_client">Zoom Rooms Client</a></li>
                        <li><a href="https://zoom.us/download#chrome_ext">Browser Extension</a></li>
                        <li><a href="https://zoom.us/download#outlook_plugin">Outlook Plug-in</a></li>
                        <li><a href="https://zoom.us/client/latest/ZoomNotesPluginSetup.msi?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f">Zoom Plugin for HCL Notes</a></li>
                        <li><a href="https://zoom.us/client/latest/ZoomNotesPluginAdminTool.msi?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f">Zoom Plugin Admin Tool for HCL note</a></li>
                        <li><a href="https://zoom.us/download#mobile_app">Android App</a></li>
                        <li><a href="https://explore.zoom.us/en/virtual-backgrounds/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1jx57kg*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzM4NDguMC4wLjA.">Zoom Virtual Backgrounds</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h3>Sales</h3>
                    <ul className='list-unstyled'>
                        <li>0008000503335</li>
                        <li><a href="https://explore.zoom.us/en/contactsales/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*h9zhj0*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzM4NDguMC4wLjA.">Contact Sales</a></li>
                        <li><a href="https://zoom.us/pricing?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f">Plans &amp; Pricing</a></li>
                        <li><a href="https://explore.zoom.us/en/livedemo/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*pp80kz*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzM4NDguMC4wLjA.">Request a Demo</a></li>
                        <li><a href="https://zoom.us/events?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f">Webinars and Events</a></li>
                        <li><a href="https://ebc.zoom.us/?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&_gl=1*1xsoy8y*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjIzMjY2MS4xMC4xLjE3MzYyMzM4NDguMC4wLjA.">Zoom Experience Center</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h3>Support</h3>
                    <ul className='list-unstyled'>
                        <li>Test Zoom</li>
                        <li>Account</li>
                        <li>Support Center</li>
                        <li>Learning Center</li>
                        <li>Zoom Community</li>
                        <li>Contact Us</li>
                        <li>Accessibility</li>
                        <li>Developer support</li>
                        <li>Privacy, Security, Legal Policies,</li>
                        <li>and Modern Slavery Act</li>
                        <li>Transparency Statement</li>
                    </ul>

                </div>
                <div className="col-4">
                    <div className="footerRight offset-3">
                        <h3>Language
                        </h3>
                        <div className="dropdown pb-3">
                            <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://zoom.us/download#">English</a></li>
                                <li><a className="dropdown-item" href="#https://zoom.us/de/download">Deutsch</a></li>
                                <li><a className="dropdown-item" href="https://zoom.us/fr/download#">Francais</a></li>
                            </ul>

                        </div>
                        <h3>Currency</h3>
                        <div className="dropdown pb-3">
                            <a className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Indian Rupee ₹
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Indian Rupee ₹</a></li>
                                <li><a className="dropdown-item" href="#">US Dollars $</a></li>
                            </ul>
                        </div>
                        <div className="info-icons">
                            <a href="https://blog.zoom.us/de?amp_device_id=d60c4b65-308b-40da-9c7a-c2594b1db78f&amp;_gl=1*7gzq3l*_gcl_au*MTk0MDIyMTA0MC4xNzM2MjMyODc2*_ga*Njk4NDM3OTIxLjE3MzQ0MzI1NTA.*_ga_L8TBF28DDX*MTczNjI0MjI1MS4xMS4xLjE3MzYyNDI3NTMuMC4wLjA." className="icon" target="_blank" tracking-id="footerBlogIcon" tracking-category="NavFooter">
                                <span className="sr-only">Zoom on Blog</span>
                                <span className="wordpress"></span>
                            </a>
                            <a href="https://www.linkedin.com/company/zoom" className="icon" target="_blank">
                                <span className="sr-only">Zoom on LinkedIn</span>
                                <span className="linkedin"></span>
                            </a>
                            <a href="https://twitter.com/zoom" className="icon" target="_blank">
                                <span className="sr-only">Zoom on Twitter</span>
                                <span className="twitter"></span>
                            </a>
                            <a href="https://www.youtube.com/zoommeetings" className="icon" target="_blank">
                                <span className="sr-only">Zoom on YouTube</span>
                                <span className="youtube-play"></span>
                            </a>
                            <a href="https://www.facebook.com/zoom" className="icon" target="_blank">
                                <span className="sr-only">Zoom on Facebook</span>
                                <span className="facebook"></span>
                            </a>
                            <a href="https://www.instagram.com/zoom/" className="icon" target="_blank">
                                <span className="sr-only">Zoom on Instagram</span>
                                <span className="instagram"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row gx-0">
                <div className="col">

                    <p className='pt-5'> copyright &copy; 2025Zoom Communications, Inc. Alle Rechte vorbehalten.</p>
                    <ul className='list-unstyled d-flex'>
                        <li className='border-end'>Bedingungen</li>
                        <li className='border-end'>Datenschutz</li>
                        <li className='border-end'>Vertrauenszentrum</li>
                        <li className='border-end'>Richtlinien zur angemessenen Nutzung</li>
                        <li className='border-end'>Rechtliche Hinweise & Richtlinienerfüllung</li>
                        <li className='border-end'>Ihre Datenschutzeinstellung</li>
                        <li>Cookie-Einstellungen</li>
                    </ul>
                </div>
            </div>
        </footer >
    );
}
