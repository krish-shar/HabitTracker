"use client";
    import {
        Box,
        Flex,
        Text,
        IconButton,
        Button,
        Stack,
        Collapse,
        useColorModeValue,
        useBreakpointValue,
        useDisclosure,
    } from '@chakra-ui/react';
    import { HamburgerIcon, CloseIcon, ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';
    import { useUser, UserButton } from '@clerk/nextjs';
    
    export default function Navbar() {
        const { isOpen, onToggle } = useDisclosure();
        
        const routes = {
            "Exercises": "/exercises",
            "Home": "/",
            "Mindfulness": "/mindfulness",
          };
          
        const user = useUser();

        

        return (
        <Box>
            <Flex
            bg="#10364B"
            color={useColorModeValue('gray.600', 'white')}
            maxH="45px"
            minH="45px"
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderTop={1}
            borderBottom={1}
            borderStyle="solid"
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align="center"
            >
            <Flex
                flex={1}
                ml={-2}
                display={{ base: 'flex', md: 'none' }}
            >
                <IconButton
                onClick={onToggle}
                icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                variant="ghost"
                aria-label="Toggle Navigation"
                />
            </Flex>
            <Flex flex={1} justify="center">
                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                <DesktopNav />
                </Flex>
            </Flex>
            </Flex>
    
            <Collapse in={isOpen} animateOpacity>

            </Collapse>
        </Box>
        );
    }
    
    const DesktopNav = () => {
        const linkColor = 'white';
        const linkHoverColor = useColorModeValue('gray.800', 'white');
    
        return (
        <Stack direction="row" spacing={4} align="center">
            {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
                <Text
                as="a"
                p={2}
                href={navItem.href || '/'}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                }}
                textAlign="center"
                paddingX={5} // Add padding between labels
                >
                {navItem.label}
                </Text>
            </Box>
            ))}
        </Stack>
        );
    }
    


    const NAV_ITEMS = [
        {
        label: 'Exercises',
        href: '/exercises',
        
        children: [
            
        ],
        },
        {
        label: 'Dashboard',
        href: '/dashboard',
        children: [
          
        ],
        },
        {
        label: 'Mindfulness',
        href: '/mindfulness',
        },
    ];
    