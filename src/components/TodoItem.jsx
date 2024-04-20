import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {formatDateTime, formatText} from '../helpers';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoItem({task, deleteTask, toggleCompleted}) {
  return (
    <View style={styles.todoitem}>
      <View>
        <Text style={styles.todoitemtext}>{formatText(task.text)}</Text>
        <Text style={styles.todoitemdate}>{formatDateTime(task.date)}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.completebutton(task.completed)}
          onPress={() => toggleCompleted(task.id)}>
          <Text style={{color: '#fff', fontWeight: '500'}}>
            {task.completed && 'Completed'}
            {!task.completed && 'Pending'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(task.id)}>
          <MaterialCommunityIcons
            name="delete-circle"
            size={40}
            color="#D04848"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 8,
    border: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  todoitemtext: {
    // flex: 1, /* Allow the text to take up remaining space */
    marginRight: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  todoitemdate: {
    color: '#888',
    fontSize: 16,
    fontWeight: '500',
  },
  deletebutton: {
    backgroundColor: '#D04848' /* Tomato color */,
    color: '#fff',
    padding: 4,
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  completebutton: isComplete => ({
    backgroundColor: isComplete ? 'limegreen' : 'orange',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 100,
    marginRight: 2,
  }),
});
