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
    
    export default function Navbar() {
        const { isOpen, onToggle } = useDisclosure();
    
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
            <MobileNav />
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
                href={navItem.href ?? '#'}
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
    
    const MobileNav = () => {
        return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
        );
    }
    
    const MobileNavItem = ({ label, children, href }) => {
        const { isOpen, onToggle } = useDisclosure();
    
        return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
            py={2}
            as="a"
            href={href ?? '#'}
            justifyContent="space-between"
            alignItems="center"
            _hover={{
                textDecoration: 'none',
            }}
            >
            <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                {label}
            </Text>
            {children && (
                <ChevronDownIcon
                transition="all .25s ease-in-out"
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
                />
            )}
            </Box>
        </Stack>
        );
    }
    
    const NAV_ITEMS = [
        {
        label: 'Exercises',
        children: [
            {
            label: 'Explore Design Work',
            subLabel: 'Trending Design to inspire you',
            href: '#',
            },
            {
            label: 'New & Noteworthy',
            subLabel: 'Up-and-coming Designers',
            href: '#',
            },
        ],
        },
        {
        label: 'Home',
        children: [
            {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
            },
            {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
            },
        ],
        },
        {
        label: 'Mindfulness',
        href: '#',
        },
    ];
    