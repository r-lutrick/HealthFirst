import React from 'react'

const TableOfContents = () => {
    return (
        <div>
            <b>Navigation</b>
            <ul className='list-group'>
                <li className='list-group-item'>Search</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>All</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>Featured</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>Trending</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>Create</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>Update</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>About Us</li>
                <hr className='p-0 m-0'/>
                <li className='list-group-item'>Our Mission</li>
            </ul>
        </div>
    )
}

export default TableOfContents