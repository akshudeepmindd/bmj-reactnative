import React from 'react';
import {Image, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FontAwesome5} from '@expo/vector-icons';

export const categoriesVariable = [
  {
    img: require ('../assets/images/gold18kt.jpg'),
    name: 'Gold Jwellery 18Kt',
  },
  {
    img: require ('../assets/images/gold22kt.jpg'),
    name: 'Gold Jwellery 22Kt',
  },
  {
    img: require ('../assets/images/platinum_1.jpg'),
    name: 'Platinum Jwellery 95%',
  },
  {
    img: require ('../assets/images/diamond14kt.jpg'),
    name: 'Diamond Jwellery 14Kt',
  },
  {
    img: require ('../assets/images/diamond18kt.jpg'),
    name: 'Diamond Jwellery 18Kt',
  },
];
export const subcategoriesVariable = [
  {
    img: require ('../assets/images/earrings.png'),
    name: 'Earrings',
  },
  {
    img: require ('../assets/images/ladiesrings.png'),
    name: 'Ladies Rings',
  },
  {
    img: require ('../assets/images/gentsrings.png'),
    name: 'Gents Rings',
  },
  {
    img: require ('../assets/images/pendant.png'),
    name: 'Pendant',
  },
  {
    img: require ('../assets/images/ladiescastingrings.png'),
    name: 'Ladies Casting Rings',
  },
  {
    img: require ('../assets/images/necklace.png'),
    name: 'Necklace',
  },
  {
    img: require ('../assets/images/gentscastingrings.png'),
    name: 'Gents Casting Rings',
  },
  {
    img: require ('../assets/images/bangles.png'),
    name: 'Bangles',
  },
  {
    img: require ('../assets/images/kanthisets.png'),
    name: 'Kanthi Sets',
  },
  {
    img: require ('../assets/images/mangalsutra.png'),
    name: 'Mangalsutra',
  },
  {
    img: require ('../assets/images/tika.png'),
    name: 'Tika',
  },
  {
    img: require ('../assets/images/nath.png'),
    name: 'Nath',
  },
];

export const subcategoriesVariable2 = [
  {
    img: require ('../assets/images/antique.png'),
    name: 'Entique',
  },
  {
    img: require ('../assets/images/lightrings.png'),
    name: 'Light Rings',
  },
  {
    img: require ('../assets/images/ultralightrings.png'),
    name: 'Ultra Light Rings',
  },
  {
    img: require ('../assets/images/umbrellarings.png'),
    name: 'Umbrella Rings',
  },
];

export const listVariable = [
  {
    img: require ('../assets/images/product6.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product4.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product3.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product1.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product2.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product7.png'),
    name: 'Jwellery 1',
  },
  {
    img: require ('../assets/images/product7.png'),
    name: 'Jwellery 1',
  },
];

export const DashboardVariables = [
  {
    img: require ('../assets/images/bhavbag.png'),
    name: 'Baahv Today',
    path: 'Bhaav',
  },
  {
    img: require ('../assets/images/placeorder.png'),
    name: 'Place an Order',
    path: 'Category',
  },
  {
    img: require ('../assets/images/customiseorder.png'),
    name: 'Customize Order',
    path: 'Category',
  },
  {
    img: require ('../assets/images/delivery.png'),
    name: 'Track Your Order',
    path: 'TrackOrder',
  },
  {
    img: require ('../assets/images/returnboy.png'),
    name: 'Initiate Return',
    path: '',
  },
  {
    img: require ('../assets/images/accounts.png'),
    name: 'Accounts',
    path: 'MyAccount',
  },
  {
    img: require ('../assets/images/support.png'),
    name: 'Book A Complaint',
    path: '',
  },
  {
    img: require ('../assets/images/support.png'),
    name: 'Support',
    path: '',
  },
  {
    img: require ('../assets/images/policy.png'),
    name: 'Our Policies',
    path: 'PoliciesAndInformation',
  },
  {
    img: require ('../assets/images/Campaigns.png'),
    name: 'Campaigns',
    path: '',
  },
];

export const filterVariables = [
  {
    title: 'Origin',
    valueArray: [
      {
        name: 'Delhi Cut',
        path: 'Bhaav',
      },
      {
        name: 'Bombay Cut',
        path: 'Bhaav',
      },
      {
        name: 'Bareily Cut',
        path: 'Bhaav',
      },
      {
        name: 'Delhi Cut',
        path: 'Bhaav',
      },
    ],
  },
  {
    title: 'Stock Status',
    valueArray: [
      {
        name: 'InStock',
      },
      {
        name: 'Out of Stock',
      },
    ],
  },
];
export const filterVariables2 = [
  {
    title: 'What You Want ?',
    valueArray: [
      {
        name: 'Gold Jewellery',
        path: 'Bhaav',
      },
      {
        name: 'Diamond Jewellery',
        path: 'Bhaav',
      },
      {
        name: 'Platinum Jewellery',
        path: 'Bhaav',
      },
    ],
  },
  {
    title: 'What Gold Purity You Want ?',
    valueArray: [
      {
        name: '14Kt',
      },
      {
        name: '18Kt',
      },
      {
        name: '22Kt',
      },
    ],
  },
  {
    title: 'Item You Are Looking For ?',
    valueArray: [
      {
        name: 'Diamond Ladies Ring',
      },
      {
        name: 'Gold Ladies Ring',
      },
      {
        name: 'Bali',
      },
      {
        name: 'Nath',
      },
    ],
  },
  {
    title: 'Origin You Are Looking For ?',
    valueArray: [
      {
        name: 'Calcutta',
      },
      {
        name: 'Meerut',
      },
      {
        name: 'Delhi',
      },
      {
        name: 'Bareli',
      },
    ],
  },
];

