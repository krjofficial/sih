import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Image, 
} from "react-native";
import PieChart from "react-native-pie-chart";




const widthAndHeight = 180;
const series = [8, 5, 2];
const sliceColor = ['#A6B7D4', '#FF92AE', '#4C6FFF'];

const StaffDashboard = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        <View style={{ padding: 16 }}>
          {/* Dashboard Title */}
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
            Staff Dashboard
          </Text>

         

          {/* OPD Insights */}
          <View style={styles.opdcontainer}>
            <Text style={styles.title}>OPD Insights</Text>
            <View style={styles.row}>
              <View style={styles.column2}>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b274091-8210-460c-a998-407e1c48799d",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"8"}</Text>
                </View>
                <Text style={styles.text3}>{"Beds available"}</Text>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27306837-cfbe-483b-a06a-8589c65dc12e",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"5"}</Text>
                </View>
                <Text style={styles.text3}>{"Wards available"}</Text>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17152371-dd4b-4ef1-ab6f-c3ca7d68f359",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"2"}</Text>
                </View>
                <Text style={styles.text4}>{"Beds not in use"}</Text>
              </View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.7}
                coverFill={"#FFF"}
              />
            </View>
          </View>
          {/* IPD Insights */}
          <View style={styles.ipdcontainer}>
            <Text style={styles.title}>IPD Insights</Text>
            <View style={styles.row}>
              <View style={styles.column2}>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b274091-8210-460c-a998-407e1c48799d",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"8"}</Text>
                </View>
                <Text style={styles.text3}>{"Beds available"}</Text>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27306837-cfbe-483b-a06a-8589c65dc12e",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"5"}</Text>
                </View>
                <Text style={styles.text3}>{"Wards available"}</Text>
                <View style={styles.row2}>
                  <Image
                    source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17152371-dd4b-4ef1-ab6f-c3ca7d68f359",
                    }}
                    resizeMode={"stretch"}
                    style={styles.image}
                  />
                  <Text style={styles.text2}>{"2"}</Text>
                </View>
                <Text style={styles.text4}>{"Beds not in use"}</Text>
              </View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.7}
                coverFill={"#FFF"}
              />
            </View>
          </View>


{/* Navigate to Policy List */}
        <TouchableOpacity onPress={() => props.navigation.navigate("PolicyList")}>
          <View style={styles.row3}>
					<View style={styles.column3}>
						<Image
							source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b49ab91a-b912-40a4-8b95-a5f3c51fc326"}} 
							resizeMode = {"stretch"}
							style={styles.image2}
						/>
						<Text style={styles.text7}>
							{"Active Programs \nand Policies"}
						</Text>
						<Text style={styles.text8}>
							{"Ongoing Initiatives ->"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7997828-665c-4f33-b60d-e4fc49655308"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
				</View>
        </TouchableOpacity>


         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StaffDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  ipdcontainer: {
    margin: 12,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  opdcontainer: {
    margin: 12,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  column2: {
    width: 72,
  },
  image: {
    width: 8,
    height: 8,
    marginRight: 8,
  },
  text2: {
    color: "#27272E",
    fontSize: 12,
    flex: 1,
  },
  text3: {
    color: "#718096",
    fontSize: 10,
    marginBottom: 27,
  },
  text4: {
    color: "#718096",
    fontSize: 10,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  text7: {
		color: "#000000",
		fontSize: 22,
		marginBottom: 15,
	},
	text8: {
		color: "#4C6FFF",
		fontSize: 12,
		marginHorizontal: 3,
	},
  image2: {
		width: 41,
		height: 40,
		marginBottom: 13,
	},
	image3: {
		width: 132,
		height: 108,
		marginTop: 25,
	},
  column3: {
		width: 171,
  },
  row3: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		backgroundColor: "#FFFFFF",
		borderColor: "#C4C4C433",
		borderRadius: 16,
		borderWidth: 1,
		paddingTop: 17,
		paddingBottom: 42,
		paddingLeft: 17,
		marginBottom: 154,
		marginHorizontal: 14,
	},
});
