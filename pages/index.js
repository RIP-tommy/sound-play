import Head from 'next/head'
import SongCard from '../components/SongCard'
import Header from '../components/Header'


const Home = ({musicLists}) => {
  return (
    <div className="container">
      <Head>
        <title>Sound Play</title>
      </Head>
      
      <Header />
      <SongCard songLists={musicLists} />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        .songCard_section {
          position: static;
        }
        .button_style { 
          border: 0;
          font: 0/0 a;
          text-shadow: none;
          color: transparent;
          background-color: transparent;
          cursor: pointer;
        }
        button {
          appearance: button;
          -webkit-writing-mode: horizontal-tb !important;
          text-rendering: auto;
          color: -internal-light-dark(black, white);
          letter-spacing: normal;
          word-spacing: normal;
          text-transform: none;
          text-indent: 0px;
          text-shadow: none;
          display: inline-block;
          text-align: center;
          align-items: flex-start;
          cursor: default;
          background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
          box-sizing: border-box;
          margin: 0em;
          font: 400 13.3333px Arial;
          padding: 1px 6px;
          border-width: 2px;
          border-style: outset;
          border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
          border-image: initial;
          outline:none
        }
        .sc_ir {
          border: 0;
          text-shadow: none;
          color: transparent;
          background-color: transparent;
          cursor: pointer;
        }
        .word_truncated {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          word-break: normal;
        }
      `}</style>
    </div>
  )
}




export async function getStaticProps() {
  
  return {
    props: {
      musicLists: [
                  {id: 1, name:'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02'}, 
                  {id: 2, name:'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
                  {id: 3, name:'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
                  {id: 4, name:'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'},
                  {id: 5, name:'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02'}, 
                  {id: 6, name:'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
                  {id: 7, name:'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
                  {id: 8, name:'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'},
                  {id: 9, name:'Nice piano and ukulele', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/buddy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-buddy.mp3', duration: '2:02'}, 
                  {id: 10, name:'Gentle acoustic', author: 'Acoustic', img: 'https://www.bensound.com/bensound-img/sunny.jpg', audio:'https://www.bensound.com//bensound-music/bensound-sunny.mp3', duration: '2:20'},
                  {id: 11, name:'Corporate motivational', author: 'Corporate', img: 'https://www.bensound.com/bensound-img/energy.jpg', audio:'https://www.bensound.com/bensound-music/bensound-energy.mp3', duration: '2:59'},
                  {id: 12, name:'Slow cinematic', author: 'Royalty', img: 'https://www.bensound.com/bensound-img/slowmotion.jpg', audio:'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3', duration: '3:26'}],
    }
  }
}
    
export default Home