import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white/90 via-green-50/40 to-transparent py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/20 to-blue-50/20"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 font-handwriting">
                  Christus Saji Joseph
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 font-medium">
                Data Science & Statistics Student
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                A passionate and inquisitive undergraduate student working toward a BSc in Data Science and 
                Statistics at CHRIST (Deemed to be University), Bengaluru. Seeking opportunities to apply 
                analytical, coding, and statistical skills to solve real-world problems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Christus_Saji.pdf"
                download="Christus_Saji_Joseph_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-green-200">
                <img
                  src="/christus_saji.jpg"
                  alt="Christus Saji Joseph"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;