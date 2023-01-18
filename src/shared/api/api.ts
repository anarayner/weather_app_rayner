import axios from 'axios';
import { __API__ } from '../consts/consts';

export const $api = axios.create({
    baseURL: __API__,
});
