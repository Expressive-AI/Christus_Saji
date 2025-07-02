import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'BSc Data Science and Statistics',
      institution: 'CHRIST (Deemed to be University)',
      period: 'June 2024 - Present',
      location: 'Bengaluru, India',
      status: 'In Progress',
      description: 'Comprehensive program covering statistical methods, data science fundamentals, programming, and analytics.',
      gpa: 'In Progress',
      highlights: [
        'Statistical Computing & Modeling',
        'Python & R Programming',
        'Data Visualization & Analytics',
        'Descriptive Statistics & Probability'
      ]
    },
    {
      degree: 'High School - Commerce Mathematics',
      institution: 'Indian Central School',
      period: 'April 2021 - March 2023',
      location: 'Kuwait',
      status: 'Completed',
      description: 'CBSE Board curriculum with focus on Commerce and Mathematics.',
      gpa: 'Completed',
      highlights: [
        'Mathematics',
        'Commerce Studies',
        'Statistical Foundations',
        'Analytical Thinking'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-tr from-blue-50/25 via-white/85 to-purple-50/20 relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-100/20 to-transparent"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-green-300 hidden lg:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                {/* Content card */}
                <div className={`w-full ${index % 2 === 0 ? 'lg:w-5/12 lg:pr-8' : 'lg:w-5/12 lg:pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                          <p className="text-green-600 font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="font-semibold text-gray-900">
                        {edu.gpa !== 'In Progress' && edu.gpa !== 'Completed' ? `GPA: ${edu.gpa}` : edu.gpa}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{edu.description}</p>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Education;