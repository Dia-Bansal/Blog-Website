
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';



const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`

const Header = () => {


    const navigate = useNavigate();

    const logout = async () => navigate('/account');
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
        
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                {/* <Link to='/about'>ABOUT</Link> */}
                <Link to='/contact'>CONTACT</Link>
                <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                WRITE
            </Link>
                <Link to='/account'>LOGOUT</Link>
                {/* <form>
        <div className='search-wrapper'>
            <button className='search-btn'></button>
            <div className='form-group'>
                <input
                style={{borderRadius:'20px',width:'200px',height:'30px'}}
                type='text'
                className='form-control'
                placeholder='Searching...'
                // onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
        </div>
    </form> */}
            </Container>
        </Component>
    )
}

export default Header;