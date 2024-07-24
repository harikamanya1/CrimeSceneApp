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
import InterviewsMain from "./components/InterviewsMain";
import RecordInterview from "./components/RecordInterview";
import ViewInterviews from "./components/ViewInterviews";
import AttachAudio from "./components/AttachAudio";
import LeadsMain from "./components/LeadsMain";
import ViewLeads from "./components/ViewLeads";
import UpdateLeadStatus from "./components/UpdateLeadStatus";
import AddLead from "./components/AddLead";
import SketchDetailScreen from "./components/SketchDetailScreen";
import SketchLogScreen from "./components/SketchLogScreen";
import CreateSketchScreen from "./components/CreateSketchScreen";
import Collaboration from "./components/Collaboration";
import Notes from "./components/Notes";
import Users from "./components/Users";
import Tasks from "./components/Tasks";
import Documents from "./components/Documents";
import UserProfile from "./components/UserProfileforcollaboration";
import DocumentDetail from "./components/DocumentDetailofcollaboration";
import NoteDetail from "./components/NoteDetailofcollaboration";
import TaskDetail from "./components/TaskDetailofcollaboration";
import Management from "./components/Management";
import WorkflowTemplates from "./components/WorkflowTemplates";
import TeamManagement from "./components/TeamManagement";
import TaskAssignment from "./components/TaskAssignment";
import ResourceAllocation from "./components/ResourceAllocation";
import CaseManagement from "./components/CaseManagement";
import CaseDetail from "./components/CaseDetailofmanagement";
import TeamDetail from "./components/TeamDetailofmanagement";
import ResourceDetail from "./components/ResourceDetailofmanagement";
import TemplateDetail from "./components/TemplateDetailofmanagement";
import ReportScreen from "./components/ReportScreen";
import GenerateReport from "./components/GenerateReport";
import ReportDetail from "./components/ReportDetail";


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
        <Stack.Screen name="InterviewsMain" component={InterviewsMain} />
        <Stack.Screen name="RecordInterview" component={RecordInterview} />
        <Stack.Screen name="ViewInterviews" component={ViewInterviews} />
        <Stack.Screen name="AttachAudio" component={AttachAudio} />
        <Stack.Screen name="LeadsMain" component={LeadsMain} />
        <Stack.Screen name="ViewLeads" component={ViewLeads} />
        <Stack.Screen name="UpdateLeadStatus" component={UpdateLeadStatus} />
        <Stack.Screen name="AddLead" component={AddLead} />
        <Stack.Screen name="Management" component={Management} />
        <Stack.Screen name="WorkflowTemplates" component={WorkflowTemplates} />
        <Stack.Screen name="TeamManagement" component={TeamManagement} />
        <Stack.Screen name="TaskAssignment" component={TaskAssignment} />
        <Stack.Screen name="CaseManagement" component={CaseManagement} />
        <Stack.Screen name="CaseDetail" component={CaseDetail} />
        <Stack.Screen name="TeamDetail" component={TeamDetail} />
        <Stack.Screen name="ResourceDetail" component={ResourceDetail} />
        <Stack.Screen name="TemplateDetail" component={TemplateDetail} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen name="GenerateReport" component={GenerateReport} />
        <Stack.Screen name="ReportDetail" component={ReportDetail} />
        <Stack.Screen
          name="ResourceAllocation"
          component={ResourceAllocation}
        />
        <Stack.Screen
          name="SketchDetailScreen"
          component={SketchDetailScreen}
        />
        <Stack.Screen name="SketchLogScreen" component={SketchLogScreen} />
        <Stack.Screen
          name="CreateSketchScreen"
          component={CreateSketchScreen}
        />
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
        <Stack.Screen name="Collaboration" component={Collaboration} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Users" component={Users} />
        <Stack.Screen name="Tasks" component={Tasks} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="DocumentDetail" component={DocumentDetail} />
        <Stack.Screen name="NoteDetail" component={NoteDetail} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
