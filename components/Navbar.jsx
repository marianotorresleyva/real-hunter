import React from 'react';
import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button, Icon, } from '@chakra-ui/react';
import { FcAbout, FcHome, FcMenu } from 'react-icons/fc';
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";


const Navbar = () => (
    <>
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem">
            <Flex align="center" mr={5}>
                <Link href="/">
                    <Box fontSize="3xl" color="blue.700" fontWeight="bold" paddingLeft={1}>
                        <Link href="/" paddingLeft="2">
                            Real Hunter
                        </Link>
                    </Box>
                </Link>
            </Flex>
            <Spacer />
            <Box display={{ base: 'none', md: 'block' }} alignItems="center" flexGrow={1}>
                <Link href="/">
                    <Button variant="link" mr={6}>
                        <FcHome /> Home
                    </Button>
                </Link>
                <Link href="/search">
                    <Button variant="link" mr={6}>
                        <BsSearch /> Search
                    </Button>
                </Link>
                <Link href="/search?purpose=for-sale">
                    <Button variant="link" mr={6}>
                        <FcAbout /> Buy Property
                    </Button>
                </Link>
                <Link href="/search?purpose=for-rent">
                    <Button variant="link" mr={6}>
                        <FiKey /> Rent Property
                    </Button>
                </Link>
            </Box>

            <Box display={{ base: 'block', md: 'none' }}>
                <Menu>
                    <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                    <MenuList>
                        <Link href="/">
                            <MenuItem icon={<FcHome />}>Home</MenuItem>
                        </Link>
                        <Link href="/search">
                            <MenuItem icon={<BsSearch />}>Search</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale">
                            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent">
                            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Flex>
    </>

)


export default Navbar