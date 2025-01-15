import layout from "./layout";
import city from './api/zone/citySlice';
import province from './api/zone/provinceSlice';
import village from './api/zone/villageSlice';
import district from './api/zone/districtSlice';

const rootReducer = {
  layout,
  province,
  city,
  district,
  village
};
export default rootReducer;
