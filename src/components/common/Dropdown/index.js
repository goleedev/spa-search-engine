import Select from "react-select";

import theme from "../../../styles/theme";
import * as S from "./styles";

const customSelectStyles = {
  control: provided => ({
    ...provided,
    borderRadius: theme.spacing.xs,
    height: "48px",
    border: `1px solid ${theme.colors.grey.light}`,
    boxShadow: "none",
    cursor: "pointer",
  }),
  placeholder: provided => ({
    ...provided,
    color: theme.colors.grey.darkest,
    fontSize: theme.font.size.xs,
  }),
};

const Dropdown = ({ options, placeholder, value, onChange, width }) => (
  <S.SelectWrapper data-testid="select-wrapper" width={width}>
    <Select
      styles={customSelectStyles}
      placeholder={placeholder}
      options={options}
      value={value}
      onChange={onChange}
      components={{ IndicatorSeparator: () => null }}
    />
  </S.SelectWrapper>
);

export default Dropdown;
