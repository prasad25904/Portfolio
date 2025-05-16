import React, { useState } from 'react';
import './Certifications.css';
import  AbInitio from './../../assets/certificates/Barclays-AbInitio.webp';
import  DataScience from './../../assets/certificates/WhatIsDataScience.webp';
import  DeepLearning from './../../assets/certificates/CertificateNvdiaDeepLearning.webp';
import  ToolsForDs from './../../assets/certificates/ToolsForDS.webp';
import  DataScienceMethodology from './../../assets/certificates/DataScienceMethodology.webp';
import  Devops1 from './../../assets/certificates/Devops1.webp';
import IBM_DevOps_and_Software from './../../assets/certificates/IBM DevOps and Software.webp'
import IBM_Data_Science from './../../assets/certificates/IBM Data Science(Final).webp'
import Google_Data_Analytics from './../../assets/certificates/Google Data Analytics.webp'


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
      title: 'Coursera - IBM DevOps and Software',
      imageUrl: IBM_DevOps_and_Software,
    },
    {
      id: 3,
      title: 'Nvdia- Fundamentals of Deep Learning',
      imageUrl: DeepLearning,
    },
    {
      id: 4,
      title: 'IBM Data Science',
      imageUrl: IBM_Data_Science,
    },
    {
      id: 5,
      title: 'Google Data Analytics',
      imageUrl: Google_Data_Analytics,
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
