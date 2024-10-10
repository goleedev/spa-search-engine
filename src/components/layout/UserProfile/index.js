import * as S from "./styles";

const UserProfile = ({ name, initials }) => (
  <S.UserProfileContainer>
    <S.UserName>{name}</S.UserName>

    <S.ThumbnailContainer>
      <S.Thumbnail>{initials}</S.Thumbnail>
    </S.ThumbnailContainer>
  </S.UserProfileContainer>
);

export default UserProfile;
