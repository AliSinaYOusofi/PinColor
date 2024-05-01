import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Database from '../global/Database'
import RemoveFromFavourties from '../components/RemoveFromFavourties';
import GoFullScreen from '../components/GoFullScreen';
import HexColorView from '../components/HexColorView';
import ChangeLayoutOnFavColors from '../components/ChangeLayoutOnFavColors';
import NoFavoritesComponent from '../components/NoFavColors';
export default function FavouriteColors() {
    
    const [colors, setColors] = useState([]);
    const [pressableStyle, setPressableStyle] = useState()
    const [currentLayout, setCurrentLayout] = useState(false);
    const [containerStyle, setContainerStyle] = useState();
    const [refresh, setRefresh] = useState(false);

    const navigation = useNavigation();

    const fetchColors = () => {

        Database.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM colors',
                [],
                (_, { rows }) => {
                    setColors(rows._array);
                },
                (_, error) => {
                    console.error('Error fetching colors:', error);
                }
            );
        });
    };
    
    useEffect(() => {
        fetchColors();
    }, [refresh]);

    const navigateToDisplayColors = (color) => {
        navigation.navigate('displaycolors', { color });
    };

    const handleChangeLayout = () => {
        let containerStyle;
        let pressableStyle;
    
        switch (currentLayout) {
            case true:
                containerStyle = {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    
                };
                pressableStyle = {
                    width: "100%",
                    height: "100%",
                };
                break;
    
            case false:
                containerStyle = {
                    flex: 1,
                    flexDirection: 'column',
                    paddingHorizontal: 10,
                    
                    flexWrap: "wrap"
                };
                
                pressableStyle = {
                    flex: 1,
                    width: "100%",
                };
                break;
        }
    
        return { containerStyle, pressableStyle };
    };
    
    useEffect(() => {
        
        const { containerStyle, pressableStyle } = handleChangeLayout();
        setContainerStyle(containerStyle);
        setPressableStyle(pressableStyle);
    
    }, [currentLayout]);
    
    if (!colors.length) return <NoFavoritesComponent />


    return (
        <>
            <FlatList
                data={colors}
                renderItem={({ item }) => (
                    <View style={[ styles.row, containerStyle ]}>
                        <Pressable
                            style={[styles.color_view, { backgroundColor: item.color, ...pressableStyle, height: currentLayout ? 200 : 400 }]}
                            onPress={() => navigateToDisplayColors(item.color)}
                        >
                            <RemoveFromFavourties 
                                color={item.color}
                                onRefresh={() => setRefresh(prev => ! prev)} 
                            />
                            <GoFullScreen color={item.color}/>
                            <HexColorView hex={item.color} />
                        </Pressable>

                    </View>
                )}
                keyExtractor={(item, index) => item.id}
                numColumns={1}
            />

            <ChangeLayoutOnFavColors onLayout={() =>
                    setCurrentLayout((prevLayout) => ! prevLayout)
                }
            />
        </>
    );
}

const styles = StyleSheet.create({
    
    color_view: {
        flex: 1,
        height: 100,
        margin: 4,
        borderRadius: 10,
        position: 'relative'
    },
    
    row: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center',
    },
});
