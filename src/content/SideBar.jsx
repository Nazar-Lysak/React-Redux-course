import React from 'react'

export const SideBar = () => {
    return (
        <div className='sidebar'>
            <nav className='sidebar__nav'>
                <ul className='sidebar__nav-list'>
                    <li><a className='sidebar__nav--item' href='#s'>Profile</a></li>
                    <li><a className='sidebar__nav--item'a href='#s'>Messages</a></li>
                    <li><a className='sidebar__nav--item' href='#s'>News</a></li>
                    <li><a className='sidebar__nav--item' href='#s'>Music</a></li>
                    <li><a className='sidebar__nav--item' href='#s'>Settings</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar;
