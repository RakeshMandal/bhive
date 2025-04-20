import logo from '../assets/logo.jpg';
import callLogo from '../assets/call.jpg'

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-6 shadow-md bg-white">
            <img
                src={logo}
                alt="Company Logo"
                className="w-32 h-auto object-contain"
            />
            <img
                src={callLogo}
                alt="Call Logo"
                className="w-auto h-auto object-contain border-2 rounded-md p-2"
                style={{ border: "1px solid #F2B304" }}
            />
        </header>
    );
}

export default Header

