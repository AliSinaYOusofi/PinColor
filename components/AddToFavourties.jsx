import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity, StyleSheet} from 'react-native'

export default function AddToFavourties() {

    const addColorToFavourites = () => {
        
    }

    return (
        <>

            <TouchableOpacity onPress={addColorToFavourites} style={styles.iconContainer}>
                <Ionicons name="heart-outline" size={24} color="black" />
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        position: 'absolute',
        bottom: 3,
        right: 3,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 5,

    },
})