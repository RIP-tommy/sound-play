import Link from "next/link"
import headerStyle from "./Header.module.scss"

const Header = () => {
  return (
    <div className={headerStyle.header}>
      
      <nav role="navigation">

        <div className={headerStyle.home_logo}>
          <Link href="./">
            <img className={headerStyle.home_logo_img} src="/img/logo.png" alt="main_logo"/>
          </Link>
        </div>
      </nav>			
    </div>
  )
}

export default Header