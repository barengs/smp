import React, { useEffect, useState } from "react";
import Image2 from "@/assets/images/all-img/widget-bg-2.png";
import moment from "moment-timezone";

const CardWelcome = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  const [days, setDays] = useState('');

  const getDays = () => {
    const [day, hour, am_pm] = moment().tz('Asia/Jakarta').format("dddd,h,A").split(",");
    let dateOut;
    console.log(hour);
    if (am_pm == 'AM'){
      dateOut = `Pagi`;
    } else {
      if (hour == 12 || hour < 6) {
        dateOut = `Siang`;
      } else {
        dateOut = `Malam`;
      }
    }
  
    return setDays(dateOut);
  };

  useEffect(() => {
    getDays();
  }, []);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(${Image2})`,
      }}
    >
      <div>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal">Selamat {days},</span>
          <span className="block">Ust. {(user.name).toUpperCase()}</span>
        </h4>
        <p className="text-sm text-white font-normal">Selamat datang di Manjemen Pesantren</p>
      </div>
    </div>
  );
};

export default CardWelcome;
