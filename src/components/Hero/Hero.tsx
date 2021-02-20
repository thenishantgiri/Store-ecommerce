import { Box,
    Center,    
    Heading, 
    Link, 
    List, 
    ListItem, 
    SimpleGrid,
    useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";
import * as React from "react";

const Hero = (): React.ReactElement => {
 return (
    <Box 
    as="header" 
    position="relative"
    >
        <Center 
        as="article"
        display="flex"
        flexDirection="column"
        h="55vh"
        >
        <SimpleGrid 
        bottom="0"
        columns={[2, 2, 2, 3]}
        left="0"
        position="absolute"
        right="0"
        spacing={8}
        top="0"
        zIndex="-10"
        >
            <Box bg={useColorModeValue("white", "gray.800")} />
            <Box bg={useColorModeValue("white", "gray.800")} />
            <Box bg={useColorModeValue("white", "gray.800")} />
            <Box 
            bg={useColorModeValue("pink.50", "gray.700")}
            position="relative"
            opacity="0.3"
            >
                <NextImage
                alt=""
                src="/coffee-product-8.webp"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                />
            </Box>
            <Box bg={useColorModeValue("white", "gray.800")} />
            <Box 
            bg={useColorModeValue("pink.50", "gray.700")} 
            position="relative"
            opacity="0.3"
            >
                <NextImage
                alt=""
                src="/coffee-product-4.webp"
                layout="fill"
                objectFit="cover"
                />
            </Box>
        </SimpleGrid>
        <Heading 
        as="h1"
        fontWeight="400"
        mx="auto"
        mb={8}
        textAlign="center"
        textTransform="uppercase"
        w="90vw"
        >
        Bringing you the best coffee from all over the world
        </Heading>
            <List 
            alignItems="center"
            display={["none", "none", "flex"]}
            flexDirection="row"
            justifyContent="space-evenly"
            textAlign="center"
            my={8}
            w="75vw"
            >
                <ListItem 
                
                bg={useColorModeValue("white", "gray.600")}
                border="1px solid pink"
                borderRadius="md"
                fontWeight="700"
                py={1}
                px={2}
                textTransform="uppercase"
                w="10rem"
                >
                    <NextLink 
                    href="/store"
                    passHref
                    >
                        <Link>
                            Coffee Beans
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem
                bg={useColorModeValue("white", "gray.600")}
                border="1px solid pink"
                borderRadius="md"
                fontWeight="700"
                py={1}
                px={2}
                textTransform="uppercase"
                w="10rem"
                >
                    <NextLink 
                    href="/store"
                    passHref
                    >
                        <Link>
                            Ground Coffee
                        </Link>
                    </NextLink>
                </ListItem>
                <ListItem
                border="1px solid pink"
                bg={useColorModeValue("white", "gray.600")}
                borderRadius="md"
                fontWeight="700"
                py={1}
                px={2}
                textTransform="uppercase"
                w="10rem"
                >
                    <NextLink 
                    href="/store"
                    passHref
                    >
                        <Link>
                            Mugs & Cups
                        </Link>
                    </NextLink>
                </ListItem>
            </List>
            <NextLink 
            href="/store"
            passHref
            >
                <Link
                bg="pink.400"
                color="white"
                borderRadius="md"
                fontWeight="700"
                py={3}
                px={6}
                textAlign="center"
                textTransform="uppercase"
                w="12rem">
                    Shop All Items
                </Link>
            </NextLink>
        </Center>
    </Box>
 );
};

export default Hero;