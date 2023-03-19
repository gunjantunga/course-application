
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
    return (
        <Header>
            <Toolbar>
                <Tabs
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : 'gray',
                        borderBottom: isActive ? '2px solid #fff' : '',
                        fontSize:25,
                        fontWeight:'bold'
                    })}
                    to='/'
                >
                    All Courses
                </Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;