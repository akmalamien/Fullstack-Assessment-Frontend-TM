import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import SimpleButton from '../components/SimpleButton';
import { increment, decrement } from '../actions/counter';
import { storeTask, removeAllTask } from '../actions/task';
import SimpleCard from '../components/SimpleCard';
import { Input } from '@rneui/themed';
import { useFormik } from 'formik';
import HttpService from '../services/HttpService';

const AddTaskScreen = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      id: '',
      description: '',
      completed: false,
    },
    onSubmit: values => {
      HttpService.post('http://192.168.1.6:8084/api/add', values)
        .then(response => {
          console.log("response", response)
          navigation.navigate('Home')
        })
        .catch(error => {
          console.log("error", error)
        })
    },
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
        placeholder='ID'
        id='id'
        name='id'
        onChangeText={formik.handleChange('id')}
        value={formik.values.id}
      />
      <Input
        placeholder='Description'
        id='description'
        name='description'
        onChangeText={formik.handleChange('description')}
        value={formik.values.description}

      />
      <SimpleButton
        title={"Add Task"}
        onPress={formik.handleSubmit}
      />

      {/* <Button title="Home" onPress={() => navigation.navigate('Add Task ')} /> */}
    </View>
  );
};

export default AddTaskScreen;
