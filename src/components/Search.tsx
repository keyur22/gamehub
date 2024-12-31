import { Box, Input, Icon } from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { IoMdCloseCircle } from 'react-icons/io';
import { FormEvent, MutableRefObject, useRef } from 'react';

interface Props {
  setSearchText: (searchText: string) => void;
}

const Search = ({ setSearchText }: Props) => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    setSearchText(ref.current.value);
  };

  const onClear = () => {
    ref.current.value = '';
    ref.current.focus();
  };

  return (
    <Box w='60%' mx='auto'>
      <form onSubmit={onSearch}>
        <InputGroup
          w='100%'
          endElement={
            <Icon fontSize='2xl' cursor='pointer' onClick={onClear}>
              <IoMdCloseCircle />
            </Icon>
          }
        >
          <Input
            placeholder='Search Games...'
            variant='subtle'
            borderRadius='lg'
            ref={ref}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default Search;
