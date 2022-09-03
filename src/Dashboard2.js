import React from "react";
import styled from "styled-components";

export const Dashboard2 = ({}) => {
  const Button3Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  const Button1Function = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <DashboardRoot>
      <BG>
        <FlexColumn>
          <BlackFlexRow>
            <Screenshot
              src={`https://file.rendit.io/n/xd2ThSTq102wrqpgNwa9.png`}
            />
            <Text1>Ultra</Text1>
            <Text2>Dashboard</Text2>
            <Text3>Rune Protocol</Text3>
            <Button3 onClick={(e) => Button3Function(e, "Button3")}>
              Solana
            </Button3>
            <Button1 onClick={(e) => Button1Function(e, "Button1")}>
              Connect
            </Button1>
          </BlackFlexRow>
          <Element34>
            <Text4>Contracts Version 2</Text4>
            <MidnightBlueFlexRow>
              <BlackFlexRow1>
                <FlexColumn1>
                  <FlexColumn2>
                    <Text5>Supply Rate</Text5>
                    <Text6>$0.00</Text6>
                  </FlexColumn2>
                  <Line
                    src={`https://file.rendit.io/n/Uv2wUV2m10NUqZ7TfsYx.svg`}
                  />
                  <FlexColumn3>
                    <Text5>Borrow Rate</Text5>
                    <Text6>$0.00</Text6>
                  </FlexColumn3>
                </FlexColumn1>
                <Element35>
                  <FlexColumn4>
                    <Text9>Exchange Rate</Text9>
                    <Text6>$0.00</Text6>
                  </FlexColumn4>
                  <FlexColumn5>
                    <Text9>Liquidation Threshold</Text9>
                    <Text6>0.00%</Text6>
                  </FlexColumn5>
                  <Line1
                    src={`https://file.rendit.io/n/Uv2wUV2m10NUqZ7TfsYx.svg`}
                  />
                  <Element36>
                    <Image1
                      src={`https://file.rendit.io/n/Jt88kZo1977gdxZYpj5j.svg`}
                    />
                    <FlexColumn6>
                      <FlexRow>
                        <Ellipse>
                          <FlexColumn7>
                            <Text13>Ratio</Text13>
                            <Text14>0.00%</Text14>
                          </FlexColumn7>
                        </Ellipse>
                      </FlexRow>
                    </FlexColumn6>
                  </Element36>
                </Element35>
                <Line2
                  src={`https://file.rendit.io/n/dpP4IfOvf0TVdgEKRfl9.svg`}
                />
                <FlexColumn8>
                  <FlexColumn9>
                    <Text9>Supply</Text9>
                    <Text6>$0.00</Text6>
                  </FlexColumn9>
                  <FlexColumn10>
                    <BorrowLimit1>
                      Borrow <BorrowLimit>Limit</BorrowLimit>
                    </BorrowLimit1>
                    <Text6>$0.00</Text6>
                  </FlexColumn10>
                </FlexColumn8>
              </BlackFlexRow1>
            </MidnightBlueFlexRow>
          </Element34>
          <Text18>Markets</Text18>
          <FlexRow1>
            <MidnightBlueFlexColumn>
              <Text19>Market Overview</Text19>
              <FlexRow2>
                <FlexColumn11>
                  <FlexColumn12>
                    <Text20>Total Supply</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn12>
                  <FlexColumn3>
                    <Text20>Total Staked</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn3>
                </FlexColumn11>
                <FlexRow3>
                  <Line3
                    src={`https://file.rendit.io/n/bGfBo1KyouKWqViTBwiB.svg`}
                  />
                  <FlexColumn14>
                    <FlexColumn3>
                      <Text9>Total Locked</Text9>
                      <Text21>$0.0</Text21>
                    </FlexColumn3>
                    <FlexColumn12>
                      <Text20>Total Borrow</Text20>
                      <Text21>$0.0</Text21>
                    </FlexColumn12>
                  </FlexColumn14>
                </FlexRow3>
              </FlexRow2>
            </MidnightBlueFlexColumn>
            <MidnightBlueFlexColumn1>
              <Text19>Balances</Text19>
              <FlexRow4>
                <FlexColumn11>
                  <FlexColumn3>
                    <Text20>Supply</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn3>
                  <FlexColumn3>
                    <Text20>Staked</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn3>
                </FlexColumn11>
                <FlexRow3>
                  <Line3
                    src={`https://file.rendit.io/n/bGfBo1KyouKWqViTBwiB.svg`}
                  />
                  <FlexColumn20>
                    <FlexColumn12>
                      <Text20>Borrow</Text20>
                      <Text21>$0.0</Text21>
                    </FlexColumn12>
                    <FlexColumn3>
                      <Text20>Borrow Limit</Text20>
                      <Text21>$0.0</Text21>
                    </FlexColumn3>
                  </FlexColumn20>
                </FlexRow3>
              </FlexRow4>
            </MidnightBlueFlexColumn1>
            <MidnightBlueFlexColumn2>
              <Text19>APY</Text19>
              <FlexRow6>
                <FlexColumn11>
                  <FlexColumn12>
                    <Text20>Supply</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn12>
                  <FlexColumn3>
                    <Text20>Staking</Text20>
                    <Text21>$0.0</Text21>
                  </FlexColumn3>
                </FlexColumn11>
                <FlexRow3>
                  <Line3
                    src={`https://file.rendit.io/n/bGfBo1KyouKWqViTBwiB.svg`}
                  />
                  <FlexColumn20>
                    <FlexColumn12>
                      <Text20>Borrow</Text20>
                      <Text21>$0.0</Text21>
                    </FlexColumn12>
                    <FlexColumn3>
                      <Text20>Net APY</Text20>
                      <Text21>$0.0</Text21>
                    </FlexColumn3>
                  </FlexColumn20>
                </FlexRow3>
              </FlexRow6>
            </MidnightBlueFlexColumn2>
          </FlexRow1>
          <FlexRow8>
            <Text46>Supply Market</Text46>
            <Text46>Borrow Market</Text46>
          </FlexRow8>
          <FlexRow9>
            <Element37>
              <MidnightBlueFlexColumn3>
                <FlexRow10>
                  <Avalanche1
                    src={`https://file.rendit.io/n/O4RP3X0KHasIhx8sumDQ.png`}
                  />
                  <Text48>Avalanche</Text48>
                  <Text49>0.62%</Text49>
                  <Text50>0 AVAX</Text50>
                  <FlexRow11>
                    <Ellipse5
                      src={`https://file.rendit.io/n/JWR29dw5ZZw5asg1wWgX.svg`}
                    />
                  </FlexRow11>
                </FlexRow10>
                <FlexRow10>
                  <Avalanche1
                    src={`https://file.rendit.io/n/aWnozvt53VNDAmsW6tYX.png`}
                  />
                  <Text51>Bitcoin</Text51>
                  <Text49>0.62%</Text49>
                  <Text53>0 BTC</Text53>
                  <FlexRow11>
                    <Ellipse5
                      src={`https://file.rendit.io/n/JWR29dw5ZZw5asg1wWgX.svg`}
                    />
                  </FlexRow11>
                </FlexRow10>
                <FlexRow14>
                  <Image2
                    src={`https://file.rendit.io/n/dY3qi3pwKuVQAbQob4kB.png`}
                  />
                  <Text54>Ether</Text54>
                  <Text55>0.62%</Text55>
                  <Text56>0 ETH</Text56>
                  <FlexRow15>
                    <Ellipse1
                      src={`https://file.rendit.io/n/QuuBCfBGpzCimZWq3TvX.svg`}
                    />
                  </FlexRow15>
                </FlexRow14>
                <FlexRow10>
                  <Serum1
                    src={`https://file.rendit.io/n/XPQxTEVOMabAAQ6rIFyf.png`}
                  />
                  <Text57>Serum</Text57>
                  <Text49>0.62%</Text49>
                  <Text59>0 SRM</Text59>
                  <FlexRow11>
                    <Ellipse5
                      src={`https://file.rendit.io/n/JWR29dw5ZZw5asg1wWgX.svg`}
                    />
                  </FlexRow11>
                </FlexRow10>
                <FlexRow10>
                  <Avalanche1
                    src={`https://file.rendit.io/n/RPYQN4hXZ7KGnAKdhbeA.png`}
                  />
                  <Text60>Solana</Text60>
                  <Text49>0.62%</Text49>
                  <Text53>0 SOL</Text53>
                  <BlackFlexColumn>
                    <FlexRow19>
                      <Ellipse5
                        src={`https://file.rendit.io/n/kiKFQogvc0c2vF3WfN9f.svg`}
                      />
                    </FlexRow19>
                  </BlackFlexColumn>
                </FlexRow10>
                <FlexRow10>
                  <Avalanche1
                    src={`https://file.rendit.io/n/Ezc6IpAcamMspPYdsEMB.png`}
                  />
                  <Text63>USDC</Text63>
                  <Text49>0.62%</Text49>
                  <Text65>0 USDC</Text65>
                  <FlexRow11>
                    <Ellipse5
                      src={`https://file.rendit.io/n/JWR29dw5ZZw5asg1wWgX.svg`}
                    />
                  </FlexRow11>
                </FlexRow10>
                <FlexRow10>
                  <Tether1
                    src={`https://file.rendit.io/n/Fb238RwFaiYmxc3M0irP.png`}
                  />
                  <Text57>Tether</Text57>
                  <Text49>0.62%</Text49>
                  <Text68>0 UST</Text68>
                  <FlexRow11>
                    <Ellipse5
                      src={`https://file.rendit.io/n/JWR29dw5ZZw5asg1wWgX.svg`}
                    />
                  </FlexRow11>
                </FlexRow10>
              </MidnightBlueFlexColumn3>
              <FlexRow24>
                <Text9>Asset</Text9>
                <FlexRow25>
                  {[
                    {
                      childText: `APY`,
                    },
                    {
                      childText: `Wallet`,
                    },
                    {
                      childText: `Collateral`,
                    },
                  ].map((data) => (
                    <Text9>{data.childText}</Text9>
                  ))}
                </FlexRow25>
              </FlexRow24>
              <Line6
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line8
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line10
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line12
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line14
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line16
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
            </Element37>
            <Element37>
              <MidnightBlueFlexColumn4>
                <FlexRow26>
                  <Avalanche1
                    src={`https://file.rendit.io/n/O4RP3X0KHasIhx8sumDQ.png`}
                  />
                  <Text48>Avalanche</Text48>
                  <Text49>0.62%</Text49>
                  <Text50>0 AVAX</Text50>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
                <FlexRow26>
                  <Avalanche1
                    src={`https://file.rendit.io/n/aWnozvt53VNDAmsW6tYX.png`}
                  />
                  <Text51>Bitcoin</Text51>
                  <Text49>0.62%</Text49>
                  <Text53>0 BTC</Text53>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
                <FlexRow28>
                  <Image2
                    src={`https://file.rendit.io/n/dY3qi3pwKuVQAbQob4kB.png`}
                  />
                  <Text54>Ether</Text54>
                  <Text55>0.62%</Text55>
                  <Text56>0 ETH</Text56>
                  <Text20>$45.2M</Text20>
                </FlexRow28>
                <FlexRow26>
                  <Serum1
                    src={`https://file.rendit.io/n/XPQxTEVOMabAAQ6rIFyf.png`}
                  />
                  <Text57>Serum</Text57>
                  <Text49>0.62%</Text49>
                  <Text59>0 SRM</Text59>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
                <FlexRow26>
                  <Avalanche1
                    src={`https://file.rendit.io/n/RPYQN4hXZ7KGnAKdhbeA.png`}
                  />
                  <Text60>Solana</Text60>
                  <Text49>0.62%</Text49>
                  <Text53>0 SOL</Text53>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
                <FlexRow26>
                  <Avalanche1
                    src={`https://file.rendit.io/n/Ezc6IpAcamMspPYdsEMB.png`}
                  />
                  <Text63>USDC</Text63>
                  <Text49>0.62%</Text49>
                  <Text65>0 USDC</Text65>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
                <FlexRow26>
                  <Tether1
                    src={`https://file.rendit.io/n/Fb238RwFaiYmxc3M0irP.png`}
                  />
                  <Text57>Tether</Text57>
                  <Text49>0.62%</Text49>
                  <Text68>0 UST</Text68>
                  <Text76>$45.2M</Text76>
                </FlexRow26>
              </MidnightBlueFlexColumn4>
              <FlexRow33>
                <Text9>Asset</Text9>
                <FlexRow34>
                  {[
                    {
                      childText: `APY`,
                    },
                    {
                      childText: `Wallet`,
                    },
                    {
                      childText: `Liquidity`,
                    },
                  ].map((data) => (
                    <Text9>{data.childText}</Text9>
                  ))}
                </FlexRow34>
              </FlexRow33>
              <Line6
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line8
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line10
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line12
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line14
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
              <Line16
                src={`https://file.rendit.io/n/Ptre0qsPrXhXjcRK6g5A.svg`}
              />
            </Element37>
          </FlexRow9>
        </FlexColumn>
      </BG>
      <Compoundcomplogo
        src={`https://file.rendit.io/n/hmNfC2dSGM1lc3aAzOVt.png`}
      />
    </DashboardRoot>
  );
};

