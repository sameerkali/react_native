import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import MenuItems from "./MenuItems";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

type MenuItem = {
  name: string;
  id: string;
};
type ItemProps = {
  name: string;
};

const menuItemsToDisplay: MenuItem[] = [
  { name: "Hummus", id: "1A" },
  { name: "Moutabal", id: "2B" },
  { name: "Falafel", id: "3C" },
  { name: "Marinated Olives", id: "4D" },
  { name: "Kofta", id: "5E" },
  { name: "Eggplant Salad", id: "6F" },
  { name: "Lentil Burger", id: "7G" },
  { name: "Smoked Salmon", id: "8H" },
  { name: "Kofta Burger", id: "9I" },
  { name: "Turkish Kebab", id: "10J" },
  { name: "Fries", id: "11K" },
  { name: "Buttered Rice", id: "12L" },
  { name: "Bread Sticks", id: "13M" },
  { name: "Pita Pocket", id: "14N" },
  { name: "Lentil Soup", id: "15O" },
  { name: "Greek Salad", id: "16Q" },
  { name: "Rice Pilaf", id: "17R" },
  { name: "Baklava", id: "18S" },
  { name: "Tartufo", id: "19T" },
  { name: "Tartufo", id: "20U" },
  { name: "Tiramisu", id: "21V" },
  { name: "Panna Cotta", id: "22W" }
];

const Item: React.FC<ItemProps> = ({ name }) => (
  <View style={styles.innerContainer}>
    <Text style={styles.itemText}>{name}</Text>
  </View>
);

const App: React.FC = () => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} />
  );

  return (
    // <View style={menuStyles.container}>
    //   <Header/>
    //   <Text style={menuStyles.headerText}>View Menu</Text>
    //   {/* <FlatList
    //     data={menuItemsToDisplay}
    //     keyExtractor={(item) => item.id}
    //     renderItem={renderItem}
    //   /> */}
    //   <MenuItems />
    //   <Footer/>
    // </View>
    <Login />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%"
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "black"
  },
  headerText: {
    color: "gray",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center"
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 36
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#F4CE14"
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#F4CE14"
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57"
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57"
  }
});

export default App;
