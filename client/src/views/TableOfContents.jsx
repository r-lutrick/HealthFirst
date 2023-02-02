import React from 'react'

const TableOfContents = () => {
    return (
        <div className=''>
            <b>Navigation</b>
            <ul className='list-group'>
                <div>
                    <li className='list-group-item'>Search</li>
                </div>
                <div>
                    <li className='list-group-item'>All</li>
                </div>
                <div>
                    <li className='list-group-item'>Featured</li>
                </div>
                <div>
                    <li className='list-group-item'>Trending</li>
                </div>
                <li className='list-group-item'>Create</li>
                <li className='list-group-item'>Update</li>
                <li className='list-group-item'>About Us</li>
                <li className='list-group-item'>Our Mission</li>
            </ul>
        </div>
    )
}

export default TableOfContents