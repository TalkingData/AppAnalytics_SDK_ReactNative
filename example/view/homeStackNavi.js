import React from 'react';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import {HomeScreen} from './homeView.js'
import {DetailsScreen} from './detailView.js'
import {DeviceIdScreen} from './deviceid/deviceidView.js'
import {GeoScreen} from './geo/geo.js'
import {PageScreen} from './onpage/onpage.js'
import {AccountScreen} from './account/account.js'
import {Tab2Screen} from './tab2/tab2.js'
import {Tab3Screen} from './tab3/tab3.js'
import {Tab4Screen} from './tab4/tab4.js'
import Ionicons from 'react-native-vector-icons/AntDesign';
import {OrderScreen} from "./iap/orderView";
import {OrderPaySuccessScreen} from "./iap/orderPayView";
import {ViewItemScreen} from "./iap/viewItemView";
import {AddItemScreen} from "./iap/addItemView";
import {ViewShoppingCartScreen} from "./iap/viewShoppingCart";
import {EventScreen} from "./event/eventView";
import {KVScreen} from "./kv/kv";

//adt view
import {ADTDeviceIdScreen} from "./adtracking/adt_deviceid/adtDeviceView";
import {ADTRegisterScreen} from "./adtracking/adt_on_register/adtAccount"
import {ADTCreateRoleScreen} from "./adtracking/adt_createrole/adtCreateRole"
import {ADTOnPayScreen} from "./adtracking/adt_onpay/adtOnPay"
import {ADTOnPayWithItemScreen} from "./adtracking/adt_onpay/adtOnPayWithItem"
import {ADTOnPayWithOrderScreen} from "./adtracking/adt_onpay/adtOnPayWithOrder"
import {ADTViewShoppingCartScreen} from "./adtracking/adt_shoppingcart/adt_viewShoppingCart"
import {ADTAddItemScreen} from "./adtracking/adt_onadditemto_shoppingcart/adt_addItemView"
import {ADTViewItemScreen} from "./adtracking/adt_viewitem/adt_viewItemView"
import {ADTOnPlaceOrderScreen} from "./adtracking/adt_onplaceorder/adt_orderView"
import {ADTOnOrderPaySuccessScreen} from "./adtracking/adt_onorderpaysuccess/adt_onOrderPaySucc"
import {ADTOnCustomScreen} from "./adtracking/adt_customevent/adt_oncustomevent"
import {ADTAdSearchScreen} from "./adtracking/adt_adsearch/adtAdSearch"

//定义一个变量，存储StackNav 也就是栈导航的构造方法，Home是参数，screen对应的是上边的homeViewController
// const RootStack = StackNavigator({
//   Home : HomeScreen,
// });

function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
}


export const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        DeviceId: DeviceIdScreen,
        Geo: GeoScreen,
        KV:KVScreen,
        Account: AccountScreen,
        Event:EventScreen,
        OnPage: PageScreen,
        Order: OrderScreen,
        OrderPaySucc: OrderPaySuccessScreen,
        ViewItem: ViewItemScreen,
        AddItem: AddItemScreen,
        ViewShoppingCart: ViewShoppingCartScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4f5f6',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export const Tab2Nav = createStackNavigator(
    {
        Home: Tab2Screen,
        ADTDeviceId:ADTDeviceIdScreen,
        ADTRegister:ADTRegisterScreen,
        ADTCreateRole:ADTCreateRoleScreen,
        ADTCreateRole:ADTCreateRoleScreen,
        ADTOnPay:ADTOnPayScreen,
        ADTOnPayWithItem:ADTOnPayWithItemScreen,
        ADTOnPayWithOrder:ADTOnPayWithOrderScreen,
        ADTOnViewShoppingCart:ADTViewShoppingCartScreen,
        ADTOnViewShoppingCart:ADTViewShoppingCartScreen,
        ADTOnAddItemToShoppingCart:ADTAddItemScreen,
        ADTOnViewItem:ADTViewItemScreen,
        ADTOnPlaceOrder:ADTOnPlaceOrderScreen,
        ADTOnOrderPaySuccess:ADTOnOrderPaySuccessScreen,
        ADTOnCustomEvent:ADTOnCustomScreen,
        ADTAdSearch:ADTAdSearchScreen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4f5f6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export const Tab3Nav = createStackNavigator(
    {
        Home: Tab3Screen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4f5f6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export const Tab4Nav = createStackNavigator(
    {
        Home: Tab4Screen,
        // Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4f5f6',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


export const RootTab = createBottomTabNavigator(
    {
        AppAnalytics: RootStack,
        AdTracking: Tab2Nav,
        EAuth: Tab3Nav,
        // tab4: Tab4Nav,

    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                var iconsize = 25;
                let iconName;
                if (routeName === 'AppAnalytics') {
                    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    iconName = `barschart`;
                    iconsize = 25;
                } else if (routeName === 'AdTracking') {
                    iconName = `laptop`;
                    iconsize = 25;
                } else if (routeName === 'EAuth') {
                    iconName = `codesquareo`;
                    iconsize = 20;
                } else if (routeName === 'tab4') {
                    iconName = `logo-python`;
                    iconsize = 25;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={iconsize} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#5badff',
            inactiveTintColor: 'gray',
        },
    }
);