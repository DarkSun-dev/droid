import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react'
import PersonIcon from '@mui/icons-material/Person'
const Header = () => {
    return (
        <div>
            <Navbar expand="lg" light style={{ backgroundColor: '#e3f2fd' }} mb="3">
                <Navbar.Brand href="#">MENTOR <strong style={{fontSize: '13px'}}>Researcher</strong></Navbar.Brand>
                <Navbar.Toggler target="#navbarColor3" />
                <Collapse navbar id="navbarColor3">
                    <Navbar.Nav mr="auto">
                        <Nav.ItemLink href="#" active></Nav.ItemLink>
                    </Navbar.Nav>
                    <Form inline my="2 lg-0">
                        <Button outline primary my="2 sm-0">Student <PersonIcon /></Button>
                    </Form>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header