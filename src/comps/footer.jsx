const Footer = () => {
    return (
        <>
            <div className="bg-white"><br /></div>
            <footer className="flex flex-col px-24 md:px-0 items-center bg-dashboard-dark">
                <p className="text-center mt-4 mb-2 hidden md:block text-lg font-bold">HAIVA</p>
                <div className="flex flex-wrap w-full justify-between text-xs font-semibold items-center text-center py-8 md:pt-2">
                    <span className="flex-1">Product</span>
                    <span className="flex-1">Features</span>
                    <span className="flex-1">Resources</span>
                    <span className="text-lg flex-[2] md:hidden">HAIVA</span>
                    <span className="flex-1">About</span>
                    <span className="flex-1">Blog</span>
                    <span className="flex-1">Support</span>
                </div>
                <hr className="border-b-0 border-gray-900 border-opacity-70 w-full" />
                <span className="text-xs py-8">
                    © 2024 — 2030 InnerEcho Inc. All Rights Reserved.
                </span>
            </footer>
        </>
    );
}

export default Footer;