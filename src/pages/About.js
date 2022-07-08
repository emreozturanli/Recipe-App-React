import StyledAbout from "../styles/About.styled"

const About = () => {
  return (
    <StyledAbout>
      <h1>ABOUT THIS PAGE</h1>
      <p>NOTE: Some informations are missing because of the API. If you can't see the page properly please go back and try again.</p>
      <main>
        <div >
          <h3>TOOLS</h3>
          <ul >
            <li>REACT</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>AXIOS</li>
            <li>REACT ROUTER DOM v6</li>
            <li>REACT ICONS</li>
          </ul>
        </div>
        <div >
          <h3>USEFULL LINKS</h3>
          <ul>
            <li><a href="https://github.com/emreozturanli/Recipe-App-React">Source Code</a></li>
            <li><a href="https://github.com/emreozturanli">My GitHub</a></li>
          </ul>
        </div>
      </main>
    </StyledAbout>
  )
}

export default About