import { Box, VStack, Heading, Textarea } from "@chakra-ui/react";

import PeopleList from "./PeopleList";
import ScenesList from "./ScenesList";
import ShotsList from "./ShotsList";

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
        <PeopleList people={production.people} />
        <Heading
          as="h2"
          size="lg"
          w="full"
          borderBottom="solid white 1px"
          paddingBottom={2}
        >
          Scenes:
        </Heading>
        <ScenesList scenes={production.scenes} />
        <Heading
          as="h2"
          size="lg"
          w="full"
          borderBottom="solid white 1px"
          paddingBottom={2}
        >
          Shots:
        </Heading>
        <ShotsList shots={production.shots} />
      </VStack>
    </Box>
  );
}
