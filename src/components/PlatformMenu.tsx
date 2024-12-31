import { Badge, Button, Text } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms, { Platform } from '@/hooks/usePlatforms';

interface Props {
  selectedPlatform: Platform;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformMenu = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='solid' size='sm'>
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.map((x) => (
          <MenuItem
            key={x.id}
            value={x.name}
            justifyContent='space-between'
            my={2}
            cursor='pointer'
          >
            <Text>{x.name}</Text>
            <Badge py='1' borderRadius='md' variant='solid'>
              {x.games_count}
            </Badge>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformMenu;
