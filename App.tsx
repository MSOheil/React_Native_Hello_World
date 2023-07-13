import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task"
import { ITask } from './Shared/ITaskDetails';
export default function App() {
  const takeList: ITask[] = [
    {
      date: '1402-01-01',
      name: 'do job'
    },
    {
      date: '1402-01-01',
      name: 'do job'
    }, {
      date: '1402-01-01',
      name: 'do job'
    }, {
      date: '1402-01-01',
      name: 'do job'
    }
  ]



  return (
    <View style={styles.container}>
      {/* Today tasks */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            takeList.map((item, index) => (
              <Task takeName={item.name} key={index} />

            ))
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  items: {

  },
});
