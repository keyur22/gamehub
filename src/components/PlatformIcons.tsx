import { Platform } from '@/hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { ReactIcon } from './Icon';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const iconMap: { [key: string]: ReactNode } = {
  pc: <FaWindows />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
  mac: <FaApple />,
  nintendo: <SiNintendo />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />
};

const PlatformIcons = ({ platforms }: Props) => {
  return (
    <HStack gap={3} pt={5} flexWrap='wrap'>
      {platforms.map((x) => (
        <span key={x.id}>{iconMap[x.slug]}</span>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
