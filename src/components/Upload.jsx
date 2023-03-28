import React from 'react';
import {
  Container,
  HStack,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

export default function Upload() {
  return (
    <Container h={'100vh'} w={'100%'}>
      <VStack color={'purple.500'}  h="full" justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <form>
        <HStack>
          <Input
            required
            type={'file'}
            css={{
              '&::file-selector-button': {
                border: 'none',
                width: 'calc(100% + 36px)',
                height: '100%',
                marginLeft: '-18px',
                color: 'purple',
                backgroundColor: 'white',
                cursor: 'pointer',
              },
            }}
          ></Input>
          <Button colorScheme={'purple'} type={'submit'}>Upload</Button>
        </HStack>
        </form>
      </VStack>
    </Container>
  );
}
