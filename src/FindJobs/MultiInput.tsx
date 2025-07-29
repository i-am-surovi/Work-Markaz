import {
  Checkbox,
  Combobox,
  Group,
  Input,
  Pill,
  PillsInput,
  useCombobox,
} from "@mantine/core";
import { IconSearch, IconSelector } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const MultiInput = (props:any) => {
    useEffect(()=>{
        setData(props.options);
    }, [])
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const [search, setSearch] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item: string) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch("");

    if (val === "$create") {
      setData((current: string[]) => [...current, search]);
      setValue((current: string[]) => [...current, search]);
    } else {
      setValue((current: string[]) =>
        current.includes(val)
          ? current.filter((v: string) => v !== val)
          : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current: string[]) => current.filter((v: string) => v !== val));

  const values = value.slice(0, 1).map((item: string) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = data
    .filter((item: string) =>
      item.toLowerCase().includes(search.trim().toLowerCase())
    )
    .map((item: string) => (
      <Combobox.Option
        value={item}
        key={item}
        active={value.includes(item)}
      >
        <Group gap="sm">
          <Checkbox
            size="xs"
            color="azure-radiance.6"
            checked={value.includes(item)}
            onChange={() => {}}
            aria-hidden
            tabIndex={-1}
            style={{ pointerEvents: "none" }}
          />
          <span className="text-white-700">{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      withinPortal={false}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          variant="filled"
          rightSection={<IconSelector />}
          onClick={() => combobox.openDropdown()}
          leftSection={
            <div className="text-azure-radiance-600 p-1 bg-white-100 rounded-full mr-1">
              <props.icon />
            </div>
          }
        >
          <Pill.Group>
            {value.length > 0 ? (
              <>
                {values}
                {value.length > 1 && (
                  <Pill>+{value.length - 1} more</Pill>
                )}
              </>
            ) : (
              <Input.Placeholder className="!text-white-500 ml-1 font-['poppins']">{props.title}</Input.Placeholder>
            )}
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search groceries"
        />

        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">
              + Create {search}
            </Combobox.Option>
          )}

          {exactOptionMatch &&
            search.trim().length > 0 &&
            options.length === 0 && (
              <Combobox.Empty>Nothing found</Combobox.Empty>
            )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;
