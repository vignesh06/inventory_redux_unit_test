import axios from 'axios';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import history from "../history";
const HTTPService = async (url, method, data) => {
  let response=await axios({
      method,
      url,
      data,
      headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${localStorage.getItem(localstorageConstants.Token)}`}
      // headers: { 'Content-Type': 'application/json'}
    }).then(function(response) {
    return response.data;
    })
    .catch(function(apiError) {
    //      localStorage.setItem(
    //   localstorageConstants.IsLoggedIn,
    // false
    // )
    //   if (apiError.status === 500) {
    //     history.push('/internal-server-error')
    //   }else{
    //     history.push("/internal-server-error")
    //   }
    });
    return response;
};

export default HTTPService