import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	</BrowserRouter>
)
