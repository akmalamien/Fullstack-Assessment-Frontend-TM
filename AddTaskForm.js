import { useDispatch } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addTask } from './redux/actions';

const AddTaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(addTask(values.taskTitle));
  };

  const validationSchema = yup.object().shape({
    taskTitle: yup.string().required('Task title is required'),
  });

  return (
    <Formik
      initialValues={{ taskTitle: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleSubmit, values, errors, isValid }) => (
        <View>
          <TextInput
            value={values.taskTitle}
            onChangeText={handleChange('taskTitle')}
            placeholder="Add task"
          />
          {errors.taskTitle && <Text>{errors.taskTitle}</Text>}
          <Button title="Add" onPress={handleSubmit} disabled={!isValid} />
        </View>
      )}
    </Formik>
  );
};

export default AddTaskForm;
