import { Modal, Image } from "@mantine/core";

interface ModalForImageProps {
  opened: boolean;
  image: string;
  onClose: () => void;
}

function ModalForImage({ opened, image, onClose }: ModalForImageProps) {
  return (
    <Modal opened={opened}  size="auto" onClose={onClose} p="md" title="Image Preview">
      <Image height={450} width={450} src={image} alt="Full Image" fit="contain" />
    </Modal>
  );
}

export default ModalForImage;
