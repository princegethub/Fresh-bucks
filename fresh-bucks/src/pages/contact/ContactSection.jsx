import React from "react";

export default function ContactSection() {
  return (
    <div className="w-full bg-[#FDEDBF] rounded-3xl shadow-2xl px-0 md:px-8 py-12 mx-auto my-12 max-w-7xl">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Image */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-[#FDEDBF] rounded-3xl md:rounded-r-none overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/fresh-berry-cocktail-rustic-wooden-table-generated-by-ai_188544-13496.jpg?t=st=1746210870~exp=1746214470~hmac=d35353c7208c1cb86ab54f7da2a010b5cf1c40fd92414d2ab2617f0c7369caa0&w=2000"
            alt="Contact"
            className="w-full h-full object-cover min-h-[300px] max-h-[500px]"
          />
        </div>
        {/* Form & Info */}
        <div className="md:w-1/2 w-full flex flex-col justify-center p-6 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We love to hear from you! Whether you have a question about our juices, want to give feedback, or just want to say hello, our team is ready to answer all your questions. Fill out the form below or use the contact information provided. We'll get back to you as soon as possible!
          </p>

          {/* Contact Info & Hours */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Contact Information</h3>
              <div className="flex items-center gap-3 mb-1">
                <span className="material-icons text-green-700">phone</span>
                <span className="text-gray-700 font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 mb-1">
                <span className="material-icons text-green-700">email</span>
                <span className="text-gray-700 font-medium">info@freshbucks.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-icons text-green-700">location_on</span>
                <span className="text-gray-700 font-medium">123 Juice Street, Mumbai, India</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Business Hours</h3>
              <div className="flex flex-col gap-1 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 am - 8:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 am - 6:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 am - 5:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="mt-10">
        <iframe
          title="FreshBucks Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.877655315367!3d19.0760909870896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b7b7b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: "1rem", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
