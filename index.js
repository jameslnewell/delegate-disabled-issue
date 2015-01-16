var delegate = require('delegate');

 delegate.bind(document.querySelector('form'), 'button', 'click', function(e){
  console.log('clicked');
 });