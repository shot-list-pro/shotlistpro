import {
  SimpleGrid,
  Box,
  AspectRatio,
  Image,
  Spacer,
  HStack,
} from "@chakra-ui/react";

export default function CardList({ people }) {
  console.log(people);
  return (
    <SimpleGrid w="full" minChildWidth="100px" spacing={4}>
      {people &&
        people.map(person => {
          return (
            <Box bgColor="white" color="black" p={8}>
              {person.name}
            </Box>
          );
        })}
    </SimpleGrid>
  );
}
