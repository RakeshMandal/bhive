import React from 'react';
import phoneImage from '../assets/phone-image.jpg'; // Your combined phone image
import googlePlay from '../assets/google-play.png';
import appStore from '../assets/app-store.png';

const FooterAppDownload = () => {
  return (
    <div className="bg-[#f9faff] py-12 pb-0">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Download our app now</h2>

      <div className="mx-auto bg-[#ffffff] rounded-2xl flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between px-6 py-10 md:py-0">
        <div className="flex justify-center w-full md:w-1/2 md:justify-start">
          <img
            src={phoneImage}
            alt="BHIVE App Screens"
            className="max-w-[300px] md:max-w-none md:w-[320px] md:h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-end md:pl-10 mt-10 md:mt-0 pb-6 md:pb-10">
          <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto md:mx-0 w-full">
            Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <img src={googlePlay} alt="Google Play" className="h-10 cursor-pointer" />
            <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAppDownload;
