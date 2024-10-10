import * as S from "./styles";

const Button = ({ children, onClick, width }) => (
  <S.Button onClick={onClick} width={width}>
    {children}
  </S.Button>
);

export default Button;
