import React, { useState } from 'react';
import './Certifications.css';
import  AbInitio from './../../assets/certificates/Barclays-AbInitio.jpg';
import  DataScience from './../../assets/certificates/WhatIsDataScience.jpg';
import  DeepLearning from './../../assets/certificates/CertificateNvdiaDeepLearning.jpg';


const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Barclays AbInitio',
      imageUrl: AbInitio,
    },
    {
      id: 2,
      title: 'Coursera- What is Data Science?',
      imageUrl: DataScience,
    },
    {
      id: 3,
      title: 'Nvdia- Fundamentals of Deep Learning',
      imageUrl: DeepLearning,
    },
    
  ];

  const handleCardClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="certificate-card"
            onClick={() => handleCardClick(certificate)}
          >
            <img src={certificate.imageUrl} alt={certificate.title} />
            <h3>{certificate.title}</h3>
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedCertificate.imageUrl}
              alt={selectedCertificate.title}
            />
            <h3>{selectedCertificate.title}</h3>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
