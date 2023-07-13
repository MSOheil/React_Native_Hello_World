

import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


export default function Cmp_Tasks(props: { takeName: string }) {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.squars} />
                <Text style={styles.itemText}>{props.takeName}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: 'center',
        columnGap: 5,
        flexWrap: 'wrap',
    },
    squars: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        backgroundColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});