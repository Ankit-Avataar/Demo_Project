import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './components/Home';
import { Login } from './components/Login';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontSize: 30,
        }
      }}
      >
        <Stack.Screen name = 'Login' component={Login}
        />
        <Stack.Screen name = 'Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




