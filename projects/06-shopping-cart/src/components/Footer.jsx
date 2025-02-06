import './Footer.css'

// eslint-disable-next-line react/prop-types
export function Footer ({filters}) {
    return (
        <footer className='footer'>
            <h4>Prueba técnica de React </h4>
            <span>@LuisCorreaDv</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
            {
                JSON.stringify(filters,null,2)
            }
        </footer>
    )
}