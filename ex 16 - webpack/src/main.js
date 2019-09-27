import $ from 'jquery';
import userService from './userService';
import 'font-awesome/scss/font-awesome.scss';
import './style.scss';

var users = userService.getAll();
users.forEach(function(user) {
  $('#list').append(`<li>${user.name}</li>`);
});