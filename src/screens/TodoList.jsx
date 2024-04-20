import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import TodoItem from '../components/TodoItem';
import {isInputValid} from '../helpers';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function TodoList() {
  const [allTasks, setAllTasks] = useState([
    {
      id: 1,
      text: 'Buy groceries',
      completed: true,
      date: new Date(),
    },
    {
      id: 2,
      text: 'Finish homework',
      completed: false,
      date: new Date(),
    },
    {
      id: 3,
      text: 'Go for a run',
      completed: false,
      date: new Date(),
    },
  ]);
  const [filteredTasks, setFilteredTasks] = useState(allTasks);
  const [searchInput, setSearchInput] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (!isInputValid(searchInput)) {
      setFilteredTasks(allTasks);
    } else {
      const newTasks = allTasks.filter(task =>
        task.text.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setFilteredTasks(newTasks);
    }
  }, [searchInput, allTasks]);

  function addTask() {
    if (!isInputValid(text)) {
      return;
    }
    const newTask = {
      id: allTasks.at(-1).id + 1,
      text,
      completed: false,
      date: new Date(),
    };
    setAllTasks([...allTasks, newTask]);
    setText('');
  }
  function deleteTask(id) {
    setAllTasks(allTasks.filter(task => task.id !== id));
  }
  function toggleCompleted(id) {
    setAllTasks(
      allTasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View>
        <Text style={styles.title}>Todo List</Text>
      </View>
      <View style={{gap: 10, marginTop: 10, marginBottom: 15}}>
        <View>
          <TextInput
            style={styles.newTaskInput}
            value={text}
            onChangeText={setText}
            placeholder="New Task"
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: [{translateY: -15}],
            }}
            onPress={addTask}>
            <FontAwesome name="plus-circle" size={30} color="dodgerblue" />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={styles.searchInput}
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Search Task"
          />
          <FontAwesome
            style={{
              position: 'absolute',
              top: '50%',
              transform: [{translateY: -10}],
              left: 8,
            }}
            name="search"
            size={20}
          />
        </View>
      </View>
      {filteredTasks.map((task, index) => (
        <View key={task.id}>
          <TodoItem
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
          {index !== filteredTasks.length - 1 && (
            <View
              style={{
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                marginVertical: 5,
              }}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'black',
  },
  searchInput: {
    backgroundColor: '#eeeeee',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 30,
  },
  newTaskInput: {
    backgroundColor: '#eeeeee',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
