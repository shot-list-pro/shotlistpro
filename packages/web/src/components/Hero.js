import React from "react";
import {
  VStack,
  Stack,
  Center,
  Icon,
  Heading,
  Button,
  Spacer,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactComponent as SlateIcon } from "../assets/slate-icon.svg";
import { IoPersonAdd } from "react-icons/io5";
import HeroImage from "../assets/hero-image.webp";

import Modal from "./Modal.jsx";

const Hero = () => {
  return (
    <Center
      h="50vh"
      bgImage={`url('${HeroImage}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={[5, 10, 50, 100]}
    >
      <VStack
        spacing={100}
        w="100%"
        maxW="80em"
        align={[null, null, null, "start"]}
      >
        <Heading>
          Keep your film or photography projects organized with Shot List Pro!
        </Heading>
        <Buttons />
      </VStack>
    </Center>
  );
};

const Buttons = () => (
  <Stack
    w={[null, null, null, "100%"]}
    direction={["column", null, "row"]}
    align="start"
  >
    <CreateNewProductionInModalButton />

    <Spacer d={[null, null, null, null, "none"]} />
    <Button variant="primary" leftIcon={<Icon as={IoPersonAdd} boxSize={8} />}>
      Create a New Contact
    </Button>
  </Stack>
);

const CreateNewProductionModal = props => {
  return (
    <Modal {...props} header="Add Production">
      <Box h="80vh">Content</Box>
    </Modal>
  );
};

const CreateNewProductionInModalButton = () => {
  const { onOpen, ...modalProps } = useDisclosure();
  return (
    <>
      <Button
        variant="primary"
        onClick={onOpen}
        leftIcon={<Icon as={SlateIcon} boxSize={8} />}
      >
        Create a New Production
      </Button>
      <CreateNewProductionModal {...modalProps} />
    </>
  );
};

export default Hero;
