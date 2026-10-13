import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>LOJA <span>GAMER</span></h1>
    
        <nav>
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
            </ul>
        </nav>
    
    </header>
  )
}
