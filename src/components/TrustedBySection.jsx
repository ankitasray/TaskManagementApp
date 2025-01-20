import React from 'react';

const companies = [
  { name: 'Oracle', logo: 'https://via.placeholder.com/80?text=Oracle' },
  { name: 'Samsung', logo: 'https://via.placeholder.com/80?text=Samsung' },
  { name: 'Morpheus', logo: 'https://via.placeholder.com/80?text=Morpheus' },
  { name: 'Monday', logo: 'https://via.placeholder.com/80?text=Monday' },
  { name: 'Segment', logo: 'https://via.placeholder.com/80?text=Segment' },
];

const TrustedBySection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">
          Trusted by over <span className="text-blue-600">100+</span> Startups and Freelancers
        </h2>
      </div>
      <div className="flex justify-center gap-6 flex-wrap">
        {companies.map((company) => (
          <img key={company.name} src={company.logo} alt={company.name} className="h-14 hover:scale-110 transition-transform" />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
