/* @flow */
import React from "react";
import styled from "styled-components";

import Day from "../components/Day";
import Num from "../components/Num";
import Price from "../components/Price";
import Text from "../components/Text";
import Time from "../components/Time";
import main from "../styles/main";
import withBrand from "../services/brand/withBrand";

const H1 = styled.h1`
  margin-top: 0;
`;

const Div = styled.div`
  background: ${props => props.theme.primary};
`;

Div.defaultProps = {
  theme: main.theme,
};

type Props = {
  brand: typeof main,
};

const Root = (props: Props) => (
  <Div>
    <H1>{props.brand.name}</H1>
    <Text t={__("Do you even lift?")} />
    <br />
    <Day date={new Date()} />
    <br />
    <Num value={1337} />
    <br />
    <Time time={new Date()} />
    <br />
    <Price value={1337} currency="EUR" />
  </Div>
);

export default withBrand(Root);
