import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>مزائده و آگهی های قطعات و ماشین آلات راهسازی و معدنی</Container>;
};

export default Announcement;
