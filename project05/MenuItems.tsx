import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import Footer from './Footer';

type MenuItem = {
  title: string;
  data: string[];
};

type ItemProps = {
  name: string;
};

const menuItemsToDisplay: MenuItem[] = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
    {
      title: 'Beverages',
      data: ['Soda', 'Lemonade', 'Iced Tea', 'Coffee', 'Smoothies'],
    },
    {
      title: 'Specials',
      data: ['Chef Special', 'Seasonal Delight', 'Signature Dish'],
    },
    {
      title: 'Breakfast',
      data: ['Pancakes', 'Eggs Benedict', 'Omelette', 'French Toast'],
    },
    {
      title: 'Non-Vegetarian',
      data: ['Chicken Curry', 'Beef Biryani', 'Fish Tandoori', 'Lamb Kebab'],
    },
    {
      title: 'Indian Vegetarian',
      data: ['Paneer Tikka', 'Aloo Gobi', 'Dal Makhani', 'Palak Paneer'],
    },
    // Add more sections and items as needed
  ];
  

const Item: React.FC<ItemProps> = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const Separator: React.FC = () => <View style={menuStyles.separator} />;



const MenuItems: React.FC = () => {
  const renderItem = ({ item }: { item: string }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }: { section: MenuItem }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
      />
      {/* <Footer/> */}
    </View>
  );
};

// Add styles to the component
const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
    height: '100%',
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  
});

export default MenuItems;
