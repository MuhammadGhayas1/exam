import React from 'react';

const ResourcesSection: React.FC = () => {
  const resources = [
    { label: 'PROJECT PROPOSAL', link: 'https://drive.google.com/file/d/15TXB5vC0Wec0ls7_d_nIr-gR_-iFwRZj/view?usp=sharing' },
    { label: 'UML CLASS DIAGRAM', link: 'https://drive.google.com/file/d/1M_8F_twpTFIjbXff29aBea7li97yIjSR/view?usp=sharing' },
    { label: 'VIEW PROJECT FLYER', link: 'https://drive.google.com/file/d/15L6fXc2rheEP4XkSE2yTv_WSTaXVFB2e/view?usp=sharing' },
    { label: 'VIEW PROJECT STANDEE', link: 'https://drive.google.com/file/d/1cdvXbXvI3X0vT_vw4FR3qUVd81osah-k/view?usp=sharing' },
    { label: 'VIEW SOURCE CODE', link: 'https://drive.google.com/drive/folders/1J7aItpGiCWkRPQWQD_fmJTUjOyHIWQgG?usp=sharing' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#4a2b7a] to-[#6b3fa0] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white-400 mb-4 uppercase tracking-wide">
          Project Files & Resources
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-12"></div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/60 hover:bg-slate-800/80 text-white font-semibold py-3 px-6 rounded transition duration-300 shadow-md"
            >
              {resource.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
