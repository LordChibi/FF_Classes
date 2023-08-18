import React from "react";
// nav for site
// show on each page

function Navigation(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Classfinder</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <div className="dropdown">

              <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Classes
              </button>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/class/thief">Thief</a></li>
                <li><a className="dropdown-item" href="/class/warrior">Warrior</a></li>
                <li><a className="dropdown-item" href="/class/blackmage">Black Mage</a></li>
              </ul>

            </div>

          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
