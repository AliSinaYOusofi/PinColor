
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HexColorView from '../components/HexColorView';
import GoFullScreen from '../components/GoFullScreen';
import UtilsButton from '../components/UtilsButton';
import AddToFavourties from '../components/AddToFavourties';

export default function Page() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [currentLayout, setCurrentLayout] = useState(false);
    
    const [pressableStyle, setPressableStyle] = useState()
    
    const [containerStyle, setContainerStyle] = useState();

    const navigation = useNavigation();

    const generateRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const generateRandomSize = () => {
        const width = 100;
        const heightMultiplier = 2;
        return width * heightMultiplier;
    };

    const generateRandomItem = () => {
        return {
            key: String(Math.random()),
            color1: generateRandomColor(),
            color2: generateRandomColor(),
            size: generateRandomSize(),
        };
    };

    const loadMoreData = () => {
        const newData = Array.from({ length: 3 }, () => generateRandomItem());
        setData([...data, ...newData]);
    };

    useEffect(() => {
        const initialData = Array.from({ length: 3 }, () => generateRandomItem());
        setData(initialData);
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
                    width: "50%",
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
                    flex: 1, // Take up all available space
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
    
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.row, containerStyle]}>
                        <Pressable
                            style={[styles.color_view, { backgroundColor: item.color1, ...pressableStyle, height: item.size }]}
                            onPress={() => navigateToDisplayColors(item.color1)}
                        >
                            <HexColorView hex={item.color1} />
                            <GoFullScreen color={item.color1} />
                            <AddToFavourties color={item.color1}/>
                        </Pressable>

                        <Pressable
                            style={[styles.color_view, { backgroundColor: item.color2, ...pressableStyle, height: item.size }]}
                            onPress={() => navigateToDisplayColors(item.color2)}
                            
                        >
                            <HexColorView hex={item.color2} />
                            <GoFullScreen color={item.color2} />
                            <AddToFavourties color={item.color2}/>
                        </Pressable>
                    </View>
                )}
                keyExtractor={(item) => item.key}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.1}
                numColumns={1}
            />

            <UtilsButton
                onRefresh={setRefresh}
                onLayout={() =>
                    setCurrentLayout((prevLayout) => ! prevLayout)
                }
            />
        </>
    );
}


const styles = StyleSheet.create({
    row: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: 'center'
    },

    color_view: {
        flex: 1,
        borderRadius: 10,
        margin: 4,
        position: 'relative'
    }
});
