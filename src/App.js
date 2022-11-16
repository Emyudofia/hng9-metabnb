import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ConnectModal from './components/ConnectModal';

 export function App() {
	return (
		<BrowserRouter>
		<div className="bg-white min-h-screen">
			<NavBar>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/place-to-stay" element={<PlaceToStay />} />
					<Route path="*" element={<Home />} />
				</Routes>
				<Footer />
				<ConnectModal />
			</NavBar>
		</div>
		</BrowserRouter>
	);
}

export default App;