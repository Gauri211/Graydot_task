import React, { useState } from 'react';
import { Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Button, Text } from '@chakra-ui/react';

const Slide = () => {
  const [sliderValue, setSliderValue] = useState(50); // Initial slider value
  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleUpdateClick = () => {
    setIsReadOnly(!isReadOnly);
  };

  return (
    <Flex direction="column">
        <Flex>
      <Slider
        defaultValue={sliderValue}
        value={sliderValue}
        onChange={(value) => setSliderValue(value)}
        // isReadOnly={isReadOnly}
        w="200px"
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      <Text fontWeight="semibold" ml='12%'>
        {sliderValue}%
      </Text>
      </Flex>

      {/* <Button onClick={handleUpdateClick} mt={4}>
        {isReadOnly ? 'Edit' : 'Update'}
      </Button> */}
    </Flex>
  );
};

export default Slide;
