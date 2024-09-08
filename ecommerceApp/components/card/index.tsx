import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '../../constants/images'
import { Colors } from '../../constants/colors'
import { normalize } from '../../utils/globalStyles'


const { width, height } = Dimensions.get("window")

interface CardsProps {
    // onSelected: (title: string) => void;
    onPressCard: () => void;
    isGrid: boolean,
    imageUrl: String,
    rating: Number,
    price: String,
    title: String,
    description: String,
}

const Card = ({ isGrid, imageUrl, rating, price, title, description, onPressCard }: CardsProps) => {


    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <View style={styles.starsContainer}>
                {[...Array(fullStars)].map((_, index) => (
                    <Image key={`full-${index}`} resizeMode='contain' source={images.iconStarYellow} style={styles.star} />
                ))}
                {hasHalfStar && (
                    <Image key="half" resizeMode='contain' source={images.iconStar} style={styles.star} />
                )}
                {[...Array(emptyStars)].map((_, index) => (
                    <Image key={`empty-${index}`} resizeMode='contain' source={images.iconStar} style={styles.star} />
                ))}
            </View>
        );
    };

    return isGrid ? (
        <TouchableOpacity onPress={onPressCard} style={[styles.itemContainerRow]}>
            <View style={{
                flexDirection: "row",
                flex: 1
            }}>
                <View style={{
                    width: "30%",
                    paddingRight: 10
                }}>
                    <Image source={imageUrl} style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5
                    }} />
                </View>
                <View style={{
                    width: "70%",
                    paddingVertical: 5
                }}>
                    <View>
                        {renderStars(rating)}
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                    }}>
                        <Text style={styles.description}>{description}</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{
                    position: "absolute",
                    right: -1,
                    bottom: -10,
                    zIndex: 100
                }}>
                    <View style={styles.heartContainer}>
                        <Image source={images.iconFavoriteHeart} style={{
                            width: 25,
                            height: 25,
                        }} resizeMode='contain' />
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity style={styles.itemContainerGrid}>
            <View style={styles.gridContainer}>
                <View >
                    <Image source={imageUrl}
                        style={{
                            width: "100%",
                            height: height / 3.5,
                            borderRadius: 5,
                        }} />
                    <TouchableOpacity style={{
                        position: "absolute",
                        right: -2,
                        bottom: -20,
                        zIndex: 100,
                    }}>
                        <View style={styles.heartContainer}>
                            <Image source={images.iconFavoriteHeart} style={{
                                width: 25,
                                height: 25,
                            }} resizeMode='contain' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {renderStars(rating)}
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: "space-evenly",
                    flexDirection: "column",
                }}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    itemContainerGrid: {
        flex: 0.5,
    },
    itemContainerRow: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
        marginVertical: 10,
        height: normalize(100),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    gridContainer: {
        flex: 1,
        paddingBottom: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 5
    },
    rating: {
        fontSize: 14,
        color: '#444',
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    star: {
        width: 20,
        height: 20,
        marginRight: 2,
    },
    heartContainer: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})

