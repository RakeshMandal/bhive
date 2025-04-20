import { FC } from 'react';
import {
    FaUsers,
    FaDumbbell,
    FaWifi,
    FaCoffee,
    FaRupeeSign,
    FaCouch,
    FaClock,
} from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';
import { IconType } from 'react-icons';

interface Service {
    icon: IconType;
    label: string;
}

const services: Service[] = [
    { icon: FaUsers, label: 'Community Events' },
    { icon: FaDumbbell, label: 'Gym Facilities' },
    { icon: FaWifi, label: 'High-Speed WiFi' },
    { icon: FaCoffee, label: 'Cafe & Tea Bar' },
    { icon: FaRupeeSign, label: 'Affordable' },
    { icon: FaCouch, label: 'Comfort Lounges' },
    { icon: FaClock, label: 'Quick Booking' },
    { icon: GiTennisRacket, label: 'Sports Area' },
];

const Services: FC = () => {
    return (
        <section className="py-10 px-4 md:px-16 bg-gray-50">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Why Choose us?</h2>

            <div className="hidden md:grid grid-cols-4">
                {services.map((service, index) => {
                    const Icon = service.icon as FC<{ className?: string }>;

                    const isLastCol = (index + 1) % 4 === 0;
                    const isLastRow = index >= services.length - 4;

                    return (
                        <div
                            key={index}
                            className={`flex items-center gap-3 px-4 py-5 text-sm text-gray-700 font-medium border-gray-200 
          ${!isLastCol ? 'border-r' : ''}
          ${!isLastRow ? 'border-b' : ''}
        `}
                        >
                            <Icon className="text-yellow-500 text-xl" />
                            <span>{service.label}</span>
                        </div>
                    );
                })}
            </div>

            <div className="grid md:hidden grid-cols-2 gap-4">
                {services.map((service, index) => {
                    const Icon = service.icon as FC<{ className?: string }>;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center text-center bg-white p-4 rounded-xl shadow-sm`}
                        >
                            <Icon className="text-yellow-500 text-2xl mb-2" />
                            <span className="text-sm text-gray-800">{service.label}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
