import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./components/SplashScreen";
import LoginPage from "./components/LoginPage";
import CaseSelectionPage from "./components/CaseSelectionpage";
import AccessPage from "./components/AccessLog";
import NewCasePage from "./components/NewCasePage";
import ExistingCasePage from "./components/ExistingCasePage";
import DashboardPage from "./components/DashBoardPage";
import HomePage from "./components/HomePage";
import LogsScreen from "./components/LogsScreen";
import SettingsPage from "./components/SettingsPage";
import ProfilePage from "./components/ProfilePage";
import CaseScenes from "./components/CaseScenes";
import EvidenceScreen from "./components/EvidenceScreen";
import ForensicAnalysisScreen from "./components/ForensicAnalysisScreen";
import PhotoScreen from "./components/PhotoScreen"; // Import PhotoScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="CaseSelection" component={CaseSelectionPage} />
        <Stack.Screen name="NewCasePage" component={NewCasePage} />
        <Stack.Screen name="ExistingCasePage" component={ExistingCasePage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Logs" component={LogsScreen} />
        <Stack.Screen name="EvidenceScreen" component={EvidenceScreen} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="CaseScenes" component={CaseScenes} />
        <Stack.Screen name="AccessLogs" component={AccessPage} />
        <Stack.Screen
          name="ForensicAnalysisScreen"
          component={ForensicAnalysisScreen}
        />
        <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
        {/* Add PhotoScreen here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
