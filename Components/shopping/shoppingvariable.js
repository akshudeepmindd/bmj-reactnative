import React from 'react';
import {connect} from 'react-redux';

const TableVariables = props => {
  console.log(props.cart, "consolecart")
  let variable = [
    {
      tableTitle: 'Order Details',
      tableHead: [
        'Image',
        'Details',
        'Gross Wt',
        'Net Wt',
        'Fine Wt',
        'Waste',
        'Price',
        '',
      ],
      tableData: [
        props.cart &&
          props.cart.cartList.map (cartItem => {
            {console.log(cartItem, "cartItem")}
            [
              <Image
                source={require ('../../assets/images/product6.png')}
                style={{
                  margin: 2,
                  width: wp ('10%'),
                  height: hp ('6.5%'),
                }}
              />,
              '10.2g',
              '10.2g',
              '10.2g',
              '75.5%',
              '75.5%',
              'Rs. 59,564',
              <View style={{alignItems: 'center'}}>
                <FontAwesome5
                  name="trash-alt"
                  color="red"
                  size={20}
                  iconStyle={{
                    textAlign: 'center',
                  }}
                />
              </View>,
            ];
          })[('Total wt', '', '5gm', '4.5gm', '', '0.1ct', 'Rs. 59,564', '')],
      ],
      button: [
        {
          buttonTitle: 'Continue Shopping',
          align: 'flex-start',
          path: 'ProductView',
        },
        {
          buttonTitle: 'Checkout',
          align: 'flex-end',
          path: 'CheckoutView',
        },
      ],
    },
  ];
  return variable;
};

const mapStateToProps = state => ({
  cart: state.category,
});

export default connect (mapStateToProps) (TableVariables);
