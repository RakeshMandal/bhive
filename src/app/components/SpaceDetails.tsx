import React from 'react';
import { useGetAllSpacesQuery } from '../../redux/api/spaceApi';
import distanceIcon from '../assets/assistant_direction.png';
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'
import arrow3 from '../assets/arrow3.png'

const SpaceDetails: React.FC = () => {
  const { data: spaces = [], isLoading } = useGetAllSpacesQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-[#f9faff]">
      <h2 className="text-2xl font-bold mb-6">Our Space Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {spaces.map((space) => {
          const discount = space.day_pass_discounts_percentage?.['10'];
          const imagePath = `https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/${space.images?.[0] || 'fallback.png'}`;

          return (
            <div key={space.id} className="rounded-xl shadow-md overflow-hidden bg-white">

              <div className="p-4 pb-0 flex justify-between items-start border-gray-300">
                <h3 className="font-semibold text-lg text-gray-900">{space.name}</h3>
                <button
                  className="flex flex-col items-center border-none"
                  onClick={() =>
                    window.open(space.google_maps_url, '_blank')
                  }
                >
                  <div className="bg-[#F9F9F9] rounded-md px-3 py-2 flex flex-col items-center justify-center">
                    <img src={distanceIcon} alt="distance" className="w-4 h-4 mb-1" />
                    <div className="text-xs text-gray-700">{space.distance_km ?? 6} Kms</div>
                  </div>
                </button>
              </div>

              <div className="relative px-4 pt-4">
                <img
                  src={imagePath}
                  alt={space.name}
                  className="w-full h-52 object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'fallback.png';
                  }}
                />
              </div>

              <div className="p-4 text-left">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-gray-300 rounded-lg p-2 flex flex-col justify-between relative">
                    <span className="text-sm text-gray-500 font-medium">Day Pass</span>
                    <div className="font-semibold text-lg">
                      ₹ {space.day_pass_price} <span className="text-xs text-gray-500">/ Day</span>
                    </div>
                    <div className="text-gray-400 text-xl flex absolute top-[45%] right-[5%]">
                      <img src={arrow1} alt="arrow1" />
                      <img src={arrow2} alt="arrow2" />
                      <img src={arrow3} alt="arrow3" />
                    </div>
                  </div>

                  <div className="bg-yellow-400 text-white rounded-lg p-2 relative flex flex-col justify-between">
                    {discount && (
                      <span className="absolute -top-[1.8rem] right-[10%] w-[80%] bg-gray-900 text-xs px-2 py-0.5 rounded text-center">
                        {discount.message}
                      </span>
                    )}
                    <span className="text-sm font-medium">Bulk Pass</span>
                    <div className="font-semibold text-lg">
                      ₹ {space.day_pass_price * 10} <span className="text-xs">/ 10 Days</span>
                    </div>
                    <div className="text-gray-400 text-xl flex absolute top-[40%] right-[5%]">
                      <img src={arrow1} alt="arrow1" />
                      <img src={arrow2} alt="arrow2" />
                      <img src={arrow3} alt="arrow3" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpaceDetails;
