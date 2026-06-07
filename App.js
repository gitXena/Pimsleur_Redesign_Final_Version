
// App.js
import React, {useState} from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LanguageProvider } from "./contexts/LanguageContext.js";
import { LessonProvider } from "./contexts/LessonContext.js";
import { ProfileProvider} from "./contexts/ProfileContext";
import { ThemeProvider } from "./contexts/ThemeContext.js";

import StartUpScreen from "./screens/StartUpScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import CountrySelectionScreen from "./screens/CountrySelectionScreen";
import LibraryScreen from "./screens/LibraryScreen";
import HomeScreen from "./screens/HomeScreen";
import LessonScreen from "./screens/LessonScreen";
import MenuScreen from "./screens/MenuScreen";
import PracticeScreen from "./screens/PracticeScreen";
import LessonSelectorScreen from "./screens/LessonSelectorScreen";
import SkillsScreen from "./screens/SkillsScreen";
import SkillDetailScreen from "./screens/SkillDetailScreen";
import VoiceCoachScreen from "./screens/VoiceCoachScreen";
import HelpSupportScreen from "./screens/HelpSupportScreen";
import AboutAppScreen from "./screens/AboutAppScreen";
import GeneralSettingsScreen from "./screens/GeneralSettingsScreen";
import UserSettingsScreen from "./screens/UserSettingsScreen";
import LegalSettingsScreen from "./screens/LegalSettingsScreen";
import EnrichScreen from "./screens/EnrichScreen";
import MiniLessonScreen from "./screens/MiniLessonScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ReminderScreen from "./screens/ReminderScreen";
import CertificatesScreen from "./screens/CertificatesScreen";
import AudioOnly from "./screens/AudioOnly.js";


const Stack = createNativeStackNavigator();

export default function App() {

    return (
     <ThemeProvider>
    <LanguageProvider>
      <LessonProvider>
        <ProfileProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Startup" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Startup"
          component={StartUpScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />
         <Stack.Screen
        name="CreateAccount"
        component={CreateAccountScreen}
        />
          <Stack.Screen
          name="CountrySelection"
          component={CountrySelectionScreen}
        /> 
          <Stack.Screen
          name="Library"
          component={LibraryScreen}
        />

          <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="LessonScreen"
          component={LessonScreen}
        />
        <Stack.Screen
        name="AudioOnly"
        component={AudioOnly}
      />



        <Stack.Screen
        name="Practice"
        component={PracticeScreen}
      />

      <Stack.Screen
        name="LessonSelector"
        component={LessonSelectorScreen}
      />

      <Stack.Screen
        name="Skills"
        component={SkillsScreen}
      />

      <Stack.Screen
        name="SkillDetail"
        component={SkillDetailScreen}
      />

      <Stack.Screen
        name="VoiceCoach"
        component={VoiceCoachScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
      name="Menu" 
      component={MenuScreen} 
      />

      <Stack.Screen 
      name="HelpSupport" 
      component={HelpSupportScreen} 
      />
      
      <Stack.Screen 
      name="AboutApp" 
      component={AboutAppScreen} 
      />
      
      <Stack.Screen
  name="GeneralSettings"
  component={GeneralSettingsScreen}
/>

      <Stack.Screen
        name="UserSettings"
        component={UserSettingsScreen}
      />

      <Stack.Screen
        name="LegalSettings"
        component={LegalSettingsScreen}
      />

      <Stack.Screen
  name="Enrich"
  component={EnrichScreen}
/>

    <Stack.Screen
      name="MiniLesson"
      component={MiniLessonScreen}
    />

    <Stack.Screen
  name="Profile"
  component={ProfileScreen}
/>

<Stack.Screen
  name="Reminder"
  component={ReminderScreen}
/>

<Stack.Screen
  name="Certificates"
  component={CertificatesScreen}
/>

      </Stack.Navigator>
    </NavigationContainer>
    </ProfileProvider>
    </LessonProvider>
  </LanguageProvider>
  </ThemeProvider>
  );
}