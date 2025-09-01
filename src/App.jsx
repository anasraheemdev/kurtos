import React from 'react';
import { BakeryHero } from './Components/BakeryHero';
import BakeryLayout from './Components/BakeryLayout';
import AboutUs from './Components/AboutUs';
import BestSellers from './Components/BestSellers';
import Pricing from './Components/Pricing';
import FAQSection from './Components/FAQSection';
import BakeryHeader from './Components/BakeryHeader';
import BakeryContact from './Components/BakeryContact';
import BakeryFooter from './Components/BakeryFooter';
import KurtoosGroqChatbot from './Components/GroqChatbot';
export const App = () => {
  return (
    <>
    <BakeryHeader/>
    <BakeryHero/>
    <BakeryLayout/>
    <AboutUs/>
    <BestSellers/>
    <Pricing/>
    <FAQSection/>
    <BakeryContact/>
    <BakeryFooter/>
    <KurtoosGroqChatbot/>
    </>
  )
}

export default App;