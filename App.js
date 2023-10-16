import { SectionList, Text, View} from 'react-native';

const users = [
  {
    id: 1,
    name: 'Ankit',
    data: ['reactjs','hmtl','css'],
  },
  {
    id: 2,
    name: 'Kanishk',
    data: ['c++','c','java'],
  },
  {
    id: 3,
    name: 'Anjan',
    data: ['python','angular','bootstrap'],
  },
  {
    id: 4,
    name: 'Kishan',
    data: ['HTML','hmtl','css'],
  },
  {
    id: 5,
    name: 'Abhishek',
    data: ['backend','nodejs','scaler'],
  },
  {
    id: 6,
    name: 'Ankita',
    data: ['reactjs','hmtl','css'],
  },
]
export default function App() {
  return (
    <View>
      <Text style={{fontSize: 31, marginTop: 50, marginLeft: 20}}>Section List in React-Native</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style =  {{fontSize: 20}}>{item}</Text>}
      renderSectionHeader={({section: {name}})=><Text style= {{fontSize:25,color:'red'}} >{name}</Text>}
      />
    </View>
  );
}

