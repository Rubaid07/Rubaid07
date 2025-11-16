const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-800 py-5">
                <div className="flex justify-center">
                        <p className="text-gray-300 text-sm">
                            Copyright © {new Date().getFullYear()} - All rights reserved by 
                            <span className="text-cyan-500 font-medium ml-1">
                                Rubaid Islam
                            </span>
                        </p>
                </div>
        </footer>
    );
};

export default Footer;