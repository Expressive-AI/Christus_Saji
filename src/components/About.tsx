import { Code, Database, BarChart3, Brain, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', icon: Code, level: 85 },
    { name: 'R Programming', icon: BarChart3, level: 80 },
    { name: 'SQL', icon: Database, level: 75 },
    { name: 'Data Visualization', icon: Zap, level: 80 },
    { name: 'Statistics', icon: TrendingUp, level: 85 },
    { name: 'Problem Solving', icon: Brain, level: 90 },
  ];

  const interests = [
    'Data Analytics',
    'Statistical Modeling',
    'Business Intelligence',
    'Data Visualization',
    'Python Programming',
    'Data Science Research',
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-tl from-green-50/30 via-white/80 to-blue-50/20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/30"></div>
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a passionate and inquisitive undergraduate student working toward a BSc in Data Science and 
                Statistics at CHRIST (Deemed to be University), Bengaluru. My journey in data science is driven 
                by a curiosity to solve real-world problems through analytical thinking and statistical insights.
              </p>
              <p>
                Currently in my second year, I have developed skills in Python, R programming, and SQL, along with 
                expertise in data visualization tools like Tableau and Power BI. I believe in the power of 
                data-driven decision making and strive to communicate complex insights in accessible ways.
              </p>
              <p>
                I am actively seeking opportunities to apply my analytical, coding, and statistical skills in 
                real-world scenarios and gain hands-on experience in data-driven industries.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IconComponent className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="font-medium">Fluent</span>
                </div>
                <div className="flex justify-between">
                  <span>Malayalam</span>
                  <span className="font-medium">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>Hindi</span>
                  <span className="font-medium">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>Spanish</span>
                  <span className="font-medium">Beginner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;