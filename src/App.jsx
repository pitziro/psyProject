import { BrowserRouter, Route, Routes} from 'react-router-dom';

import aStyle from './App.module.css'

// import Navbar from './components/top/Navbar'
import Footer from './components/bottom/Footer'

import Welcome from '../src/pages/Welcome'
import Equipo from '../src/pages//Equipo';
import Nosotros from '../src/pages/Nosotros';
import Servicios from '../src/pages/Servicios';
import Contacto from '../src/pages/Contacto';
import NavbarB from './components/top/NavbarB';
import Navbar from './components/top/Navbar';

function App() {
	return (
		<div className={aStyle.App}>
			<BrowserRouter>
				<Navbar/>
                {/* <NavbarB/> */}

				<div className={aStyle.zonamain}>
				<Routes>
					<Route path="/" element={<Welcome/>} />
					<Route exact path="/nosotros" element={<Nosotros/>} />
					<Route exact path="/equipo" element={<Equipo/>} />
					<Route exact path="/servicios" element={<Servicios/>} />
					<Route exact path="/contacto" element={<Contacto/>} />
				</Routes>
				</div>
				
				<Footer/>
			</BrowserRouter>
		</div>
	)
}

export default App
