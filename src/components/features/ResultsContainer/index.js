import { useMemo } from "react";
import moment from "moment";

import * as S from "./styles";

const formatDate = date => moment(date).format("MMM DD, YYYY");

const ResultsContainer = ({ data }) => {
  const formattedData = useMemo(
    () =>
      data.map(item => ({
        ...item,
        formattedDate: formatDate(item.date),
      })),
    [data]
  );

  return (
    <S.ResultsContainer>
      {formattedData.map(({ id, formattedDate, title, content, category, decision, company }) => (
        <S.Result key={id}>
          <S.ResultDate>{formattedDate}</S.ResultDate>
          <S.ResultTitle>{title}</S.ResultTitle>
          <S.ResultContent>{content}</S.ResultContent>
          <S.ResultDetails>
            {[
              { label: "Category", value: category },
              { label: "Decision", value: decision },
              { label: "Company", value: company },
            ].map(({ label, value }) => (
              <S.ResultDetail key={label}>
                <span>{label}</span>
                <span>{value}</span>
              </S.ResultDetail>
            ))}
          </S.ResultDetails>
        </S.Result>
      ))}
    </S.ResultsContainer>
  );
};

export default ResultsContainer;
