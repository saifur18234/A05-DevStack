import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Dev Stack - 2 columns */}
          <div className="md:col-span-2">
            <img src={Logo} alt="Dev Stack Logo" />

            <p className="text-gray-500 mt-3 max-w-md">
              Build your ideal development stack with the right technologies.
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-5">
              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-black"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-black"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-gray-600 font-semibold hover:text-black"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>

            <ul className="space-y-2 text-gray-500">
              <li>Technologies</li>
              <li>Projects</li>
              <li>Features</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>

            <ul className="space-y-2 text-gray-500">
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>

            <ul className="space-y-2 text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
