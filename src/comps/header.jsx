const Header = () => {
    return (
        <header className="flex px-8 py-4 justify-between items-center">
            <span className="text-2xl font-bold">HAIVA</span>
            <nav className="flex gap-6 items-center">
                <ul className="flex gap-4">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Plugins</a></li>
                    <li><a href="#">Workflow</a></li>
                    <li><a className="text-primary" href="#">Dashboard </a></li>
                    <li><a href="#">Session</a></li>
                </ul>
                <button className="py-1 px-9 border rounded-md border-gray-900">Account</button>
            </nav>
        </header>
    );
}

export default Header;