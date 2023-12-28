import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import pages 
import Export from './app/Pages/Export';
import Map from './app/Pages/Map';
import Profile from './app/Pages/Profile';
import SupervisorSignature from './app/Pages/SupervisorSignature';

// fetch pages
const MapRoute = () => <Map />;

const ProfileRoute = () => <Profile />;

const SupervisorRoute = () => <SafeAreaView><SupervisorSignature /></SafeAreaView>;

const ExportRoute = () => <SafeAreaView><Export /></SafeAreaView>;

// run application
export default function App() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Map', title: 'Map', focusedIcon: 'navigation', unfocusedIcon: 'navigation-outline' },
    { key: 'Profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    { key: 'Supervisor', title: 'Supervisor', focusedIcon: 'account-eye', unfocusedIcon: 'account-eye-outline' },
    { key: 'Export', title: 'Export', focusedIcon: 'download', unfocusedIcon: 'download-outline' },
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
        shifting={true}
      />
    </SafeAreaProvider>
  );
}
