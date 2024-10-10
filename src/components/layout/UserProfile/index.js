import * as S from "./styles";

const UserProfile = ({ name, initials }) => (
  <S.UserProfileContainer>
    <S.UserName>{name}</S.UserName>

    <S.Thumbnail>{initials}</S.Thumbnail>
  </S.UserProfileContainer>
);

export default UserProfile;
