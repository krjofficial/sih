import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
			
				<Text style={styles.text2}>
					{"In Patient Department"}
				</Text>
				<Text style={styles.text3}>
					{"Add a new patient"}
				</Text>
				<View style={styles.box}>
				</View>
				<Text style={styles.text4}>
					{"Full Name"}
				</Text>
				<TextInput
					placeholder={"Enter Full name"}
					value={textInput1}
					onChangeText={onChangeTextInput1}
					style={styles.input}
				/>
				<Text style={styles.text5}>
					{"Date of arrival"}
				</Text>
				<TextInput
					placeholder={"Enter Date of arrival"}
					value={textInput2}
					onChangeText={onChangeTextInput2}
					style={styles.input2}
				/>
				<Text style={styles.text6}>
					{"Ward Name"}
				</Text>
				<TextInput
					placeholder={"Type or select the ward"}
					value={textInput3}
					onChangeText={onChangeTextInput3}
					style={styles.input3}
				/>
				<Text style={styles.text7}>
					{"Bed Number"}
				</Text>
				<TextInput
					placeholder={"Enter Bed Number"}
					value={textInput4}
					onChangeText={onChangeTextInput4}
					style={styles.input4}
				/>
				<View style={styles.row2}>
					<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("IpdPatientList")}>
						<Text style={styles.text8}>
							{"Cancel"}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button2} onPress={()=>props.navigation.navigate("IpdPatientList")}>
						<Text style={styles.text9}>
							{"Submit"}
						</Text>
					</TouchableOpacity>
				</View>
			
				
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		height: 1,
		marginBottom: 48,
		marginHorizontal: 33,
	},
	box2: {
		flex: 1,
	},
	button: {
		width: 100,
		alignItems: "center",
		borderColor: "#4C6FFFCC",
		borderRadius: 6,
		borderWidth: 1,
		paddingVertical: 16,
	},
	button2: {
		width: 96,
		alignItems: "center",
		backgroundColor: "#4C6FFFCC",
		borderRadius: 6,
		paddingVertical: 16,
	},
	column: {
		backgroundColor: "#FFFFFF",
		paddingVertical: 17,
		paddingHorizontal: 21,
		marginHorizontal: 1,
		shadowColor: "#63636333",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 2
		},
		shadowRadius: 8,
		elevation: 8,
	},
	image: {
		width: 69,
		height: 11,
	},
	image2: {
		width: 19,
		height: 20,
		marginRight: 55,
	},
	image3: {
		width: 20,
		height: 20,
		marginRight: 53,
	},
	image4: {
		width: 24,
		height: 24,
	},
	input: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 29,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 12,
	},
	input2: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 29,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 14,
		paddingHorizontal: 11,
	},
	input3: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 28,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 16,
		paddingHorizontal: 11,
	},
	input4: {
		color: "#000000",
		fontSize: 12,
		marginBottom: 70,
		marginHorizontal: 32,
		backgroundColor: "#E0E0E0",
		borderColor: "#A8A8A8",
		borderRadius: 8,
		borderWidth: 1,
		paddingVertical: 15,
		paddingHorizontal: 11,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 100,
		marginHorizontal: 25,
	},
	row2: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 76,
		marginHorizontal: 68,
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8,
	},
	row4: {
		flexDirection: "row",
		alignItems: "center",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 17,
	},
	text: {
		color: "#221E1E",
		fontSize: 14,
	},
	text2: {
    color: "#1F2937",           // Use the exact color value
    fontFamily: "Poppins",       // Ensure the "Poppins" font is available in your project
    fontSize: 16,               // Font size as specified
    fontStyle: "normal",        // Normal font style
    fontWeight: "700",          // Bold font weight
    lineHeight: 24,             // Line height of 24px (adjust based on actual screen size)
    textAlign: "center",       // Center the text horizontally
    marginBottom: 1,          // Bottom margin as specified
    marginHorizontal: 86,      // Horizontal margin to create space on both sides
  },
  
  text3: {
    color: "#1F2937",           // Color for the text
    fontFamily: "Poppins",       // Ensure the "Poppins" font is available in your project
    fontSize: 14,               // Font size set to 14px
    fontStyle: "normal",        // Normal font style
    fontWeight: "400",          // Regular font weight
    lineHeight: 24,             // Line height set to 24px (adjusted as per the percentage)
    textAlign: "center",       // Center the text horizontally
    marginBottom: 23,          // Bottom margin as specified
    marginHorizontal: 105,     // Horizontal margin to create space on both sides
  },
	text4: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 4,
		marginLeft: 34,
	},
	text5: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 4,
		marginLeft: 35,
	},
	text6: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 7,
		marginLeft: 33,
	},
	text7: {
		color: "#000000",
		fontSize: 14,
		marginBottom: 5,
		marginLeft: 34,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 16,
	},
	text9: {
		color: "#FFFFFF",
		fontSize: 16,
	},
	text10: {
		color: "#4C6FFF",
		fontSize: 12,
		marginRight: 4,
		flex: 1,
	},
	text11: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 55,
	},
	text12: {
		color: "#7A7979",
		fontSize: 12,
		marginRight: 37,
	},
	text13: {
		color: "#221F1F",
		fontSize: 12,
		marginRight: 27,
	},
	text14: {
		color: "#221F1F",
		fontSize: 12,
	},
});