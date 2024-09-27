import { Container, Nav, Navbar } from "react-bootstrap"

const StoreNavbar = () =>{
    return (
<Navbar bg="primary" variant="dark">
<Container>
    <Navbar.Brand href="/"> Online Store
        <Nav className="me-auto">
            <Nav.Link href="/"> Home</Nav.Link>
            <Nav.Link href="/cart"> Cart</Nav.Link>
        </Nav>
    </Navbar.Brand>
</Container>
</Navbar>
        )
}

export default StoreNavbar