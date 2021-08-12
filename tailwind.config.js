/*
 * @Author: Snow
 * @Date: 2021-08-12 23:36:49
 * @LastEditTime: 2021-08-12 23:46:26
 * @LastEditors: Snow
 * @Description: 
 * @FilePath: /my-vue-app/tailwind.config.js
 */
const colors = require('windicss/colors')
const typography = require('windicss/plugin/typography')
const scrollbar = require('@windicss/plugin-scrollbar')

module.exports = {
    darkMode: 'class',
    plugins: [typography, scrollbar],
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                custom: {
                    DEFAULT: '#10B981',
                    light: '#D1FAE5'
                }
            },
        },
    },
};