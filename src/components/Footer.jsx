import React from 'react';

const Footer = () => {
    return (
        <div><footer className="bg-primary rounded-xl text-white py-10 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Find<span className='text-accent'>My </span>Rommie</h2>
                        <p className="text-white">
                            Helping you find the perfect roommate and a place to call home.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-white">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/addRoommate" className="hover:text-white">Add Listing</a></li>
                            <li><a href="/browseListing" className="hover:text-white">Browse Listings</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Contact</h3>
                        <p className="text-white">Email: support@roommatefinder.com</p>
                        <p className="text-white">Phone: +1 (234) 567-8901</p>
                        
                    </div>
                </div>

                {/* Divider and Bottom */}
                <div className="border-t border-white mt-10 pt-6 text-center text-sm text-white">
                    Made with ❤️ by Taherun Nasa Toma
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;