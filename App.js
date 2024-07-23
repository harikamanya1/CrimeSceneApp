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
import PhotoScreen from "./components/PhotoScreen";
import CrimeSceneScreen from "./components/CrimeSceneScreen";
import AddEvidence from "./components/AddEvidence";
import EditEvidence from "./components/EditEvidence";
import EditEntry from "./components/EditEntryForAccessLog";
import AddEntry from "./components/AddEntryForAccessLog";
import AddScene from "./components/AddSceneCrime";
import ViewScenes from "./components/ViewScenesCrime";
import AttachMedia from "./components/AttachMediaCrime";
import PeopleOfInterest from "./components/PeopleOfInterest";
import ViewPeople from "./components/ViewPeople";
import ManageNotes from "./components/ManageNotes";
import AddPerson from "./components/AddPerson";
import CreateForensicAnalysis from "./components/CreateForensicAnalysis";
import ForensicAnalysisMain from "./components/ForensicAnalysisMain";
import LinkForensicAnalysis from "./components/LinkForensicAnalysis";
import UpdateForensicAnalysis from "./components/UpdateForensicAnalysis";
import ViewForensicAnalysis from "./components/ViewForensicAnalysis";

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
        <Stack.Screen name="AddScene" component={AddScene} />
        <Stack.Screen name="ViewScenes" component={ViewScenes} />
        <Stack.Screen name="AddPerson" component={AddPerson} />
        <Stack.Screen
          name="ForensicAnalysisScreen"
          component={ForensicAnalysisScreen}
        />
        <Stack.Screen name="PhotoScreen" component={PhotoScreen} />
        <Stack.Screen name="CrimeSceneScreen" component={CrimeSceneScreen} />
        <Stack.Screen name="AddEvidence" component={AddEvidence} />
        <Stack.Screen name="EditEvidence" component={EditEvidence} />
        <Stack.Screen name="AddEntry" component={AddEntry} />
        <Stack.Screen name="EditEntry" component={EditEntry} />
        <Stack.Screen name="PeopleOfInterest" component={PeopleOfInterest} />
        <Stack.Screen name="ViewPeople" component={ViewPeople} />
        <Stack.Screen name="ManageNotes" component={ManageNotes} />
        <Stack.Screen name="AttachMedia" component={AttachMedia} />
        <Stack.Screen
          name="CreateForensicAnalysis"
          component={CreateForensicAnalysis}
        />
        <Stack.Screen
          name="ForensicAnalysisMain"
          component={ForensicAnalysisMain}
        />
        <Stack.Screen
          name="LinkForensicAnalysis"
          component={LinkForensicAnalysis}
        />
        <Stack.Screen
          name="UpdateForensicAnalysis"
          component={UpdateForensicAnalysis}
        />
        <Stack.Screen
          name="ViewForensicAnalysis"
          component={ViewForensicAnalysis}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
