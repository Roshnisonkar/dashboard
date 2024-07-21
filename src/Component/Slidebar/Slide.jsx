import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill, BsListCheck,BsMenuButtonFill,BsFillGearFill} from 'react-icons/bs';

function  Slide() {
  return (
 <aside id='sidebar' >
    <div className='sidebar-title'>
        <div className='sidebar-brand'>
            <BsCart3 className='icon_header'/> Shop
        </div>
        <span className='icon close_icon'>x</span>
    </div>
    <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsGrid1X2Fill className='icon'/>Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillArchiveFill className='icon'/>Categories
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGrid3X3GapFill className='icon'/>Customers
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsPeopleFill className='icon'/>Inventory
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsListCheck className='icon'/>Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsMenuButtonFill className='icon'/>Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href=''>
                <BsFillGearFill className='icon'/>Setting
            </a>
        </li>
    </ul>
 </aside>
  )
}

export default Slide;