import React from 'react'
import workimg from '../images/workplaceimg.png'

export default function Workplacecontainer() {
    return (

        <div className="container">
            <div className="workplace d-flex gap-5">
                <div className="workplaceimg">
                    <img src={workimg} alt="" className=' rounded' />
                </div>
                <div className="workplacedetail">
                    <h2>Zoom Workplace for Windows</h2>
                    <a href="#">version 6.3.5(54827)</a>
                    <p>Unlock the full suite of collaboration with Team Chat, Whiteboard,
                        Notes and more - included with your Zoom Meetings account.</p>
                    <ul className='d-flex list-unstyled gap-3'>
                        <li>  <button type="button" className="btn btn-primary">Download (64-bit)</button></li>
                        <li><button type="button" className="btn btn-outline-primary">Download (32-bit)</button></li>
                        <li><button type="button" className="btn btn-outline-primary">Download (ARM64)</button></li>
                    </ul>
                    <p>
                        <a href="#">System Requarment</a>
                    </p>
                </div>
            </div>
        </div>

    )
}
