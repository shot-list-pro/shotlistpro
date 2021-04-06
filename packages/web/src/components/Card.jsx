import {
  Box,
  HStack,
  AspectRatio,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function Card({ imgURL, title, subtitle }) {
  return (
    <Box bgColor="white" color="black" p={8}>
      <AspectRatio>
        <Image src={imgURL}></Image>
      </AspectRatio>
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </Box>
  );
}
