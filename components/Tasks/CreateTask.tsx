"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import SelectDiv from "@/lib/ui/SelectDiv";
import InputDiv from "@/lib/ui/InputDiv";

export default function CreateTask() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleAddValues = () => {
    console.log("dd");
  };

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a new Task
              </ModalHeader>
              <ModalBody>
                <InputDiv />
                <SelectDiv />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={async () =>
                    await Promise.all([onClose(), handleAddValues()])
                  }
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
