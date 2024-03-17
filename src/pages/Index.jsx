import React, { useState } from "react";
import { Box, Heading, Text, VStack, Grid, Image, Button, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const menuItems = [
  {
    name: "Cakes",
    items: ["Chocolate Cake", "Vanilla Cake", "Strawberry Cake", "Red Velvet Cake"],
  },
  {
    name: "Seafood",
    items: ["Seafood Boil", "Shrimp Salad"],
  },
  {
    name: "Chicken",
    items: ["Fried Chicken", "Grilled Chicken", "Orange Chicken with Rice"],
  },
  {
    name: "Burgers & Pizzas",
    items: ["Cheeseburger", "Veggie Burger", "Pepperoni Pizza", "Margherita Pizza"],
  },
  {
    name: "Sides & Drinks",
    items: ["French Fries", "Mac and Cheese with Sausage", "Ramen Noodles with Egg", "Soda", "Iced Tea"],
  },
  {
    name: "Desserts & Snacks",
    items: ["Ice Cream", "Chocolate Chip Cookies", "Potato Chips", "Pretzels"],
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Box>
      <Box bg="gray.100" p={4}>
        <Heading size="xl">Delicious Delights</Heading>
        <Text fontSize="xl">Order all your favorite foods in one place!</Text>
      </Box>
      <Tabs>
        <TabList>
          {menuItems.map((menu) => (
            <Tab key={menu.name}>{menu.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {menuItems.map((menu) => (
            <TabPanel key={menu.name}>
              <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
                {menu.items.map((item) => (
                  <Box key={item} borderWidth={1} borderRadius="lg" p={4}>
                    <VStack>
                      <Image src={`https://images.unsplash.com/photo-1577401239170-897942555fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JpdGVtJTdEfGVufDB8fHx8MTcxMDcwODc1NHww&ixlib=rb-4.0.3&q=80&w=1080`} alt={item} />
                      <Heading size="md">{item}</Heading>
                      <Button colorScheme="blue" size="sm" onClick={() => addToCart(item)}>
                        Add to Cart
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Box position="fixed" bottom={4} right={4}>
        <Button colorScheme="green" size="lg">
          <FaShoppingCart /> Cart ({cart.length})
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
