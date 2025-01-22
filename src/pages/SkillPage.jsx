import React from 'react';

const SkillPage = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React.js', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
