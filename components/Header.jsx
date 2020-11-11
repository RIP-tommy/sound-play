import Link from "next/link"

const Header = () => {
  return (
    <div className="header">
      
      <nav role="navigation">

        <div className="home_logo">
          <Link href="https://opcd.kr/wmm">
            <img src="https://opcd.kr/wp-content/uploads/2020/10/opcd_logo_white-e1593583896538-1.png" alt="opcd_logo" style={{ height: '3vh'}} />
          </Link>
        </div>
        
        <ul className="menus">
          <li className="menu_item">
            <Link href="https://opcd.kr/about/"><a>ABOUT</a></Link>
          </li>
          <li className="menu_item">
            <Link href="https://opcd.kr/wmm/"><a>WMM</a></Link>
          </li>
          <li className="menu_item">
            <Link href="https://opcd.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/"><a>공지사항</a></Link>
          </li>
          <li className="menu_item">
            <Link href="https://opcd.kr/opcd-login-page/"><a><i className="fas fa-user"></i></a></Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .header {
          height: 55px;
        }

        .header > nav {
          position: fixed;
          width: 100%;
          height: 55px;
          top: 0;
          overflow: hidden;
          background-color:black;
          display: flex;
          align-items: center;
          z-index: 99;
        }

        .home_logo {
          margin-left: 3vw;
          height: 3vh;
        }

        .menus {
          margin-left: auto;
        }

        .menu_item {
          list-style:none;
          display:inline-block;
          margin-right: 2vw;
        }

        .menu_item > a {
          color:white;
          text-decoration: none;
        }
      `}</style>				
    </div>
  )
}

export default Header