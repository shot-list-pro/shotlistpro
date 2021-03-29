import { Box, HStack, Spacer, Text } from "@chakra-ui/react";

export default function TitleBar({ production }) {
  console.log(production);

  const dateShort = production.startDate;

  return (
    <Box>
      <HStack px={[5, 10, 50, 100]} h={50} bgColor="black">
        <Text color="white">{production.name}</Text>
        <Spacer></Spacer>
        <Text color="white">{dateShort && dateShort.slice(0, 16)}</Text>
      </HStack>
    </Box>
  );
}
