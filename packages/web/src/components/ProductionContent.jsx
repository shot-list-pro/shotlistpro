import {
  Center,
  Box,
  VStack,
  Heading,
  Textarea,
  Divider,
  EditablePreview,
} from "@chakra-ui/react";

import CardList from "./CardList";
export default function ProductionContent({ production }) {
  return (
    <Box px={[5, 10, 50, 100]}>
      <VStack
        paddingTop={8}
        spacing={8}
        w="100%"
        maxW="80em"
        align={[null, null, null, "start"]}
      >
        <Heading as="h2" size="lg">
          Synopsis:
        </Heading>
        <Textarea
          m={0}
          placeholder={production.brief}
          size="lg"
          resize="vertical"
          variant="filled"
          value={production.brief}
          h={180}
        />

        <Heading
          as="h2"
          size="lg"
          w="full"
          borderBottom="solid white 1px"
          paddingBottom={2}
        >
          Cast & Crew:
        </Heading>
        <CardList people={production.people} />
        <Heading
          as="h2"
          size="lg"
          w="full"
          borderBottom="solid white 1px"
          paddingBottom={2}
        >
          Scenes:
        </Heading>
        {/* <CardList cards={production.scenes} /> */}
        <Heading
          as="h2"
          size="lg"
          w="full"
          borderBottom="solid white 1px"
          paddingBottom={2}
        >
          Shots:
        </Heading>
        {/* <CardList cards={production.shots} /> */}
      </VStack>
    </Box>
  );
}
