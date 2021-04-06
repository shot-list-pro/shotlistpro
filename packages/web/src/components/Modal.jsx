import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function Modal({ header, children, ...rest }) {
  return (
    <ChakraModal motionPreset="scale" isCentered {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{header}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}
