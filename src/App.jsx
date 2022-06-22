import './App.css'

import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

import Footer from './components/bottom/Footer'
import Welcome from './components/main/Welcome'
import Navbar from './components/top/Navbar'
import Equipo from './components/main/Equipo';
import Nosotros from './components/main/Nosotros';
import Servicios from './components/main/Servicios';
import Contacto from './components/main/Contacto';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>

				<div id="zonamain">
				<Routes>
					<Route path="/" element={<Welcome/>} />
					<Route exact path="/inicio" element={<Navigate to="/" />}/>
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
