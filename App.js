import { StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import ModalView from './components/ModalView';
import PostCardItem from './components/PostCardItem';



const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export default function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true)
    await fetch('http://192.168.1.6:8084/api/taskList')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch(e => console.log(e))
    setLoading(false)
  }

  const addPost = (description) => {
    fetch('http://192.168.1.6:8084/api/add', {
      method: "POST",
      headers,
      body: JSON.stringify({
        "desciption": description,
        
      })
    }).then((res) => res.json())
      .then(resJson => {
        console.log('post:', resJson)
        updatePost()
      }).catch(e => { console.log(e) })
  }
  
  const deletePost = (id) => {
    fetch('http://192.168.1.6:8084/api' + `/${id}`, {
      method: "DELETE",
      headers,
    }).then((res) => res.json())
      .then(resJson => {
        console.log('delete:', resJson)
        getPosts()
      }).catch(e => { console.log(e) })
  }

  const updatePost = () => {
    getPosts()
    setVisible(false);    
    setDescription('')
    
  }

  const edit = (description) => {
    setVisible(true)    
    setDescription(description)
    
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Surface style={styles.header}>
        <Title>Task </Title>
        <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
        
      </Surface>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id + index.toString()}
        refreshing={loading}
        onRefresh={getPosts}
        renderItem={({ item }) => (
          <PostCardItem
            description={item.description}            
            onEdit={() => edit(item.id, item.description)}
            onDelete={() => deletePost(item.id)}
            
          />
        )}
      />
      <ModalView
        visible={visible}        
        onDismiss={() => setVisible(false)}
        onSubmit={() => {         
            addPost(description)          
        }}
        cancelable
      >
        <TextInput
          label="Task Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          mode="outlined"
        />        
      </ModalView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    marginTop: Platform.OS === 'android' ? 24 : 0,
    padding: 16,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'white'
  },
});



