interface CustomDropDown {
  options: Option[];
  id: string;
  label: string;
  value: string;
  onChange: (option: string, id: string) => void;
}

interface Option {
  value: string;
  label: string;
}
