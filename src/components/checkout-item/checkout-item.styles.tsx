
import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  `

  export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 35px;
  `
  export const CheckoutItemImage = styled.img`
      width: 100%;
      height: 100%;
  `

  export const CheckoutItemName = styled.span`
    width: 23%;
  `
  export const CheckoutItemQuantity = styled.span`
    width: 23%;
    display: flex;
  `

   export const CheckoutItemPrice = styled.span`
    width: 23%;
  `

  export const Arrow = styled.div`
    cursor: pointer;
  `

  export const CheckoutItemValue = styled.span`
      margin: 0 10px;
   `
  export const CheckoutItemRemove = styled.div`
    padding-left: 12px;
    cursor: pointer;
    `

