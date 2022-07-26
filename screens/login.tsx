import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
// icons
import {AntDesign} from '@expo/vector-icons';
import {TextInput} from "@react-native-material/core";
// interfaces
import {ILoginUserData} from "../utils/interfaces";


export default function Login() {
    
    const [userData, setUserData] = useState<ILoginUserData>({
        email: "",
        password: "",
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.twitterLogoContainer}>
                <AntDesign name={"twitter"} size={120} color={"#03a9f4"} style={styles.twitterLogo}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View>
            
            </View>
            <View style={styles.inputsContainer}>
                <TextInput
                    label={"Email"}
                    onChangeText={(val) => setUserData({...userData, email: val})}
                    style={styles.input}
                    variant={"standard"}
                />
                <TextInput
                    label={"Password"}
                    onChangeText={(val) => setUserData({...userData, password: val})}
                    secureTextEntry={true}
                    style={styles.input}
                    variant={"standard"}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    twitterLogoContainer: {
        alignItems: "center",
    },
    twitterLogo: {
        paddingTop: 50,
    },
    titleContainer: {
        alignItems: "center",
    },
    title: {
        paddingTop: 40,
        fontSize: 36,
    },
    inputsContainer: {
        marginRight: 50,
        marginLeft: 50,
    },
    input: {
        marginTop: 20,
    },
});
