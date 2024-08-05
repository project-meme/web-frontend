import './App.css';
import Router from './Routes';
import styles from './BottomNav.module.css'
import { useMediaQuery } from "react-responsive"

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)"
  });
  return (
    <div className='App'>
      <div className={isMobile ? styles.flexContainer : styles.flexContainerPc}>
        <Router/>
      </div>
    </div>
  );
}

export default App;
