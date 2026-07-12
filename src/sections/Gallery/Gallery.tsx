import { Section, Container } from '../../components/layout';
import { Heading, Text } from '../../components/typography';
import CircularGallery from '../../components/ui/CircularGallery';
import { useLanguage } from '../../contexts/LanguageContext';

import car1 from '../../assets/images/car1in.jpg';
import car2 from '../../assets/images/car2.jpeg';
import car3 from '../../assets/images/car3.jpeg';
import car4 from '../../assets/images/car4.jpeg';
import car5 from '../../assets/images/car5rep.jpg';

export function Gallery() {
  const { t } = useLanguage();

  const galleryItems = [
    { image: car1, text: t('Motif Patola Ratu') },
    { image: car2, text: t('Motif Manusia') },
    { image: car3, text: t('Motif Rusa') },
    { image: car4, text: t('Motif Kuda') },
    { image: car5, text: t('Motif Kakatua') },
  ];

  return (
    <Section id="gallery" className="relative pt-32 pb-16 overflow-hidden bg-transparent">
      <Container className="relative z-10 mb-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <Text variant="caption" className="uppercase tracking-widest text-text-muted mb-4">
            {t('The Collection')}
          </Text>
          <Heading level={2} className="text-3xl lg:text-4xl mb-6 font-light">
            {t('Weave Variations')}
          </Heading>
          <Text variant="body" className="text-text-muted">
            {t('Explore the rich tapestry of Sumba Ikat motifs, each carrying profound meaning and history.')}
          </Text>
        </div>
      </Container>
      
      {/* 
        This div wraps the CircularGallery. 
        Adjust the height as needed. React Bits examples use inline styles, 
        but we use Tailwind CSS for the height.
      */}
      <div className="w-full h-[600px] relative mt-12 cursor-grab active:cursor-grabbing">
        <CircularGallery
          bend={3}
          textColor="#241813"
          borderRadius={0.05}
          scrollEase={0.02}
          items={galleryItems}
          font="italic 34px 'Cormorant Garamond'"
        />
      </div>
    </Section>
  );
}
