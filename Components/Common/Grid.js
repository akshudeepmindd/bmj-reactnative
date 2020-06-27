import React from 'react';
import {FlatList, View, Text, StyleSheet, Image} from 'react-native';
import GridTemplate from './GridTemplate';
import DashboardGridTemplate from './DashboardGrid';
export default function GridView (props) {
  return (
    <View style={styles.MainContainer}>
      <FlatList
        contentContainerStyle={{alignItems: 'center'}}
        data={props.listData}
        numColumns={props.columns}
        renderItem={({item}) => {
          return props.screen == 'dashboard'
            ? <DashboardGridTemplate
                image={item.img}
                text={item.name}
                columns={props.columns}
                path={item.path}
                {...props}
              />
            : <GridTemplate
                image={item.img || item.imagePath}
                text={item.imageCaption || item.name}
                purity={item.purity || ''}
                subcategoryName={"diamond"}
                categoryName={item.categoryName}
                subcategoryName={item.subCategoryName}
                columns={props.columns}
                dynamic={props.dynamic}
                {...props}
              />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
