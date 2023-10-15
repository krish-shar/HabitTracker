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
import { useUser, UserButton } from '@clerk/nextjs';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [selectedLabel, setSelectedLabel] = useState(''); // State to track the selected label


  const user = useUser();


  const handleLabelClick = (label: string) => {
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
             flourish
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
          {user.isSignedIn ? <UserButton afterSignOutUrl='/'/> :
          <Flex align="center" className="padding-right:10px">
          <Button
            as="a"
            fontSize="sm"
            fontWeight={400}
            variant="link"
            href="sign-in"
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
            href="/sign-up"
            color="#a6c4cf"
          >
           ㅤSign Up
          </Button>

            
        </Flex>
}
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>

      </Collapse>
    </Box>
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
