
import './Topbar.css'
// import {Link} from 'react-router-dom'

const  Topbar = () => {
   
  return (

    <div className='topbar'>
        <div className="topleft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topcenter">
        <ul className="topList">
          <li className="topListItem">
            
              HOME
            
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">

              WRITE
            
          </li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
       
        <div className="topright">

       
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
         
          
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div> 
  )
}
export default Topbar;