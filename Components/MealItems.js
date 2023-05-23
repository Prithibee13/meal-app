import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
const MealItems = (props) => {
    const { title , imageUrl , time , complexity , afford } = props

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color : '#C1D0B5'}}>
                <View>
                    <Image style={styles.image} source={{ uri : imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsItem}>{time}</Text>
                    <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsItem}>{afford.toUpperCase()} </Text>
                </View>
            </Pressable>
        </View>
    );
};

export default MealItems;


const styles = StyleSheet.create({

    mealItem : {
        margin : 20,
        borderRadius : 16,
        overflow : 'hidden',
        backgroundColor : '#E0E0E0',
        elevation : 10,
        
    }
    ,image : {
        height : 300,
        width : '100%',
        borderRadius : 20,
    },
    title : {
        fontWeight : 'bold',
        textAlign :'center',
        fontSize : 20,
        margin:10
    },
    details : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent:'center',
        padding : 10
    },
    detailsItem : {
        marginHorizontal :8,
        fontSize : 15      
    }
})