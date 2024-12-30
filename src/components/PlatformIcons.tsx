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
  playstation3: <FaPlaystation />,
  playstation4: <FaPlaystation />,
  playstation5: <FaPlaystation />,
  'xbox-series-x': <FaXbox />,
  xbox360: <FaXbox />,
  'xbox-one': <FaXbox />,
  macos: <FaApple />,
  'nintendo-switch': <SiNintendo />,
  linux: <FaLinux />,
  android: <FaAndroid />,
  ios: <MdPhoneIphone />,
  web: <BsGlobe />
};

const PlatformIcons = ({ platforms }: Props) => {
  return (
    <HStack py={3}>
      {platforms.map((x) => (
        <span>{iconMap[x.slug]}</span>
      ))}
    </HStack>
  );
};

export default PlatformIcons;
