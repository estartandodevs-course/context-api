import * as S from "./styles";

export const Card = ({ children, product }) => {
  return (
    <S.WrapperCard>
      <S.ImageView src={product?.image} alt="" />
      {children}
    </S.WrapperCard>
  );
};
