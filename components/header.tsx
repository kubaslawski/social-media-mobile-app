import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <View style={styles.headerLinkContainer}>
                    <Text style={styles.headerLink}>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.headerLinkContainer}>
                    <Text style={styles.headerLink}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.headerLinkContainer}>
                    <Text style={styles.headerLink}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 80,
        paddingTop: 38,
        backgroundColor: "#3f50b5",
    },
    headerLinkContainer: {
        margin: "auto",
    },
    headerLink: {
        color: "#fff",
        fontSize: 18,
    },
});

export default Header;