import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/">
              <img
                src="/images/asachilogo.png"
                alt="ASACHI"
                className="h-8 object-contain"
              />
            </Link>
            <p className="mt-4 text-gray-400">Crafting premium cooking experiences since 2025.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/#products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-400">1-800-ASACHI</li>
              <li className="text-gray-400">support@asachi.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Asachi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
