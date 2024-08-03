import { withRouter, Link } from 'react-router-dom'
import { GiShop } from "react-icons/gi";

import './index.css'

const Header = props => {
    const logoutButtonClicked = async () => {
        const url = 'http://localhost:5080/logout'
        const options = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2YWRjNTI4NjJmNTZjZDA3NTQ2YTM1MyIsIm5hbWUiOiJ2ZWVyIiwiZW1haWwiOiJ2ZWVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHJwNEVNQUdpdmptMXZ2enZrOUhDVHU4VldxWDJvR0tyYVd6OGNyOXJIbmVVQXlxcXZ0ajh1IiwiY29uZmlybVBhc3N3b3JkIjoiJDJiJDEwJGwxTmxGeHFmdE1ZRW90NzRqSjlieWVDSjRGc1lidXQ2RmtnbmxFa0pFR1Z1SFlLVS40RWZ5Iiwicm9sZSI6IkN1c3RvbWVyIiwiX192IjowfSwiaWF0IjoxNzIyNjY0OTE4LCJleHAiOjE3MjU1NDQ5MTh9.O2IuC2PlvyJlTqLmFfIwI-WR6HCbnVizpS8I5PU8Vmw'}`,
            },
            method: 'POST',
        }

        const response = await fetch(url, options)
        console.log(response)

    }

    return (
        <nav className="header-bg-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <GiShop style={{ fontSize: '45px', padding: '10px' }} color="#FFBF00" size={75} />
                <h1 style={{ fontSize: '30px' }}>ShopFlow</h1>
            </div>

            <div className="header-sub-container">
                <li style={{
                    textDecoration: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    padding: '10px',
                    alignSelf: "center",
                    margin: '15px'

                }} className="header-jobs head-options">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Product</Link>
                </li>


                <li style={{
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    padding: '10px',
                    alignSelf: "center",
                    margin: '15px'

                }} className="header-jobs head-options">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart'>Cart</Link>
                </li>


                <div className="header-button-container">
                    <button
                        style={{
                            backgroundColor: 'transparent',
                            border: '4px solid #f5c542',
                            borderRadius: '20px',
                            color: '#FFBF00',
                            fontSize: '20px',
                            padding: '10px',
                            cursor: 'pointer',
                            margin: '15px'
                        }}
                        type="button"
                        onClick={logoutButtonClicked}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header)
