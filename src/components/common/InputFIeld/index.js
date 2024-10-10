import * as S from "./styles";

const InputField = ({ value, onChange, placeholder = "Search", icon: Icon, width }) => {
  return (
    <S.InputWrapper>
      {Icon && <Icon />}
      <S.InputField value={value} onChange={onChange} placeholder={placeholder} width={width} />
    </S.InputWrapper>
  );
};

export default InputField;
