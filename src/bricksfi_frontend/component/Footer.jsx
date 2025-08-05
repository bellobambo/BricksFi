import { AppleIcon} from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">📞</span>
                  <span className="text-gray-300 text-sm">(225) 555- 0118</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300">✉️</span>
                  <span className="text-gray-300 text-sm">
                    support@company.com
                  </span>
                </div>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-xl">𝕏</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-xl">📘</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <span className="text-xl">📸</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Download App Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Download App</h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <div className="bg-black rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-black font-bold text-sm">▷</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">Get it on</p>
                      <p className="text-sm font-semibold">Google Play</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="block">
                  <div className="bg-black rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-700 transition-colors">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <AppleIcon className='bg-black'/>
                  
                      <span className="text-black font-bold text-sm"></span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-300">Download on the</p>
                      <p className="text-sm font-semibold">App Store</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-100 text-gray-800 py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-2 md:mb-0">
              <span className="text-sm">All Rights Reserved</span>
              <span className="text-gray-500">©</span>
              <span className="text-sm">BricksFi 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
