import { forwardRef } from 'react';
import { Container } from '../../components/layout';
import { Text } from '../../components/typography';
import kapassImg from '../../assets/images/kapass.jpg';
import tintaImg from '../../assets/images/tinta.jpg';
import jemurImg from '../../assets/images/jemur.jpg';

export const NatureMaterials = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Container className="mb-32 lg:mb-48">
        {/* 
          Increased scale variation and integrated captions.
          Flow never stops; whitespace is intentional.
        */}

        {/* Block 1: Large Portrait */}
        <div className="nature-material-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32 lg:mb-48">
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
             <img src={kapassImg} alt="Unspun fiber reaching toward light" className="nature-material-image w-full aspect-[2/3] object-cover rounded-sm" />
             {/* Caption integrated closely, editorial style */}
             <div className="nature-material-caption absolute bottom-0 left-0 lg:-left-8 bg-background/95 backdrop-blur-sm px-6 py-4 border-l-2 border-text max-w-[200px]">
               <Text variant="caption" className="text-text-muted">
                 Unspun fiber reaching toward light.
               </Text>
             </div>
          </div>
          
          <div className="nature-material-text lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
             <Text variant="body" className="text-xl leading-relaxed lg:mt-32">
               The harvest is an act of patience. Roots must mature in the dark, and leaves must drink the rain before they yield true color.
             </Text>
          </div>
        </div>

        {/* Block 2: Wide Landscape, right-aligned visual */}
        <div className="nature-material-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-32 lg:mb-48">
          <div className="nature-material-text lg:col-span-4 lg:col-start-2 order-2 lg:order-1 lg:text-right relative z-10">
             <Text variant="body" className="text-xl leading-relaxed">
               Pigment is extracted through quiet destruction. Bark is crushed, leaves are steeped, and hidden tones are coaxed to the surface.
             </Text>
          </div>
          
          <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2 relative">
             <img src={tintaImg} alt="Organic pigment settling in water" className="nature-material-image w-full aspect-[16/9] lg:aspect-[21/9] object-cover rounded-sm" />
             <div className="nature-material-caption absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 border-r-2 border-text">
               <Text variant="caption" className="text-text-muted">
                 Organic pigment settling in water.
               </Text>
             </div>
          </div>
        </div>

        {/* Block 3: Dense Square, tight cropping */}
        <div className="nature-material-block grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 relative">
             <img src={jemurImg} alt="Sunlight curing the deep earth dyes" className="nature-material-image w-full aspect-square object-cover rounded-sm" />
             <div className="nature-material-caption absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm px-4 py-2 border-b-2 border-text">
               <Text variant="caption" className="text-text-muted">
                 Sunlight curing the deep earth dyes.
               </Text>
             </div>
          </div>
          
          <div className="nature-material-text lg:col-span-4 lg:col-start-8 order-1 lg:order-2">
             <Text variant="body" className="text-xl leading-relaxed">
               Time acts as the final ingredient. The natural elements must bind, oxidize, and age before the true vibrancy emerges from the fibers.
             </Text>
          </div>
        </div>
      </Container>
    </div>
  );
});

NatureMaterials.displayName = 'NatureMaterials';
