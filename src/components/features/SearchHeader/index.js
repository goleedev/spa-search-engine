import * as S from "./styles";

const HEADER_TITLE = "AI-Powered Regulatory Search";
const HEADER_DESCRIPTION = "Use the search engine to search for publications from courts and regulators.";

const SearchHeader = () => (
  <S.SearchHeader>
    <S.Title>{HEADER_TITLE}</S.Title>
    <S.Description>{HEADER_DESCRIPTION}</S.Description>
  </S.SearchHeader>
);

export default SearchHeader;
