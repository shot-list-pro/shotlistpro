import { Box, SimpleGrid, Checkbox, VStack } from "@chakra-ui/react";

import React from "react";

export default function ShotsList({ shots }) {
  return (
    <SimpleGrid w="full" minChildWidth="100px" spacing={4}>
      {shots &&
        shots.map(shot => {
          return (
            <VStack>
              <Box bgColor="white" color="black" p={8}>
                {shot.shotType}
              </Box>
              <Checkbox colorScheme="facebook" size="lg">
                Done
              </Checkbox>
            </VStack>
          );
        })}
    </SimpleGrid>
  );
}
