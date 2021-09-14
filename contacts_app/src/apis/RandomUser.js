import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export default axios.create({
    baseURL: 'https://randomuser.me/api/',
    params: {}
});