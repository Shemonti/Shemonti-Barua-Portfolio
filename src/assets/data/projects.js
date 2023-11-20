import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/Activity.jpg';
import UTrackerImg from '../images/overflow.jpg';
import GreenCtgImg from '../images/Number.png';
import CoinTrackerImg from '../images/Github.png';
import CavinImg from '../images/frolic.png';
import WtImg from '../images/wther.jpg';
import DDscnetImg from '../images/brest1.jpg';
import EamlpImg from '../images/brest2.jpg';
import SnapImg1 from '../images/snp.png';
import FdImg from '../images/fd.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Weather Prediction',
    desc:
      'A Machine Learning model using Python and KNeighborsClassifier to predict rainfall by analyzing different weather condition like Humidity,Cloud,Temperature.',
    img: WtImg,
    link: 'https://github.com/Shemonti/Project_weather_prediction',
  },
  {
    id: uuidv4(),
    name: 'Human activity Recognition With smartphone',
    desc:
      'A Machine Learning model using Python and Logistic Regression to classify activities into one of the six activities performed.',
    img: ProjectImg,
    link:
      'https://github.com/Shemonti/Project-Human_Activity_Recognition_Using_Smartphone',
  },
  {
    id: uuidv4(),
    name: 'Stack Overflow Developer Survey Analysis',
    desc:
      'Data analysis and visualization of Stack Overflow Developer using Machine Learning.',
    img: UTrackerImg,
    link: 'https://github.com/Shemonti/Project-Stack-overflow-survey',
  },
  {
    id: uuidv4(),
    name:
      'Invasive Ductal Carcinoma Detection In Breast Histology Images Using Dilated Depthwise Separable Convolutions',
    desc:
      'A Deep Learning model using Python to classify Breast Cancer from images.',
    img: DDscnetImg,
    link: 'https://github.com/Shemonti/DDSCNet',
  },
  {
    id: uuidv4(),
    name:
      'Breast Cancer Image Classification Using External Attention Multilayer Perceptron Based Transformer',
    desc:
      'Diagnosed Breast Cancer Images from Breast Histopathology Images and BreakHis Datasets using self-attention based transformer and External attention based transformer and then comparison is shown.',
    img: EamlpImg,
    link: 'https://github.com/Shemonti/EAMLP',
  },
  {
    id: uuidv4(),
    name: 'Guess_The_Number',
    desc:
      'A number guessing game where people guess the number within three time.it is mainly a javascript project.',
    img: GreenCtgImg,
    link: 'https://shemonti.github.io/Guess_The_Number/',
  },
  {
    id: uuidv4(),
    name: 'Github_Finder',
    desc:
      'A javascript project where people can find the profile of github user and their details.',
    img: CoinTrackerImg,
    link: 'https://shemonti.github.io/github_finder/',
  },
  {
    id: uuidv4(),
    name: 'Facedetection',
    desc: 'An openCV project using Pyhton.',
    img: FdImg,
    link: 'https://github.com/Shemonti/facedetection',
  },
  {
    id: uuidv4(),
    name: 'Frolic_City',
    desc:
      'An entertainment place where people can pass their free time by listening music , reading books and what not.',
    img: CavinImg,
    link: 'https://shemonti.github.io/',
  },
  {
    id: uuidv4(),
    name: 'Snapbook-Frontend',
    desc:
      'This is the Frontend part of Mern stack Project which is done by using ReactJS.',
    img: SnapImg1,
    link: 'https://github.com/Shemonti/SnapBook',
  },
  {
    id: uuidv4(),
    name: 'Snapbook-Backend',
    desc:
      'This is the Backend part of Mern stack Project which is done by using MongoDB and NodeJs.',
    img: SnapImg1,
    link: 'https://github.com/Shemonti/Snapbook_server',
  },
];

export default projects;
