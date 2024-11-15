function Login() {
    const Center = {
        padding: '20px',
        textAlign: 'center',
        alignItems: 'center',
    }

    return (
        <div className="Log" style={Center}>
            <h2>Login to your Account</h2>
            <input type="text" id="username" className="input" placeholder="Username"/><br/>
            <input type="password" id="password" className="input" placeholder="Password"/><br/>
            <button className="Button" id="goButton">GO</button>
            <p>New User? <a href={'Home.html'}>Signup</a></p>
        </div>

    )
}
export default Login;