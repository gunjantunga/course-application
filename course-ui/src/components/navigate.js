
import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = styled(AppBar)(
    `background:black`
)
const Tabs = styled(NavLink)(`
    font-size:20px;
    margin-right:20px;
    text-decoration:none;
    color:inherit;
`)


function NavBar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('chapters');
    }

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <Header>
            <Toolbar style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Tabs
                    style={({ isActive }) => ({
                        color: isActive && user ? '#fff' : 'gray',
                        borderBottom: isActive && user ? '2px solid #fff' : '',
                        fontSize: 25,
                        fontWeight: 'bold',

                    })}
                    to={user ? '/courses' : '/'}
                >
                    All Courses
                </Tabs>
                <Button variant='contained' onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </Header>
    )
}

export default NavBar;