const Text5 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  line-height: 21px;
  white-space: nowrap;
`;
const Text6 = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  line-height: 27px;
  white-space: nowrap;
`;
const FlexColumn3 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text9 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
  white-space: nowrap;
`;
const Text19 = styled.div`
  align-self: flex-start;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 36px;
  white-space: nowrap;
`;
const FlexColumn11 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FlexColumn12 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
`;
const Text20 = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text21 = styled.div`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  font-family: Inter;
  line-height: 33px;
  white-space: nowrap;
`;
const FlexRow3 = styled.div`
  gap: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Line3 = styled.img`
  width: 1px;
  height: 126px;
`;
const FlexColumn20 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const Text46 = styled.div`
  width: 174.18px;
  height: 27px;
  padding: 9px 0px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  line-height: 27px;
  white-space: nowrap;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/3PszIH9mz0L1sfNjggRK.svg");
`;
const Element37 = styled.div`
  width: 538px;
  height: 635px;
  position: relative;
`;
const FlexRow10 = styled.div`
  width: 479px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const Avalanche1 = styled.img`
  width: 42px;
  height: 42px;
  align-self: center;
  margin: 0px 38px 0px 0px;
`;
const Text48 = styled.div`
  margin: 0px 76px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text49 = styled.div`
  margin: 0px 43px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text50 = styled.div`
  margin: 0px 50px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const FlexRow11 = styled.div`
  width: 49.34px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
  align-items: center;
  padding: 1px 1.83px;
  border-width: 2.5px;
  border-radius: 100px;
  border-style: solid;
  border-color: #569bca;
