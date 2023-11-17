import * as React from 'react';
import { View, Text, TouchableOpacity,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import pages 
import Export from './app/Pages/Export';
import Map from './app/Pages/Map';
import Profile from './app/Pages/Profile';
import SupervisorSignature from './app/Pages/SupervisorSignature';


  
const MapRoute = () => <SafeAreaView><Map/></SafeAreaView>;

const ProfileRoute = () => <SafeAreaView><Profile/></SafeAreaView>;

const SupervisorRoute = () => <SafeAreaView><SupervisorSignature/></SafeAreaView>;

const ExportRoute = () => <SafeAreaView><Export/></SafeAreaView>;
export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Map', title: 'Map', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'Profile', title: 'Profile', focusedIcon: 'album' },
    { key: 'Supervisor', title: 'Supervisor', focusedIcon: 'history' },
    { key: 'Export', title: 'Export', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Map: MapRoute,
    Profile: ProfileRoute,
    Supervisor: SupervisorRoute,
    Export: ExportRoute,
  });
  return (
    <SafeAreaProvider>
       <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      inactiveColor={'grey'}
    />
    </SafeAreaProvider>
  );
}
