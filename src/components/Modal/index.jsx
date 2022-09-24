import * as S from "./styles";

export const Modal = ({ children }) => {
  return (
    <S.Overlay>
      <S.ModalWrapper>{children}</S.ModalWrapper>
    </S.Overlay>
  );
};
