import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ["Crucial","Fundamental","Important"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max +1));
}

export default function Header() {
    let description = reactDescriptions[genRandomInt(reactDescriptions.length)];
    return (
        <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials With Mohammad</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      );
}

