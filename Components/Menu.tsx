import Image from 'next/image';
const Menu = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <a href="#" className="nav-logo">
                    <img src="/Grupo 9.png" className="logo-img" />
                </a>
                {/* <ul className="nav-menu">
                    <li className="nav-item">
                        <input type="text" />
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link inicio-sesion ">Blog</a>
                    </li>
                </ul> */}
                <div>
                <input type="text" name="buscar" className="buscar" id="buscar" placeholder="Buscar" /> 
                <button className="inicio-sesion">Ingresar con Google</button>
                </div>
            </nav>
        </header>
    )
}

export default Menu;