`;
const Ellipse5 = styled.img`
  width: 20.78px;
  height: 21px;
`;
const Text51 = styled.div`
  margin: 0px 100px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text53 = styled.div`
  margin: 0px 59px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Image2 = styled.img`
  width: 41px;
  height: 41px;
  margin: 0px 39px 0px 0px;
`;
const Text54 = styled.div`
  margin: 0px 111px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text55 = styled.div`
  margin: 0px 43px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text56 = styled.div`
  margin: 0px 59px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Serum1 = styled.img`
  width: 35px;
  height: 42px;
  align-self: center;
  margin: 0px 45px 0px 0px;
`;
const Text57 = styled.div`
  margin: 0px 103px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text59 = styled.div`
  margin: 0px 56px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text60 = styled.div`
  margin: 0px 101px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text63 = styled.div`
  margin: 0px 107px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Text65 = styled.div`
  margin: 0px 46px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Tether1 = styled.img`
  width: 40px;
  height: 42px;
  align-self: center;
  margin: 0px 40px 0px 0px;
`;
const Text68 = styled.div`
  margin: 0px 58px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const Line6 = styled.img`
  width: 538px;
  height: 1px;
  top: 132px;
  position: absolute;
`;
const Line8 = styled.img`
  width: 538px;
  height: 1px;
  top: 216px;
  position: absolute;
`;
const Line10 = styled.img`
  width: 538px;
  height: 1px;
  top: 299px;
  position: absolute;
`;
const Line12 = styled.img`
  width: 538px;
  height: 1px;
  top: 383px;
  position: absolute;
`;
const Line14 = styled.img`
  width: 538px;
  height: 1px;
  top: 467px;
  position: absolute;
`;
const Line16 = styled.img`
  width: 538px;
  height: 1px;
  top: 551px;
  position: absolute;
`;
const FlexRow26 = styled.div`
  width: 477px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const Text76 = styled.div`
  margin: 0px 0px 9px 0px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  font-family: Inter;
  line-height: 22.5px;
  white-space: nowrap;
