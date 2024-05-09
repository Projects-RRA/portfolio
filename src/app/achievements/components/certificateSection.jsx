"use client";

import certificateData from "../../../../public/data/certificateData.json";

export const CertificateSection = () => {
  const { certificates } = certificateData;
  return (
    <div className="grid grid-cols-2 gap-24 align-mid dle p-10 RR_CertificateGridWidth mx-4">
      {certificates?.map((certificate) => {
        return (
          <div className="RR_Certificate__Images">
            <img
              className="box"
              src={certificate.imgUrl}
              alt={certificate.title}
              loading="lazy"
            />
            <span className="flex justify-center">{certificate.title}</span>
          </div>
        );
      })}
    </div>
  );
};
