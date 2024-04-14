import { Link } from "react-router-dom";


const Sidebar = (/*{selectedTab, setSelectedTab}*/) => {

  return (
      <div className="position-fixed top-0 bottom-0 d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '200px'}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            {/* Rather than using anchor tag use <Link to /> to navigate 
            Special Benefit of React-router-dom is Link tag
            It does reload whole page as in js other to build single web page will be achieved */}

            {/* To do dynamic navigation we can use useNavigate() hook property of Link tag */}

            {/* <a href="/" className="nav-link text-white" aria-current="page"> */}
            <Link to="/" className="nav-link text-white" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home
            </Link>
          </li>
          <li >
            {/* Similarly here Link to */}
            <Link to="/create-post" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Create Post
            </Link>
          </li>
            {/* <li className="nav-item" onClick={() => {setSelectedTab("Home")}}></li> */}
            {/* <a href="#" className={`nav-link text-white ${selectedTab === "Home" && 'active'}` }aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
              Home
            </a> 
          </li>
          <li onClick={() => {setSelectedTab("Create Post")}}>
            <a href="#" className={`nav-link text-white ${selectedTab === "Create Post" && 'active'}` }>
              <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
              Create Post
            </a>
          </li> */}
        </ul>
        <hr/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar;
