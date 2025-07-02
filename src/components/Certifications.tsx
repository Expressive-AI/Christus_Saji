import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Programming Internship',
      organization: 'VaultofCodes',
      date: '2024',
      description: 'Comprehensive Python programming internship covering fundamentals and practical applications.',
      skills: ['Python', 'Programming Fundamentals', 'Problem Solving'],
      verified: true
    },
    {
      title: 'Data Visualization in Power BI',
      organization: 'DataCamp',
      date: '2024',
      description: 'Professional certification in creating effective data visualizations using Microsoft Power BI.',
      skills: ['Power BI', 'Data Visualization', 'Business Intelligence'],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-bl from-white/90 via-green-50/25 to-gray-100/30 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-blue-50/15"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional certifications and learning achievements in data science and programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    <p className="text-green-600 font-semibold">{cert.organization}</p>
                  </div>
                </div>
                {cert.verified && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Date */}
              <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{cert.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4">{cert.description}</p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Skills Gained:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Link */}
              <div className="pt-4 border-t border-gray-200">
                <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-300">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600">
              Always seeking new opportunities to expand my knowledge and skills in data science, 
              statistics, and emerging technologies.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Certifications;
