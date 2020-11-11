import Link from "next/link"
import footerStyle from "./footer.module.scss"

const Footer = () => {
  return (
    <div className={footerStyle.footer}>
      <section className={footerStyle.SNS_section}>

        <div className={footerStyle.SNS_section_item_wrapper}>
          <h2>SNS SERVICE</h2>
        </div>

        <div className={footerStyle.SNS_section_item_wrapper}>
          <div className={footerStyle.sns_link}>
            <Link href="https://www.instagram.com/opcd.official/">
              <a> 
                <img src="https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156.png" alt="instagram_link" srcSet="https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156.png 512w, https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156-300x300.png 300w, https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156-150x150.png 150w, https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156-200x200.png 200w, https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156-500x500.png 500w, https://opcd.kr/wp-content/uploads/2020/09/free-icon-instagram-1384156-100x100.png 100w" style={{width: '32px'}} />
              </a>
            </Link>
                    
            <Link href="https://www.facebook.com/openchangdong">
              <a>
                <img src="https://opcd.kr/wp-content/uploads/2020/09/facebook.png" alt="facebook_link" srcSet="https://opcd.kr/wp-content/uploads/2020/09/facebook.png 120w, https://opcd.kr/wp-content/uploads/2020/09/facebook-100x100.png 100w" style={{width: '32px'}} />
              </a>
            </Link>

            <Link href="https://www.youtube.com/channel/UC2DD_CttcVgk9tf8-A4lkbw">
              <a>
                <img src="https://opcd.kr/wp-content/uploads/2020/09/youtube.png" alt="youtube_link" srcSet="https://opcd.kr/wp-content/uploads/2020/09/youtube.png 120w, https://opcd.kr/wp-content/uploads/2020/09/youtube-100x100.png 100w" style={{width: '32px'}} />
              </a>
            </Link>
          </div>
        </div>

        <div className={footerStyle.SNS_section_item_wrapper}>
          <p>SNS를 통해 OPCD가 제공하는 다양한 콘텐츠를 실시간으로 받아보세요.</p>
        </div>

		  </section>

      <section className={footerStyle.footer_info_section}>

        <div className={footerStyle.footer_logos}>
          <div className={footerStyle.image_container} style={{ width: '18%' }} >
            <img src="https://opcd.kr/wp-content/uploads/2020/06/seoul-1.png" alt="seoul_logo" style={{ width: '141%'}} />
          </div>
          <div className={footerStyle.image_container}>
            <img src="https://opcd.kr/wp-content/uploads/2020/07/opcd_logo_white-e1593583896538.png" alt="OPCD_logo" style={{ width: '90%'}} />
          </div>
          <div className={footerStyle.image_container} style={{ paddingRight: '1vw'}}>
            <img src="https://opcd.kr/wp-content/uploads/2020/06/dobong-1.png" alt="Dobong_logo" style={{ width: '80%'}} />
          </div>
        </div>

        <div className={footerStyle.SNS_section_item_wrapper_in_info_section}>
          <div className={footerStyle.sns_link}>
            <Link href="https://www.instagram.com/opcd.official/">
              <a> 
                <img src="/img/instagram-logo.svg" alt="instagram_link" style={{width: '32px'}} />
              </a>
            </Link>
                    
            <Link href="https://www.facebook.com/openchangdong">
              <a>
                <img src="/img/facebook-logo.svg" alt="facebook_link" style={{width: '32px'}} />
              </a>
            </Link>

            <Link href="https://www.youtube.com/channel/UC2DD_CttcVgk9tf8-A4lkbw">
              <a>
                <img src="/img/youtube-logo.svg" alt="youtube_link" style={{width: '32px'}} />
              </a>
            </Link>
          </div>
        </div>

        <div className={footerStyle.footer_location_info}>
         <pre style={{ fontFamily: 'noto-regular' }}>
           {`주소 : 서울 도봉구 마들로11길 74 1층 오픈창동
창동 1-9 (우)01413
대표명 : 오픈창동 | 연락처 : 02-994-7525~6
사업자 등록번호 : 217-83-01406(도봉구청)`}</pre>
        </div>

        <div className={footerStyle.footer_site_poilcy_info}>
          <Link href="https://opcd.kr/privacy-policy/">
            <a>
              개인정보 처리방침
            </a>
          </Link>
          <Link href="https://opcd.kr/%ec%9d%b4%ec%9a%a9%ec%95%bd%ea%b4%80-2/">
            <a>
              이용약관
            </a>
          </Link>
          <Link href="mailto:support@opcd.kr">
            <a>
              Contact US
            </a>
          </Link>

        
        </div>
      </section>
    </div>
  )
}

export default Footer