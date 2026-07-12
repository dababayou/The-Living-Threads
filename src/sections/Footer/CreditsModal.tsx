import { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Heading } from '../../components/typography';
import { useLanguage } from '../../contexts/LanguageContext';

interface CreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CreditItem {
  name: string;
  url: string;
  details?: {
    description?: { text: string; url: string };
    owner?: string;
    website?: { text: string; url: string };
    permission?: string;
  };
}

const creditsData: CreditItem[] = [
  { name: 'Indonesia Travel', url: 'https://www.indonesia.travel/' },
  { 
    name: 'Natural Dye Store', 
    url: 'https://naturaldyestore.com/',
    details: {
      description: { 
        text: 'Nature Materials – Organic Pigment Settling in Water', 
        url: 'https://blog.naturaldyestore.com/wp-content/uploads/2025/09/890544_40832ab1e09045e8b63bd40339befa2cmv2-1024x768.webp' 
      },
      owner: 'Suzanne Dekel',
      website: { text: 'Natural Dye Store', url: 'https://naturaldyestore.com/' },
      permission: 'Used with permission.'
    }
  },
  { name: 'Almanusia', url: 'https://almanusia.squarespace.com' },
  { name: 'Sino Comfort', url: 'https://sinocomfort.com/id/' },
  { name: 'Gap Inc.', url: 'https://www.gapinc.com/' },
  { name: 'Sabahar', url: 'https://sabahar.com/' },
  { name: 'Contigo en la Distancia (Cultura Mexico)', url: 'https://contigoenladistancia.cultura.gob.mx/' },
  { name: 'Detik News', url: 'https://news.detik.com/' },
  { name: 'Montecristo Magazine', url: 'https://montecristomagazine.com/' },
  { name: 'Design Hotels', url: 'https://www.designhotels.com/' },
  { name: 'Antique Singing Bowls', url: 'https://antiquesingingbowls.com/' },
  { name: 'Pemetaan Budaya JKKN', url: 'https://pemetaanbudaya.jkkn.gov.my/' },
  { name: 'eBay', url: 'https://www.ebay.com/' },
  { name: 'Suara / Freepik', url: 'https://suara.com/' },
  { name: 'Yudi Umbu Rawambaku', url: 'https://yudiumburawambaku.wordpress.com/' },
  { name: 'CERAC UNLPam', url: 'https://cerac.unlpam.edu.ar/' },
  { name: 'Bangsa Tausug', url: 'https://www.facebook.com/BangsaTausugAllaroundtheworld' },
  { name: 'Wahana Visi', url: 'https://wahanavisi.org/' },
  { name: 'Explore Sumba', url: 'https://exploresumba.com/' },
  { name: 'We Like Bali', url: 'https://welikebali.com/' },
  { name: 'Jurnal Flores', url: 'https://www.jurnalflores.co.id/' },
  { name: 'Lopo Tenun', url: 'https://lopotenun.com/' }
];

function CreditRow({ credit }: { credit: CreditItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = !!credit.details;

  return (
    <li className="flex flex-col items-start border-b border-border/10 pb-3 last:border-0 last:pb-0">
      <div 
        className={`flex items-center justify-between w-full ${hasDetails ? 'cursor-pointer group select-none' : ''}`}
        onClick={() => hasDetails && setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-mengkudu/50 shrink-0" />
          {hasDetails ? (
            <span className="text-text-muted group-hover:text-text transition-colors text-sm truncate font-medium">
              {credit.name}
            </span>
          ) : (
            <a 
              href={credit.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text hover:underline transition-colors text-sm truncate font-medium"
              title={credit.url}
              onClick={(e) => e.stopPropagation()}
            >
              {credit.name}
            </a>
          )}
        </div>
        
        {hasDetails && (
          <div 
            className="p-1 group-hover:bg-border/20 rounded-md transition-colors text-text-muted"
            aria-hidden="true"
          >
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        )}
      </div>
      
      {/* Detailed Attribution Dropdown */}
      {hasDetails && isExpanded && (
        <div className="pl-4.5 w-full mt-3 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1.5 p-3 bg-background/30 rounded-md border border-border/20 text-xs text-text-muted/80">
            {credit.details?.description && (
              <p>
                <span className="font-semibold text-text-muted">Image:</span>{' '}
                <a 
                  href={credit.details.description.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-text underline decoration-border/50 underline-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {credit.details.description.text}
                </a>
              </p>
            )}
            {credit.details?.owner && (
              <p><span className="font-semibold text-text-muted">Owner:</span> {credit.details.owner}</p>
            )}
            {credit.details?.website && (
              <p>
                <span className="font-semibold text-text-muted">Courtesy of:</span>{' '}
                <a 
                  href={credit.details.website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text underline decoration-border/50 underline-offset-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  {credit.details.website.text}
                </a>
              </p>
            )}
            {credit.details?.permission && (
              <p className="italic mt-1 text-mengkudu/80">{credit.details.permission}</p>
            )}
          </div>
        </div>
      )}
    </li>
  );
}

export function CreditsModal({ isOpen, onClose }: CreditsModalProps) {
  const { t } = useLanguage();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-surface border border-border/50 shadow-2xl rounded-sm flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center p-6 border-b border-border/30">
          <Heading level={3} className="text-xl lg:text-2xl font-light m-0">
            {t('Image Credits')}
          </Heading>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-background rounded-full transition-colors group"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-text-muted group-hover:text-text transition-colors" />
          </button>
        </div>
        
        <div className="overflow-y-auto p-6 sm:p-8" data-lenis-prevent="true">
          <p className="text-text-muted text-sm mb-8 leading-relaxed">
            {t('The beautiful imagery featured in this documentary project was sourced from the following creators, platforms, and organizations. We deeply appreciate their work in documenting the heritage of Sumba Ikat.')}
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {creditsData.map((credit, index) => (
              <CreditRow key={index} credit={credit} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
