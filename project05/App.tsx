import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MenuItems from "./MenuItems";
import Header from "./Header";

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
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const App: React.FC = () => {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} />
  );

  return (
    <View style={menuStyles.container}>
      <Header/>
      <Text style={menuStyles.headerText}>View Menu</Text>
      {/* <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      /> */}
      <MenuItems />
    </View>
  );
};

const menuStyles = StyleSheet.create({
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
  }
});

export default App;
