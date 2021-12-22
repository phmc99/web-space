import { Container, ContentInput } from "./style";

export const Input = ({ register, error, ...rest }) => {
  return (
    <Container>
      <ContentInput error={error ? true : false}>
        <input autoComplete="off" {...rest} {...register} />
      </ContentInput>
    </Container>
  );
};
