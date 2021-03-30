import {
  SimpleGrid,
  Box,
  AspectRatio,
  Image,
  Spacer,
  HStack,
} from "@chakra-ui/react";

export default function ScenesList({ scenes }) {
  return (
    <SimpleGrid w="full" minChildWidth="100px" spacing={4}>
      {scenes &&
        scenes.map(scene => {
          return (
            <Box bgColor="white" color="black" p={8}>
              {scene.location}
            </Box>
          );
        })}
    </SimpleGrid>
  );
}
