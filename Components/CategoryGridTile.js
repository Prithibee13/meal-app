import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const CategoryGridTile = (props) =>
{
    const {title , color , press} = props
    return (
        <View style={styles.gridData}>
            <Pressable android_ripple={{color : '#AEBDCA'}} onPress={press}  style={styles.button}>
                <View style={[styles.innerContainer , {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;


const styles = StyleSheet.create({
    gridData : {
        flex : 1,
        margin : 20,
        height : 200,
        borderRadius : 12,
        elevation :10

    },

    button : {
        flex : 1
    },

    innerContainer : {
        flex:1,
        padding : 20,
        justifyContent : 'center',
        borderRadius : 12,
        alignItems :'center'
    },
    title : 
    {
        fontWeight : 'bold',
        fontSize : 20
    }
})