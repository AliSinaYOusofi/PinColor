
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HexColorView from '../components/HexColorView';
import GoFullScreen from '../components/GoFullScreen';
import UtilsButton from '../components/UtilsButton';

export default function Page() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [currentLayout, setCurrentLayout] = useState('three_row_items');
    
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
            case 'two_row_items':
                containerStyle = {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    
                };
                pressableStyle = {
                    width: "50%",
                    height: "50%",
                };
                break;
    
            case 'one_column':
                containerStyle = {
                    flexDirection: 'column',
                    paddingHorizontal: 0,
                    
                    flexWrap: "wrap"
                };
                pressableStyle = {
                    width: "100%",
                    height: "100%",
                };
                break;
    
            default:
                containerStyle = {
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    
                };
                pressableStyle = {
                    width: "50%",
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

    console.log(containerStyle)
    console.log(pressableStyle)
    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.row, containerStyle]}>
                        <Pressable
                            style={[styles.color_view, { backgroundColor: item.color1, pressableStyle, height: item.size }]}
                            onPress={() => navigateToDisplayColors(item.color1)}
                        >
                            <HexColorView hex={item.color1} />
                            <GoFullScreen color={item.color1} />
                        </Pressable>

                        <Pressable
                            style={[styles.color_view, { backgroundColor: item.color2, pressableStyle, height: item.size }]}
                            onPress={() => navigateToDisplayColors(item.color2)}
                            
                        >
                            <HexColorView hex={item.color2} />
                            <GoFullScreen color={item.color2} />
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
                    setCurrentLayout((prevLayout) => {
                        switch (prevLayout) {
                            case 'two_row_items':
                                return 'three_row_items';
                            case 'three_row_items':
                                return 'one_column';
                            case 'one_column':
                            default:
                                return 'two_row_items';
                        }
                    })
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
