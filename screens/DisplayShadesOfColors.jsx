import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import shadesOfYellow from '../colors/ShadesOfYellow';
import shadesOfWheat from '../colors/ShadesOfWheat';
import shadesOfWhite from '../colors/ShadesOfWhite';
import shadesOfRed from '../colors/ShadesOfRed';
import shadesOfPurple from '../colors/ShadesOfPurple';
import shadesOfPink from '../colors/ShadesOfPink';
import shadesOfOrange from '../colors/ShadesOfOrange';
import shadesOfGreen from '../colors/ShadesOfGreen';
import shadesOfBlue from '../colors/ShadesOfBlue';
import shadesOfGrey from '../colors/ShadesOfGray';
import AddToFavourties from '../components/AddToFavourties';
import GoFullScreen from '../components/GoFullScreen';
import HexColorView from '../components/HexColorView';

export default function DisplayShadesOfColors({ route }) {

    const { color } = route.params;
    const [shadesList, setShadesList] = useState([]);
    const [currentDisplayColor, setCurrentDisplayColor] = useState(color);
    
    useEffect( () => {
        const loadShadesBasedOnHex = () => {
            switch (color) {
                
                case '#0000FF':
                    setShadesList(shadesOfBlue)
                    break;
                case '#808080':
                    setShadesList(shadesOfGrey)
                    break;
                case '#008000':
                    setShadesList(shadesOfGreen);
                    break;
                case '#FFA500':
                    setShadesList(shadesOfOrange);
                    break;
                case '#FFC0CB':
                    setShadesList(shadesOfPink);
                    break;
                case '#800080':
                    setShadesList(shadesOfPurple);
                    break;
                case '#FF0000':
                    setShadesList(shadesOfRed);
                    break;
                case '#fffafa':
                    setShadesList(shadesOfWheat);
                    break;
                case '#fffafa':
                    setShadesList(shadesOfWhite)
                    break;
                case '#FFFF00':
                    setShadesList(shadesOfYellow);
                    break;
                default:
                    setShadesList([]);
                    break;
            }
        }
        loadShadesBasedOnHex();
    })

    return (
        <View style={styles.container}>
            
            <View style={[styles.bigColorDisplay, { backgroundColor: currentDisplayColor, borderRadius: 20 }]}>
                <AddToFavourties color={currentDisplayColor}/>
                <GoFullScreen color={currentDisplayColor} />
                <HexColorView hex={currentDisplayColor}/>
            </View>

            <FlatList
                horizontal
                style={styles.flat_list}
                contentContainerStyle={styles.smallColorGallery}
                data={shadesList}
                renderItem={({ item }) => (
                    <Pressable onPress={() => setCurrentDisplayColor(item)}>
                        <View style={[styles.colorBox, { backgroundColor: item }]}>
                            <GoFullScreen color={item}/>
                        </View>
                    </Pressable>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'

    },
    
    colorBox: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginHorizontal: 5,
        position: 'relative',
    },
    
    bigColorDisplay: {
        width: 350,
        height: "80%",
        borderRadius: 10,
       
        marginBottom: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    smallColorGallery: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },

    flat_list: {
        position: "absolute",
        bottom: 10
    }
});