`;
const DashboardRoot = styled.div`
  width: 1440px;
  height: 1591px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
`;
const BG = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c2442;
`;
const FlexColumn = styled.div`
  height: 1591px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/KBa6J8X5hCXg0g5fIUjJ.svg");
`;
const BlackFlexRow = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  margin: 0px 0px 39px 0px;
  padding: 16px 0px;
  background-color: #151726;
  box-shadow: 0px 10px 36px 0px #141b36;
`;
const Screenshot = styled.img`
  width: 48px;
  height: 58px;
`;
const Text1 = styled.div`
  align-self: flex-end;
  margin: 0px 68px 7px 0px;
  color: #569bca;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  line-height: 30px;
  white-space: nowrap;
`;
const Text2 = styled.div`
  margin: 0px 490px 0px 0px;
  color: #14f195;
  font-size: 20px;
  font-weight: 600;
  font-family: Inter;
  line-height: 30px;
  white-space: nowrap;
`;
const Text3 = styled.div`
  margin: 0px 28px 0px 0px;
  color: #ffffff;
  font-size: 15px;
  font-family: Inter;
  line-height: 27px;
  white-space: nowrap;
`;
const Button3 = styled.button`
  width: 76px;
  margin: 0px 28px 0px 0px;
  padding: 7px 15px;
  color: #569bca;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  line-height: 21px;
  white-space: nowrap;
  border-width: 1px;
  border-radius: 50px;
  border-style: solid;
  border-color: #569bca;
  box-sizing: content-box;
  background: none;
  box-shadow: 0px 4px 15px 0px rgba(43, 43, 43, 0.25);
  cursor: pointer;
