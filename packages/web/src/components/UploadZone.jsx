import React from "react";
import { Center } from "@chakra-ui/react";
export default function UploadZone({ img }) {
  return (
    <Center
      h="30vh"
      bgImage={`url('${img}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      p={[5, 10, 50, 100]}
    ></Center>
  );
}
