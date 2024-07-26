import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="">
            {/* Use the Bootstrap navbar component */}
            <nav className="navbar navbar-expand navbar-dark" style={{ backgroundColor: '#ff6900' }}>

                <div className="container-fluid">
                    {/* Navigation links using NavLink and Bootstrap styling */}
                    <NavLink className="navbar-brand" to="/">ChatBot</NavLink>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link" to="/" end>Home</NavLink>
                            <NavLink className="nav-item nav-link" to="/chat">Chat</NavLink>
                            <NavLink className="nav-item nav-link" to="/person">Person</NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container mt-4">
                <Outlet />
            </main>
        </div>
    );
}