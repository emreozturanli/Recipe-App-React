import {Link} from 'react-router-dom';
import { StyledError } from '../styles/Error.styled'


const Error = () => {
  return (
    <StyledError>
      <h4>SOMETHING WENT WRONG!</h4>
      <p>Below are the possible reasons of this error:</p>
      <ul>
        <li>Wrong URL</li>
        <li>Unstable Internet connection</li>
        <li>API Connection problems</li>
      </ul>
      <hr/>
      <Link to="/">
          <button>Back Home</button>
      </Link>
    </StyledError>
  )
}

export default Error