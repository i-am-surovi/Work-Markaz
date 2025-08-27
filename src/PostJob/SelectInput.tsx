import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';
import { useEffect, useState } from 'react';

interface SelectInputProps {
  options: string[];
  label?: string;        // ✅ optional
  placeholder?: string;  // ✅ optional
}

const SelectInput = (props: SelectInputProps) => {
  const [data, setData] = useState<string[] | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (props.options) {
      setData(props.options);
    }
  }, [props.options]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const exactOptionMatch = data?.some((item) => item === search) ?? false;
  const filteredOptions = exactOptionMatch
    ? data || []
    : (data?.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase().trim())
      ) ?? []);

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        if (val === '$create') {
          setData((current) => [ ...(current ?? []), search ]);
          setValue(search);
        } else {
          setValue(val);
          setSearch(val);
        }
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase withAsterisk className='[&_input]:font-medium'
          label={props.label}        
          rightSection={<Combobox.Chevron />}
          value={search}
          onChange={(event) => {
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder={props.placeholder} 
          rightSectionPointerEvents="none"
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
        <ScrollArea.Autosize mah={200} type="scroll">
          {options}
          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create {search}
            </Combobox.Option>
          )}
        </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default SelectInput;
