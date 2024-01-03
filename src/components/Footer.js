import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>Copyright © 2024 <Link>ISTA Library</Link>, By Anas Falah. Powered By All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
