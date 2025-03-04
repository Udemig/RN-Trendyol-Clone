import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, Text} from 'react-native';
import {Formik} from 'formik';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {LoginForm} from '../../models/ui/loginForm';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/actions/authActions';
import {AppDispatch, RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';


const Login: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {isLogin, pending} = useSelector((state: RootState) => state.auth);
  const initialValues: LoginForm = {
    username: 'johnd',
    password: 'm38rmF$',
  };

  useEffect(() => {
    if (isLogin) {
      navigation.goBack();
    }
  }, [isLogin]);
  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={values => dispatch(userLogin(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={defaultScreenStyle.container}>
              <Input
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                title="Kullanıcı Adı"
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
                value={values.password}
                title="Şifre"
              />
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
              <View style={{marginTop: height * 0.05}}>
                <Button
                  disabled={pending}
                  onPress={handleSubmit}
                  title="Giriş Yap"
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: Colors.PRIMARY,
  },
});

export default Login;
