import { useLanguage } from '../contexts/LanguageContext';
import Stack from './Stack';
import indofla from '../assets/images/indofla.webp';
import engflag from '../assets/images/engflag.webp';

export function Header() {
  const { setLanguage } = useLanguage();

  const handleLanguageSwitch = (topCardId: number) => {
    // In our cards array:
    // id: 1 is indofla (Indonesian)
    // id: 2 is engflag (English)
    if (topCardId === 1) {
      setLanguage('id');
    } else {
      setLanguage('en');
    }
  };

  const cards = [
    <img key="id" src={indofla} alt="Indonesian" className="w-full h-full object-cover rounded-md" />,
    <img key="en" src={engflag} alt="English" className="w-full h-full object-cover rounded-md" />
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center pointer-events-none">
      <div className="font-light tracking-widest text-sm uppercase pointer-events-auto mix-blend-difference">
        TENUNA: The Living Threads
      </div>
      
      <nav aria-label="Language selection" className="pointer-events-auto cursor-pointer">
        <button 
          aria-label="Switch language"
          aria-haspopup="true"
          aria-expanded="false"
          style={{ width: 40, height: 28, display: 'block', background: 'transparent', border: 'none', padding: 0 }}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
        >
          <Stack 
            cards={cards}
            randomRotation={true}
            sensitivity={20}
            sendToBackOnClick={true}
            onTopCardChange={handleLanguageSwitch}
          />
        </button>
      </nav>
    </header>
  );
}
