import layout from "./layout";
import city from './api/zone/city/citySlice';
import province from './api/zone/province/provinceSlice';
import village from './api/zone/village/villageSlice';
import district from './api/zone/district/districtSlice';
import searchKK from './api/searchkk/searchkkSlice';
import registration from './api/registration/registrationSlice';

import auth from "./api/auth/authSlice";

const rootReducer = {
  auth,
  layout,
  province,
  city,
  district,
  village,
  searchKK,
  registration,
};
export default rootReducer;
