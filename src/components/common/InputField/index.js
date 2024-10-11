import * as S from "./styles";

const Input = ({ value, onChange, placeholder = "Search", icon: Icon, width }) => {
  return (
    <S.InputContainer>
      {Icon && <Icon data-testid="icon" />}
      <S.Input value={value} onChange={onChange} placeholder={placeholder} width={width} />
    </S.InputContainer>
  );
};

export default Input;
