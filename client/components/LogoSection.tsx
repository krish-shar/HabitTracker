"use client"
import { useState } from 'react'; // Import useState
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedLabel, setSelectedLabel] = useState(''); // State to track the selected label

  const handleLabelClick = (label) => {
    setSelectedLabel(label);
  };

  return (
    <Box>
      <Flex
        bg="#10364B"
        color={useColorModeValue('gray.600', 'white')}
        maxH="120px"
        minH="120px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align="center"
        justifyContent="space-between" // Center the content horizontally
      >
        <Box className="w-20"></Box>
          <Text
            as="a"
            fontSize="6xl" // Adjust the font size
            fontWeight={100}
            color="white"
          >
             ㅤflourish
          </Text>
        <Flex>
          <Flex
            ml={{ base: 2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </Flex>
          <Flex align="center" className="padding-right:10px">
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="#"
            color="#a6c4cf"
          >
            Sign Inㅤ
          </Button>
          <Text fontSize="sm" color="#a6c4cf">|</Text>
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="#"
            color="#a6c4cf"
          >
           ㅤSign Up
          </Button>
        </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ selectedLabel, handleLabelClick }) => {
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
            paddingX={3}
            className={selectedLabel === navItem.label ? 'selected' : ''} // Apply 'selected' class conditionally
            onClick={() => handleLabelClick(navItem.label)} // Handle label click
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
