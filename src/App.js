import './App.css';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';
import { motion } from 'framer-motion';

function App() {
  return (
    <HashRouter>
    <motion.div className="App" initial={{width:0}} animate={{width:"100%"}} exit={{opacity:0}}>
      <AnimatedRoutes/>
    </motion.div>
    </HashRouter>
  );
}

export default App;
