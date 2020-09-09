import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { Wrapper } from './AdvertItemStyle';

function AdvertItem() {
  return (
    <Wrapper>
      <div className="mb1">
        <div className="c1 border-radius">
          <div className="relative">
            <div className="c2">
              <div className="c3">
                <Carousel
                  images={[
                    'https://a0.muscache.com/im/pictures/fda0acbe-f470-47e9-bd12-0837e1a71676.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/0636eef8-6adf-4c25-97fe-8c4b09160e12.jpg?aki_policy=medium',
                    'https://a0.muscache.com/im/pictures/05a2e59e-5e05-4910-befb-df385b080ca8.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/c99bd761-4227-40c4-b009-cfe04142525b.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/1397831d-cbf2-46a0-befc-8c3c39d1ba67.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/908bd76c-d937-4e9c-a7b9-f82b23dd9274.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/9f7ef8b9-3446-4c52-bbb3-1722154c2da3.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/7f0d28e2-7b71-4fae-ae25-6f2b718ea355.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/52976ac9-a0d8-4d94-93ee-d6c320c38300.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/550b5b6f-dd83-4a23-bf0e-0a65523ef9e5.jpg?aki_policy=large',
                    'https://a0.muscache.com/im/pictures/554745aa-3e2d-4bc2-afaa-332e5a568139.jpg?aki_policy=large',
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>sdadasdsd</div>
      <div>sdadasdsd</div>
      <div>sdadasdsd</div>
      <div>sdadasdsd</div>
    </Wrapper>
  );
}

export default AdvertItem;
