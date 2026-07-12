import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import recog from '../../assets/images/recog.jpg';

export const MeaningRecognition = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="py-32 lg:py-72">
        {/* 
          Strengthening Recognition: The emotional center.
          Reduced visual competition entirely. One unforgettable quiet frame.
          Massive whitespace separates the sentences, demanding a long pause.
        */}
        <div className="flex flex-col items-center text-center">
          
          <div className="meaning-recognition-text mb-32 lg:mb-64 max-w-2xl mx-auto">
            <Text variant="body" className="text-2xl lg:text-3xl leading-loose font-light opacity-90">
              We do not preserve the cloth because it is beautiful.
            </Text>
          </div>
          
          <div className="meaning-recognition-visual aspect-square w-48 lg:w-64 shadow-sm rounded-sm opacity-95 mb-32 lg:mb-64 overflow-hidden">
            <img loading="lazy" src={recog} alt="Connection" className="w-full h-full object-cover" />
          </div>
          
          <div className="meaning-recognition-text max-w-2xl mx-auto">
            <Text variant="body" className="text-2xl lg:text-3xl leading-loose font-light opacity-90">
              We preserve the cloth because it connects us to each other.
            </Text>
          </div>

        </div>
      </Container>
    </div>
  );
});

MeaningRecognition.displayName = 'MeaningRecognition';
