const Footer = () => {
    return (
        <>
            <div className="bg-white"><br /></div>
            <footer className="flex flex-col px-24 md:px-0 items-center bg-dashboard-dark">
                <img className="antialiased h-6" src="https://s3-alpha-sig.figma.com/img/8a05/00fb/96785c0aa30d2a40c10499971e8f12a9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5tr7NUIyQkzzWjZ8u~ir59kYq5ibOEF0rlyOcRd6SRPZ3zNVsjV92hxJk8U9L9J~sn3jKVkHMXOjeqy6S319Gz~lE1oEC8qrZq9XOxnoHT836-Sojvuzwt9RX~oZ2evobbSwywqxwHk73XGHFpx-rofV3RB9rQgnvZXId-vbr4JXvINmmU7RYrwY1KhVrSihRL9SvoIwNt18g24BdhLU0N6CeNhTrZhKvZQHjLADAD~eKmLTDRQI4jcZIGPtUREOrG9antif0tkDZUjVYSPAXEdLzFGw~5A2MNxdFypSwDFN8~vHIlmSPdwAD~ZdQSTlQdRJxXbaMh1yXOtw2uJqQ__" alt="" />
                <div className="flex flex-wrap w-full justify-between text-xs font-semibold items-center text-center py-8 md:pt-2">
                    <span className="flex-1"><a href="#">Product</a></span>
                    <span className="flex-1"><a href="#">Features</a></span>
                    <span className="flex-1"><a href="#">Resources</a></span>
                    <span className="text-lg flex-[2] md:hidden"><a href="/" title="Dashboard">HAIVA</a></span>
                    <span className="flex-1"><a href="about">About</a></span>
                    <span className="flex-1"><a href="#">Blog</a></span>
                    <span className="flex-1"><a href="#">Support</a></span>
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