import React from 'react';
import {
  Box,
  Heading,
  VStack,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'


export default function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH="40" p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'}  >
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Contact Me
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
            <i className="fa-regular fa-share-from-square"></i>
            </Button>
          </HStack>
        </VStack>
        
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
          textAlign={'center'}
        >
          <Heading textTransform={'uppercase'} >
            VIDEO HUB
          </Heading>
          <Text>All rights received</Text>
        </VStack>

        <VStack w={'full'}  textAlign={'center'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/niraj_kumar._roy/">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/nirajroy149">
              Github
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}
