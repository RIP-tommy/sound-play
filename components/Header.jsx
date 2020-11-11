import Link from "next/link"
import headerStyle from "./Header.module.scss"

const Header = () => {
  return (
    <div className={headerStyle.header}>
      
      <nav role="navigation">

        <div className={headerStyle.home_logo}>
          <Link href="https://opcd.kr/wmm">
            <img className={headerStyle.home_logo_img} src="https://opcd.kr/wp-content/uploads/2020/10/opcd_logo_white-e1593583896538-1.png" alt="opcd_logo"/>
          </Link>
        </div>
        
        <ul className={headerStyle.menus}>
          <li className={headerStyle.menu_item}>
            <Link href="https://opcd.kr/about/"><a>ABOUT</a></Link>
          </li>
          <li className={headerStyle.menu_item}>
            <Link href="https://opcd.kr/wmm/"><a>WMM</a></Link>
          </li>
          <li className={headerStyle.menu_item}>
            <Link href="https://opcd.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/"><a>공지사항</a></Link>
          </li>
          <li className={headerStyle.menu_item}>
            <Link href="https://opcd.kr/opcd-login-page/"><a><i className="fas fa-user"></i></a></Link>
          </li>
        </ul>
      </nav>			
    </div>
  )
}

export default Header