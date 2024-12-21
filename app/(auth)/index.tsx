import { styled } from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text`
  color: red;
  font-size: 50px;
`;

export default function HomeScreen() {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}
