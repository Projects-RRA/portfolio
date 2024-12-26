import React from "react";

const experiences = [
  {
    company: "",
    title: "Associate Consultant Trainee",
    duration: "Feb 2022 - Aug 2022",
    logo: "/img/ApexLogo.png"
  },
  { company: "", title: "Associate Consultant", duration: "Aug 2022 - Present",  logo: "/img/ApexLogo.png" }
];

const ExperienceTimeline = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center RR_TimelineFontOverride">Experience Timeline</h2>
        <ul className="space-y-8 p-12">
          {experiences?.map((experience, index) => (
            <li key={index} className="flex justify-center flex-col items-center">
              <div className="flex-shrink-0 w-28 h-12 rounded-full flex items-center justify-center">
                <img
                  src={experience.logo}
                  alt={experience.company}
                />
              </div>
              <div className="ml-4 flex items-center flex-col">
                {experience?.company && <h3 className="text-lg font-semibold">{experience.company}</h3>}
                <p className="text-gray-600 mb-1 RR_ProjectParagraph">{experience.title}</p>
                <p className="text-gray-600 RR_ProjectParagraph">{experience.duration}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
