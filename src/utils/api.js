import axios from 'axios';
import { UPLOAD_API } from '../config/config';

export default {
    uploadImage: (data) => axios.post(UPLOAD_API, data),
};
