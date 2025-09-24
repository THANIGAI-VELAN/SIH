import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons"; 

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,       
        tabBarShowLabel: false,   
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 65,
          position: "absolute",
        },
      }}
    >


      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} 
              size={28}
              color={focused ? "#fff" : "#888"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="details"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "compass" : "compass-outline"}
              size={28}
              color={focused ? "#fff" : "#888"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