`;
const Button1 = styled.button`
  padding: 7px 15px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: Inter;
  line-height: 21px;
  white-space: nowrap;
  border-width: 0px;
  border-radius: 50px;
  box-sizing: content-box;
  background-color: transparent;
  background-image: linear-gradient(90deg, #9945ff 0%, #14f195 100%);
  box-shadow: 0px 4px 15px 0px rgba(43, 43, 43, 0.25);
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
`;
const Element34 = styled.div`
  width: 1440px;
  height: 290px;
  position: relative;
  margin: 0px 0px 41px 0px;
`;
const Text4 = styled.div`
  left: 738px;
  top: 254px;
  position: absolute;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 36px;
  white-space: nowrap;
`;
const MidnightBlueFlexRow = styled.div`
  left: 167px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 21px 0px 23px 0px;
  border-width: 1px;
  border-radius: 15px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const BlackFlexRow1 = styled.div`
  width: 1059px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 19px 0px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(90deg, #9945ff 0%, #14f195 100%);
`;
const FlexColumn1 = styled.div`
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 21px 0px 19px 0px;
`;
const FlexColumn2 = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px 0px 25px 0px;
`;
const Line = styled.img`
  width: 280px;
  height: 1px;
  align-self: center;
  margin: 0px 0px 27px 0px;
`;
const Element35 = styled.div`
  width: 487px;
  height: 197px;
  position: relative;
  margin: 0px 49px 0px 0px;
`;
const FlexColumn4 = styled.div`
  left: 318px;
  top: 19px;
  position: absolute;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const FlexColumn5 = styled.div`
  left: 318px;
  top: 124px;
  position: absolute;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Line1 = styled.img`
  width: 280px;
  height: 1px;
  left: 195px;
  top: 98px;
  position: absolute;
`;
const Element36 = styled.div`
  width: 196px;
  height: 196px;
  position: absolute;
`;
const Image1 = styled.img`
  width: 136px;
  height: 136px;
  left: 30px;
  top: 30px;
  position: absolute;
`;
const FlexColumn6 = styled.div`
  height: 196px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 11px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/JISRxPWROqyampcGke8S.svg");
`;
const FlexRow = styled.div`
  width: 174px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20.76px 0px 21px 0px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/xenzO7t2xc1m3rELR6KI.svg");
`;
const Ellipse = styled.div`
  height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 38px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/mwP25vXIurrPAEFTjiUp.svg");
`;
const FlexColumn7 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Text13 = styled.div`
  color: #9945ff;
  font-size: 15px;
  font-family: Inter;
  line-height: 27px;
  white-space: nowrap;
`;
const Text14 = styled.div`
  color: #14f195;
  font-size: 18px;
  font-weight: 600;
  font-family: Inter;
  line-height: 27px;
  white-space: nowrap;
`;
const Line2 = styled.img`
  width: 1px;
  height: 196px;
  align-self: flex-end;
  margin: 0px 65px 0px 0px;
`;
const FlexColumn8 = styled.div`
  gap: 49px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 19px 0px 17px 0px;
`;
const FlexColumn9 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: flex-start;
`;
const FlexColumn10 = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const BorrowLimit1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  white-space: pre-wrap;
`;
const BorrowLimit = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  line-height: 24px;
`;
const Text18 = styled.div`
  align-self: flex-start;
  margin: 0px 0px 19px 167px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: Inter;
  line-height: 36px;
  white-space: nowrap;
`;
const FlexRow1 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 56px 0px;
`;
const MidnightBlueFlexColumn = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 60px 19px 21px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const FlexRow2 = styled.div`
  gap: 39px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexColumn14 = styled.div`
  gap: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-items: center;
`;
const MidnightBlueFlexColumn1 = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 69px 19px 21px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const FlexRow4 = styled.div`
  gap: 79px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MidnightBlueFlexColumn2 = styled.div`
  gap: 13px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px 99px 19px 21px;
  border-width: 1px;
  border-radius: 10px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const FlexRow6 = styled.div`
  gap: 74px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow8 = styled.div`
  gap: 393.82px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 167px;
`;
const FlexRow9 = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const MidnightBlueFlexColumn3 = styled.div`
  height: 595px;
  position: absolute;
  gap: 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 43px 19px 14px;
  border-width: 1px;
  border-radius: 0px 10px 10px 10px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const FlexRow14 = styled.div`
  width: 479px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow15 = styled.div`
  width: 48.53px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-start;
  align-items: center;
  margin: 6px 0px 0px 0px;
  padding: 1.15px 2.23px;
  border-width: 2.5px;
  border-radius: 100px;
  border-style: solid;
  border-color: #569bca;
`;
const Ellipse1 = styled.img`
  width: 20.12px;
  height: 20.7px;
`;
const BlackFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
const FlexRow19 = styled.div`
  width: 47.61px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1px 2.69px;
  border-width: 2.5px;
  border-radius: 100px;
  border-style: solid;
  border-color: #e0fff2;
`;
const FlexRow24 = styled.div`
  width: 508px;
  top: 1px;
  position: absolute;
  gap: 185px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 14px 13px 14px;
  border-width: 1px;
  border-radius: 0px 10px 0px 0px;
  border-style: solid;
  border-color: #569bca;
  background-image: linear-gradient(90deg, #9945ff 0%, #14f195 100%);
`;
const FlexRow25 = styled.div`
  width: 266px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MidnightBlueFlexColumn4 = styled.div`
  height: 595px;
  position: absolute;
  gap: 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 19px 45px 19px 14px;
  border-width: 1px;
  border-radius: 0px 10px 10px 10px;
  border-style: solid;
  border-color: #569bca;
  background-color: #1c2442;
`;
const FlexRow28 = styled.div`
  width: 477px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const FlexRow33 = styled.div`
  top: 1px;
  position: absolute;
  gap: 176px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 34px 13px 23px;
  border-width: 1px;
  border-radius: 0px 10px 0px 0px;
  border-style: solid;
  border-color: #569bca;
  background-image: linear-gradient(90deg, #9945ff 0%, #14f195 100%);
`;
const FlexRow34 = styled.div`
  width: 258px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Compoundcomplogo = styled.img`
  width: 0;
  height: 0;
  left: -590px;
  top: 479px;
  position: absolute;
`;
