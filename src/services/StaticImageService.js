import { APIConstants } from "../constants";
const getFlagIcon = (
  code='VN', 
  style=APIConstants.COUNTRY_FLAGS.STYLE_FLAG.flat, 
  size=APIConstants.COUNTRY_FLAGS.SIZE_FLAG[64]) =>
  `${APIConstants.COUNTRY_FLAGS.URL_FLAG}/${code}/${style}/${size}.png`;

export default {getFlagIcon}