/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import useSignIn from '../hooks/useSignIn';

interface SignInValues {
  username: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn: React.FC = () => {
  const { signIn } = useSignIn();

  const onSubmit = async (
    values: SignInValues,
    { setSubmitting }: FormikHelpers<SignInValues>
  ) => {
    try {
      const data = await signIn(values);

      if (data) {
        console.log('Received Token:', data.accessToken);
      } else {
        // Handle case where data is undefined
        Alert.alert('Error', 'No data received from sign-in');
      }
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Something went wrong!';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      Alert.alert('Error', errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.username && errors.username && styles.inputError,
            ]}
            placeholder="Username"
            onChangeText={handleChange('username')}
            value={values.username}
          />
          {touched.username && errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.password && errors.password && styles.inputError,
            ]}
            placeholder="Password"
            onChangeText={handleChange('password')}
            value={values.password}
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <Button
            title="Sign In"
            onPress={handleSubmit}
            disabled={isSubmitting}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default SignIn;
