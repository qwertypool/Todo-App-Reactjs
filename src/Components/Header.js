import React from "react";
import {
  Box,
  IconButton,
  Spacer,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaListOl, FaFileSignature } from "react-icons/fa";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Box
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        w="100%"
        p={3}
        display="flex"
        alignItems="baseline"
      >
        <IconButton
          color="white"
          variant="filled"
          alignself="flex-start"
          fontSize="25px"
          icon={<FaFileSignature />}
        />
        <Spacer />
        <IconButton
          color="white"
          variant="filled"
          fontSize="25px"
          alignself="flex-end"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </Box>
    </HStack>
  );
}

export default Header;
