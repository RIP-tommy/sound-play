import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer">
      <section className="SNS_section">

        <div className="SNS_section_item_wrapper">
          <h2>SNS SERVICE</h2>
        </div>

        <div className="SNS_section_item_wrapper">
          <div className="sns_link">
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

        <div className="SNS_section_item_wrapper">
          <p>SNS를 통해 OPCD가 제공하는 다양한 콘텐츠를 실시간으로 받아보세요.</p>
        </div>

		  </section>

      <section className="footer_info_section">

        <div className="footer_logos">
          <div className="image_container" style={{ width: '15%'}} >
            <img src="https://opcd.kr/wp-content/uploads/2020/06/seoul-1.png" alt="seoul_logo" style={{ width: '141%'}} />
          </div>
          <div className="image_container" style={{ paddingLeft: '1vw'}}>
            <img src="https://opcd.kr/wp-content/uploads/2020/07/opcd_logo_white-e1593583896538.png" alt="OPCD_logo" style={{ width: '90%'}} />
          </div>
          <div className="image_container" style={{ paddingRight: '1vw'}}>
            <img src="https://opcd.kr/wp-content/uploads/2020/06/dobong-1.png" alt="Dobong_logo" style={{ width: '80%'}} />
          </div>
        </div>

        <div className="footer_location_info">
         <pre style={{ fontFamily: 'noto-regular' }}>
           {`주소 : 서울 도봉구 마들로11길 74 1층 오픈창동 창동 1-9 (우)01413
대표명 : 오픈창동 | 연락처 : 02-994-7525~6
사업자 등록번호 : 217-83-01406(도봉구청)`}</pre>
        </div>

        <div className="footer_site_poilcy_info">
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

      <style jsx>{`
        .footer {
          bottom: 0;
          width: 100%;
          text-align: center;
        }
        .SNS_section{
          border: 2px solid;
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .SNS_section_item_wrapper > h2,p {
          margin:0;
        }
        .SNS_section_item_wrapper > h2 {
          font-size: 1.4rem;
        }
        .footer_info_section {
          background-color: black;
        }
        .footer_logos {
          padding: 5vh 0 4vh 0;
          max-width:790px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer_location_info {
          padding: 0 0 3vh 0;
        }
        pre {
          display: block;
          white-space: pre-wrap;
          margin: 0;
          color: white;
        }
        .footer_site_poilcy_info {
          padding: 0 0 2vh 0;
          display:flex;
          justify-content: space-around;
          max-width: 720px;
          margin: auto;
        }
        .footer_site_poilcy_info > a {
          color: white;
          text-decoration: none;
          padding-bottom: 50px;
        }
      `}</style>
  
    </div>
  )
}

export default Footer