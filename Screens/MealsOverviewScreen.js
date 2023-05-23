import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import MealItems from '../Components/MealItems';
import { MEALS } from '../data/ModelData';

const MealsOverviewScreen = ({ route }) => 
{

    const id = route.params.categoryId

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(id)>=0)

    const renderMealItem = (itemData) =>{

        const ourItem = itemData.item 
        return <MealItems title = {ourItem.title} imageUrl = {ourItem.imageUrl} time = {ourItem.duration} complexity= {ourItem.complexity} afford = {ourItem.affordability} />   
    }

    return (
        <View style={styles.container}>
           <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem = {renderMealItem}/>
        </View>
    );
};

export default MealsOverviewScreen;


const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding: 20
    }
})