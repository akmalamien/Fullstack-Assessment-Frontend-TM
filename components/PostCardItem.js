import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

export const Button = ({ onPress, style, icon }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Feather name={icon} size={24} />
  </TouchableOpacity>
)

export default function PostCardItem({ description, onDelete }) {
console.log(description)
  return (
    <Card style={styles.item}>
      <View style={styles.rowView}>
        <View>
          <Text style={styles.title}>{description}</Text>          
        </View>
        <View style={styles.rowView}>
        <TouchableOpacity style={styles.button} onPress={() => onDelete()}>
          <Text style={styles.buttonText}>DELETE</Text>
        </TouchableOpacity>      
        </View>
      </View>
    </Card>
  )
}


const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    margin: 16,
    elevation: 4,
    borderRadius: 8
  },
  title: {
    fontSize: 18,
  },
  button:{
    color:'black',
    
  }
})

