import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Image } from '@chakra-ui/react';

const WelcomeModal = ({ isOpen, onClose, username, performanceText }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mt='5%'>Welcome to ForumNexus Users Dashboard!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src='https://cdni.iconscout.com/illustration/premium/thumb/welcome-typography-with-business-people-characters-2710146-2263951.png' h='80%' w='80%' ml='5%'/>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WelcomeModal;
