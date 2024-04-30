import React, {useCallback} from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

import { PROFILE } from "../constants/Routing";
import { colors } from "../constants/Colors";

export const User = () => {
	const {navigate} = useNavigation();

	const handlePress = useCallback(() => navigate(PROFILE), [navigate]);

    return(
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.7}>
			<Icon name='user-circle' size={16} color={colors.white}/>
            <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderRadius: 10,
		rowGap: 4,
		backgroundColor: colors.darkBlue,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 13,
		color: colors.white,
	},
})