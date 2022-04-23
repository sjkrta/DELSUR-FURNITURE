import { Close } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: purple;
`;

const ButtonItem = styled.button`
  padding: 0.7rem 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem 0;
  border: 1px solid purple;
  color: ${(props) => (props.bg === "purple" ? "white" : "purple")};
  background-color: ${(props) =>
    props.bg === "purple" ? "purple" : "transparent"};
  &:hover {
    background-color: #570057;
    color: white;
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: auto 325px;
  align-items: start;
  gap: 1rem;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;
const Left = styled.div``;

const Product = styled.div`
  display: grid;
  gap: 2rem;
`;

const Hr = styled.hr`
  margin: 1rem 0;
`;

const ProductDetail = styled.div`
position: relative;
padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  gap: 1rem;
  -webkit-box-shadow: 2px 3px 3px 5px rgba(185, 185, 185, 0.5);
          box-shadow: 2px 3px 3px 5px rgba(185, 185, 185, 0.5);
  border-radius: 10px;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;

const Info = styled.div`
  background-color: #ffd6ff;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  border-radius: 10px;
`;
const InfoTitle = styled.h2`
  color: purple;
`;
const InfoDetail = styled.p`
  color: purple;
  padding: 0.5rem 0;
`;
const InfoTerm = styled.div`
  color: black;
  font-size: 0.8rem;
`;

const ProductTitle = styled.h3`
  margin-bottom: 0.7rem;
`;
const ProductInfo = styled.div`
  display: grid;
  justify-content: start;
  padding: 0.5rem;
`;
const Color = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;
const Quantity = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;
const Price = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;

const Fieldset = styled.fieldset``;

const Right = styled.fieldset`
  display: grid;
  padding: 1rem;
  border-radius: 10px;
`;

const Legend = styled.legend`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

const A = styled.a`
  color: black;
  font-weight: bold;
`;

const Select = styled.select`
  background-color: transparent;
  padding: 0.3rem;
  width: 120px;
`;

const OrderDetail = styled.div`
  font-size: 1.5rem;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 1.5rem;
  margin: 0.2rem 0;
  text-align: center;
  color: gray;
  &:focus {
    outline: none;
  }
`;

const Summary = styled.div`
  text-align: center;
`;

const OrderInfo = styled.p`
  text-align: center;
  color: gray;
`;

const ShippingInfo = styled.p`
  text-align: center;
  color: gray;
`;

const LegendCoupon = styled.legend`
  padding: 0 1rem;
`;

const ButtonCoupon = styled.button`
  border: 1px solid purple;
  padding: 0.7rem;
  margin: 0.25rem;
  align-self: end;
  border-radius: 5px;
  color: white;
  background-color: purple;
  &:hover{
    cursor:pointer;
  }
`;

const CouponContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto max-content;
`;

const Option = styled.option``;
const Label = styled.label``;
const LeftSide = styled.div``;
const RightSide = styled.div``;


const PromoCode = styled.span`
font-weight: bold;
color: black;
cursor: pointer;
`
const RemoveButton = styled.button`
position: absolute;
right: 0%;
top: 0;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: transparent;
  border: none;
  transition: all 0.1s ease;
  &:hover {
    color: #540054;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Cart = () => {
  const promocode = "DELSUR2022"
  const copyText = () => {
    navigator.clipboard.writeText(promocode)
  }
  const Icon = {
    fontSize: "2.5rem",
    position: "absolute",
    top: 5,
    right:10,
  };

  return (
    <Container>
      <Title>YOUR CART ( 1 )</Title>
      <CartContainer>
        <Left>
          <Hr />
          <Info>
            <InfoTitle>15% OFF ALL FURNITURE</InfoTitle>
            <InfoDetail>
              Apply promo code <PromoCode onClick={copyText}>{promocode}</PromoCode> to get the discount.
            </InfoDetail>
            <InfoTerm>
              Offer ends 25th May. <A href="#">T&C Apply</A>
            </InfoTerm>
          </Info>
          <Hr />
          <Product>

            <ProductDetail>
              <Image src="https://image.zanui.com.au/data/product/24/6881/639073.jpg" />
              <ProductInfo>
                <ProductTitle>Cuppa Entertainment Unit</ProductTitle>
                <Color>
                  <LeftSide>Color:</LeftSide>
                  <RightSide>
                    <b>Light Brown</b>
                  </RightSide>
                </Color>
                <Price>
                  <LeftSide>Total:</LeftSide>
                  <RightSide>
                    <b>$278.9</b>
                  </RightSide>
                </Price>
                <Quantity>
                  <LeftSide>
                    <Label for="quantity">Quantity: </Label>
                  </LeftSide>
                  <RightSide>
                    <Select name="quantity" id="quantity">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                    </Select>
                  </RightSide>
                </Quantity>
              </ProductInfo>
                <RemoveButton><Close style={Icon}/></RemoveButton>
            </ProductDetail>

                        <ProductDetail>
              <Image src="https://image.zanui.com.au/data/product/24/6881/639073.jpg" />
              <ProductInfo>
                <ProductTitle>Cuppa Entertainment Unit</ProductTitle>
                <Color>
                  <LeftSide>Color:</LeftSide>
                  <RightSide>
                    <b>Light Brown</b>
                  </RightSide>
                </Color>
                <Price>
                  <LeftSide>Total:</LeftSide>
                  <RightSide>
                    <b>$278.9</b>
                  </RightSide>
                </Price>
                <Quantity>
                  <LeftSide>
                    <Label for="quantity">Quantity: </Label>
                  </LeftSide>
                  <RightSide>
                    <Select name="quantity" id="quantity">
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                    </Select>
                  </RightSide>
                </Quantity>
              </ProductInfo>
                <RemoveButton><Close style={Icon}/></RemoveButton>
            </ProductDetail>

          </Product>
        </Left>
        <Right>
          <Legend>Order Summary</Legend>
          <Summary>
            <OrderDetail>
              Total: <b>$518</b>
            </OrderDetail>
            <OrderInfo>( inclusive of GST )</OrderInfo>
            <Hr />
            <CouponContainer>
              <Fieldset>
                <LegendCoupon>Coupon Code</LegendCoupon>
                <Input />
              </Fieldset>
              <ButtonCoupon>APPLY</ButtonCoupon>
            </CouponContainer>
          </Summary>
          <Hr />
          <ShippingInfo>
            Shipping costs will be calculated at checkout.
          </ShippingInfo>
          <Hr />
          <ButtonItem bg="purple">CHECKOUT NOW</ButtonItem>
          <ButtonItem bg="transparent">CONTINUE SHOPPING</ButtonItem>
        </Right>
      </CartContainer>
    </Container>
  );
};

export default Cart;
