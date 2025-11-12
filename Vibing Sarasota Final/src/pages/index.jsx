import Layout from "./Layout.jsx";

import Home from "./Home";

import Hotels from "./Hotels";

import Shopping from "./Shopping";

import Beaches from "./Beaches";

import ExerciseSpots from "./ExerciseSpots";

import FoodDining from "./FoodDining";

import GolfSpots from "./GolfSpots";

import SuggestBusiness from "./SuggestBusiness";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Hotels: Hotels,
    
    Shopping: Shopping,
    
    Beaches: Beaches,
    
    ExerciseSpots: ExerciseSpots,
    
    FoodDining: FoodDining,
    
    GolfSpots: GolfSpots,
    
    SuggestBusiness: SuggestBusiness,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Hotels" element={<Hotels />} />
                
                <Route path="/Shopping" element={<Shopping />} />
                
                <Route path="/Beaches" element={<Beaches />} />
                
                <Route path="/ExerciseSpots" element={<ExerciseSpots />} />
                
                <Route path="/FoodDining" element={<FoodDining />} />
                
                <Route path="/GolfSpots" element={<GolfSpots />} />
                
                <Route path="/SuggestBusiness" element={<SuggestBusiness />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}