import styled from "styled-components";
import {Grid, Text} from "../elements/index";
import { Link } from "react-router-dom";

export default function Home () {
  return (
  <HomeBox>
    <Grid padding="16px">
      <Grid textAlign="center">
        <Link to = "/signup">
          <Text size="15px" bold>
            회원가입
          </Text>
        </Link>
        <Link to = "/signin">
          <Text size="15px" bold>
            로그인
          </Text>
        </Link>
      </Grid>
    </Grid>
  </HomeBox>
  );
};

const HomeBox = styled.main`
`