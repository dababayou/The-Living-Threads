import { Section, Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';
import { useLanguage } from '../../contexts/LanguageContext';
import footbc from '../../assets/images/footbc.png';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Section id="footer" className="relative pt-32 lg:pt-48 pb-16 text-text overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={footbc} 
          alt="Footer background" 
          className="w-full h-full object-cover object-center opacity-100" 
        />
        {/* Gradient overlay to ensure text readability and blend with the dark/light theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-background/60"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-32 relative z-10">
          <Heading level={2} className="text-3xl lg:text-4xl mb-8 font-light">
            The Living Threads
          </Heading>
          <Text variant="body" className="text-lg text-text-muted italic mb-12">
            A documentary on the enduring craft of Sumba Ikat.
          </Text>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 cursor-pointer transition-opacity hover:opacity-70 border-none bg-transparent"
          >
            <span className="text-xs uppercase tracking-widest text-text-muted">{t('Return to Source')}</span>
            <div className="h-16 flex items-start justify-center">
              <div className="w-[1px] h-12 bg-text-muted/50 group-hover:h-16 transition-all duration-300"></div>
            </div>
          </button>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-xs tracking-wide text-text-muted uppercase relative z-10">
          <div>© {new Date().getFullYear()} TENUNA: The Living Threads</div>
          <div className="flex gap-8">
            <span className="hover:text-text cursor-pointer transition-colors">{t('Instagram')}</span>
            <span className="hover:text-text cursor-pointer transition-colors">{t('Exhibition')}</span>
            <span className="hover:text-text cursor-pointer transition-colors">{t('Credits')}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
