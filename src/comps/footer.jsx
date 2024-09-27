const Footer = () => {
    return (
        <footer className="flex flex-col px-24 items-center bg-dashboard-dark">
            <div className="flex w-full justify-between text-xs font-semibold items-center text-center py-8">
                <span className="flex-1">Product</span>
                <span className="flex-1">Features</span>
                <span className="flex-1">Resources</span>
                <span className="text-lg flex-[2]">HAIVA</span>
                <span className="flex-1">About</span>
                <span className="flex-1">Blog</span>
                <span className="flex-1">Support</span>
            </div>
            <hr className="border-b-0 border-gray-900 border-opacity-70 w-full" />
            <span className="text-xs py-8">
                © 2024 — 2030 InnerEcho Inc. All Rights Reserved.
            </span>
        </footer>
    );
}

export default Footer;