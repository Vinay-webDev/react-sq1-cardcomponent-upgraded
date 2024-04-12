import Card from './Card.jsx'
import ProfilePic1 from './assets/Pic1.png'
import ProfilePic2 from './assets/Pic2.jpg'
import ProfilePic3 from './assets/Pic3.jpg'
import ProfilePic4 from './assets/Pic4.jpg'
import ProfilePic5 from './assets/Pic5.jpg'
import ProfilePic6 from './assets/Pic6.jpeg'
import ProfilePic7 from './assets/Pic7.jpg'

function App() {
  
  return (
    <>
      <Card image={ProfilePic1} title="T-Rex" text="The apex predator!" />
      <Card image={ProfilePic2} title="Captian Marvel" text="The kree warrior" />
      <Card image={ProfilePic3} title="Cammy" text="killer bee of the SF" />
      <Card image={ProfilePic4} title="Guile" text="world warrior" />
      <Card image={ProfilePic5} title="Kratos" text="the god of war" />
      <Card image={ProfilePic6} title="Master Chief" text="the halo protagonist" />
      <Card image={ProfilePic7} title="Saitama" text="one punch man!" />
    </>
  )
}

export default App
