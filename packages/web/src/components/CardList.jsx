import {
  Box,
  HStack,
  AspectRatio,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";

export default function CardList({ children }) {
  return (
    <HStack w="full" spacing={4}>
      {children}
    </HStack>
  );
}
