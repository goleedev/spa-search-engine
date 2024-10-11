import { SearchIcon } from "../../../assets";
import Button from "../../common/Button";
import Input from "../../common/Input";
import * as S from "./styles";

const SearchForm = ({ query, setQuery, onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch();
  };

  return (
    <S.SearchFormContainer onSubmit={handleSubmit}>
      <Input placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} icon={SearchIcon} />
      <Button type="submit" width="192px">
        Search
      </Button>
    </S.SearchFormContainer>
  );
};

export default SearchForm;
