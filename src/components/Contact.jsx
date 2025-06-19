import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaGlobe, FaMapMarkerAlt, FaBusinessTime, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects or opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">

          {/* Enhanced Social Links */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Find Me Online</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <FaGithub className="text-gray-700 text-xl" />, name: "GitHub", url: "https://github.com/yourusername", color: "bg-gray-50" },
                { icon: <FaLinkedin className="text-blue-600 text-xl" />, name: "LinkedIn", url: "https://linkedin.com/in/yourusername", color: "bg-blue-50" },
                { icon: <FaTwitter className="text-blue-400 text-xl" />, name: "Twitter", url: "https://twitter.com/yourusername", color: "bg-blue-50" },
                { icon: <FaFacebook className="text-blue-500 text-xl" />, name: "Facebook", url: "https://your-portfolio.com", color: "bg-gray-50" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className={`flex items-center p-3 ${social.color} hover:bg-opacity-75 rounded-lg transition-colors`}
                >
                  <span className="mr-3">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>

            {/* Added Contact Methods Section */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-sm font-medium text-gray-500 mb-3">Preferred Contact Methods</h4>
              <div className="flex flex-wrap gap-2">
                {['Email', 'LinkedIn', 'Facebook'].map(method => (
                  <span
                    key={method}
                    className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-3">
                I typically respond within 24 hours on weekdays.
              </p>
            </div>
          </div>

          {/* New "Let's Work Together" Section */}
          <div className="mt-10 bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-xl shadow-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Want to work together?</h3>
            <p className="text-blue-100 mb-6">
              I'm currently available for freelance projects or full-time positions. Let's discuss how I can help bring your ideas to life!
            </p>
           
              <button
                className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-100 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 cursor-pointer"
              >
                <span className="text-lg">Send me Message</span>
                <div
                  class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                >
                  <div className="relative h-full w-10 bg-white/20"></div>
                </div>
              </button>
            <p className="text-blue-100 text-sm mt-4">
              Or just say hi! 👋 I love meeting new people in the tech community.
            </p>
          </div>

          {/* Additional Personal Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              "Every great collaboration starts with a simple conversation. Don't hesitate to reach out - even if it's just to exchange ideas or share your favorite tech stack!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;