export const RangeFilterVariable = [
  {
    title: 'Price range',
    staticStartValue: 0,
    staticeEndValue: 200000,
    minValue: 0,
    maxValue: 200000,
  },
  {
    title: 'Weight range',
    staticStartValue: 0,
    staticeEndValue: 10,
    minValue: 0,
    maxValue: 10,
  },
];

export const RangeFilterVariable2 = [
  {
    title: 'Weight Range(Gram)',
    staticStartValue: 0,
    staticeEndValue: 10,
    minValue: 0,
    maxValue: 10,
  },
];

export const TableVariables = [
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
      [
        <Image
          source={require ('../assets/images/product6.png')}
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
      ],
      [
        <Image
          source={require ('../assets/images/product6.png')}
          style={{
            margin: 2,
            width: wp ('10%'),
            height: hp ('6.5%'),
          }}
        />,
        ,
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
      ],
      ['Total wt', '', '5gm', '4.5gm', '', '0.1ct', 'Rs. 59,564', ''],
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
export const TrackTableVariables = [
  {
    tableTitle: '',
    tableHead: ['Date & Time', 'Status', 'Comment'],
    tableData: [
      [
        'February 04, 2020 | 02:52 PM',
        'Pending',
        'Order Initiated, Waiting for Confirmation',
      ],
      ['February 04, 2020 | 02:52 PM', 'Confirmed', 'Order Confirmed'],
      [
        'February 04, 2020 | 02:52 PM',
        'Ready for Pickup',
        'Order is Ready for Pickup',
      ],
      [
        'February 04, 2020 | 02:52 PM',
        'Pending',
        'Order Initiated, Waiting for Confirmation',
      ],
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

export const CheckoutTableVariables = [
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
    ],
    tableData: [
      [
        <Image
          source={require ('../assets/images/product6.png')}
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
      ],
      [
        <Image
          source={require ('../assets/images/product6.png')}
          style={{
            margin: 2,
            width: wp ('10%'),
            height: hp ('6.5%'),
          }}
        />,
        ,
        '10.2g',
        '10.2g',
        '10.2g',
        '75.5%',
        '75.5%',
        'Rs. 59,564',
      ],
      ['Total wt', '', '5gm', '4.5gm', '', '0.1ct', 'Rs. 59,564'],
    ],
    button: [
      {
        buttonTitle: 'Complete Order',
        align: 'center',
        path: 'OrderConfirmation',
      },
    ],
  },
];
export const PendingOrdersTableVariables = [
  {
    tableTitle: '',
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
      [
        <Image
          source={require ('../assets/images/product6.png')}
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
      ],
      [
        <Image
          source={require ('../assets/images/product6.png')}
          style={{
            margin: 2,
            width: wp ('10%'),
            height: hp ('6.5%'),
          }}
        />,
        ,
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
      ],
      ['Total wt', '', '5gm', '4.5gm', '', '0.1ct', 'Rs. 59,564', ''],
    ],
    button: [
      {
        buttonTitle: 'Back to MyAccount',
        align: 'center',
        path: 'MyAccount',
      },
    ],
  },
];

export const BottomTableContent = [
  {
    label: `Total Fine Wt`,
    value: '3.7gm',
  },
  {
    label: `Gold Bhaav (Without GST)`,
    value: '40000 INR',
  },
  {
    label: 'Diamond Charges',
    value: '1000 INR',
  },
  {
    label: 'Total(incl. 3% GST)',
    value: '16,274 INR',
  },
  {
    label: 'Logistic Charges(hub) incl. GST',
    value: '590 INR',
  },
  {
    label: 'Insurance Charges incl. GST',
    value: '19 INR',
  },
  {
    label: 'Grand Total',
    value: '16,883 INR',
  },
];
export const AttachPOPContent = [
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
  {
    orderId: {
      label: 'Order Id',
      value: 'BMJ-1111111',
    },
    orderAmount: {
      label: 'Order Amount',
      value: '400000 INR',
    },
    orderStatus: {
      label: 'Order Status',
      value: 'Pending',
    },
  },
];

export const NotificationsVariable = [
  {
    text: 'Dear Retailer, for the verification of your jewellery, you can enter the jewelry card number in our website anytime. Link: https://www.buymyjewel.com/index.php?route=product/card',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
  {
    text: 'Dear Retailer, kindly collect your festival vouchors from BMJ. Please coordinate with your ASM regarding the same',
  },
];

export const PolicyVariables = [
  {
    text: 'Payment Policy',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Return, Refund and Cancellation Policy',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Shipping & Delivery',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Privacy Policy',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Terms of Use',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Disclaimer',
    path: 'PrivacyPolicy',
  },
  {
    text: 'Frequently Asked Questions',
    path: 'PrivacyPolicy',
  },
];
