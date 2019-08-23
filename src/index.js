import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading.js';
import addImage from './add-image';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();

//addImage();

if(process.env.NODE_ENV === 'production'){
    console.log('production mode');
}
else if(process.env.NODE_ENV === 'development'){
    console.log('development mode');
}
