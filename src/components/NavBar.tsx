import { HStack, Image } from '@chakra-ui/react';
import Logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import Search from './Search';

interface Props {
  setSearchText: (searchText: string) => void;
}

const NavBar = ({ setSearchText }: Props) => {
  return (
    <HStack py={1} px={5} mb={5}>
      <Image src={Logo} alt='Logo' boxSize='60px' />
      <Search setSearchText={setSearchText} />
      <ColorModeButton margin='0 0 0 auto' />
    </HStack>
  );
};

export default NavBar;
