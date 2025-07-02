import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'christussaji13@gmail.com',
      href: 'mailto:christussaji13@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7306446116',
      href: 'tel:+917306446116'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bengaluru, India',
      href: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/christus-saji',
      href: 'https://linkedin.com/in/christus-saji'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-tl from-gray-100/40 via-white/80 to-green-50/30 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/15 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss data science, statistics, or potential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                      <info.icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-1">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm break-all"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Summary Card */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                I'm passionate about data science and always looking to collaborate on 
                interesting projects. Whether you have a question, a project idea, or just 
                want to connect, I'd love to hear from you.
              </p>
              
              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-green-800 text-sm">Open to Opportunities</span>
                </div>
                <p className="text-green-700 text-xs">
                  Always eager to learn and take on new challenges in data science and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
