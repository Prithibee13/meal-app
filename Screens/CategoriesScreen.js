import React from 'react';
import {  FlatList } from 'react-native';
import CategoryGridTile from '../Components/CategoryGridTile';
import { CATEGORIES } from '../data/ModelData';



const CategoriesScreen = ({navigation}) => {

    const renderCategoryitem = (item) => 
{
    const pressHandler =() =>
    {
        navigation.navigate('MealOverview' , {
            categoryId : item.id
        })
    }
    return <CategoryGridTile title ={item.title} color ={item.color} press={pressHandler}/>
}


    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={({item}) => renderCategoryitem(item)}  numColumns={2}/>
        

};

export default CategoriesScreen;