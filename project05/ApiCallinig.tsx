import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  const ApiCalling = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      apiCall();
    }, []);
  
    const apiCall = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.heading, styles.center]}>
          This is sameers's first app
        </Text>
        <ScrollView style={styles.scrollContainer} horizontal={true}>
          {/* Cards... */}
          <View style={[styles.imageCard]}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI6tS6siBZ5mTgLz4kPAvXQ5mgsoHkEBg5Dsw7jytC50PTjOHo0eVu8hHuW8JoS7DdKH0" // Replace with your image URL
              }}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Click me 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Click me 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.dataContainer}>
          {data.map((userData, index) => (
            <View key={index} style={styles.userDataContainer}>
              <Text style={styles.userDataText}>{(userData.login)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    },
    scrollContainer: {
      marginTop: 60,
      paddingLeft: 30,
      paddingRight: 30
    },
    heading: {
      fontSize: 30,
      marginTop: 20,
      color: "#1BCA9B",
      fontWeight: "600"
    },
    center: {
      textAlign: "center"
    },
    image: {
      height: 200,
      width: 200,
      borderRadius: 10
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 20
    },
    button: {
      backgroundColor: "#1BCA9B",
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 5
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold"
    },
    imageCard: {
      flex: 1,
      height: 300,
      width: 250,
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      marginRight: 30,
      borderWidth: 1,
      borderColor: "thistle",
      borderRadius: 50
    },
    dataContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center"
    },
    userDataContainer: {
      margin: 5,
      padding: 10,
      backgroundColor: "#1BCA9B",
      borderRadius: 10
    },
    userDataText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
  
  export default ApiCalling;
  