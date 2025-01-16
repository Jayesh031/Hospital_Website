import React from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="flex-grow bg-gray-100 py-12 px-4 sm:px-8 md:px-16 ">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0288D1]">
          Our Services
        </h1>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">

            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium">Specialized Srvices:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Gynecologist</li>
                  <li>General Surgeon</li>
                  <li>High-Risk Pregnancy</li>
                  <li>Pediatrician</li>
                  <li>Pregnancy care Center</li>
                  <li>Laparoscopic Surgery</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">24/7 services:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Availability of Gynecologist and general surgeon (first in Charholi Budruk)</li>
                  <li>Emergency Services for all Medical Needs</li>
                  <li>Maternity Servuces for normal deliveries and cesarean section</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Special Highlights:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>First Female General surgeon serving Charholi Budruk</li>
                  <li>Spacious special rooms and general wards for patient care </li>
                  <li>Advanced operation theatre and labor room facilities</li>
                  <li>Highly qualified doctors and trained staf</li>
                  <li>Affiliation with Ruby Hall Clinic, Pune.</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Advance Medical Services:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>All laparoscopic and open surgeries performed with precision and care</li>
                  <li>Medical laboratory services.</li>
                </ul>
              </li>

            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">

            <ul className="space-y-4">
              <li>
                <h3 className="text-lg font-medium">Maternity and Pregnancy Care:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Maternity Care</li>
                  <li>Ectopic Pregnancy Treatment and Surgery</li>
                  <li>Management of recurrent abortion/repeated miscarriage(RPL)</li>
                  <li>Care for twin/triplet pregnancies</li>
                  <li>MTP(Medical Termination of Pregnancy)</li>
                  <li>Mormal delivary and Cesarean section</li>
                  <li>Normal delivery after a previous cesarean section</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Sonography Services:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Follocular Monitoring Sonography</li>
                  <li>Early Pregnancy Sonography</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-medium">Women's Health Treatment:</h3>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Treatment for irregular cycles and PCOS/PCOD</li>
                  <li>Excessive hair growth and acne treatment</li>
                  <li>Hair loss treatment</li>
                  <li>Cryptomenorrhoea treatment</li>
                  <li>Dysmenorrhoea (painful bleeding) treatment</li>
                  <li>Treatment for excessive bleeding (menorrhagia)</li>
                  <li>Abnormal uterine bleeding treatment</li>
                  <li>Heavy menses treatment</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
