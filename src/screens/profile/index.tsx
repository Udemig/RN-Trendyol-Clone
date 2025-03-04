import React, {useEffect} from 'react';
import {Text, StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
import Button from '../../components/ui/button';
import {userLogOut} from '../../store/actions/authActions';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';

const Profile: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  const {user} = useSelector((state: RootState) => state.user);
  const {isLogin} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getUserInfo({id: 2}));
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        {isLogin ? (
          <View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Avatar
                name={user?.name?.firstname}
                surname={user?.name?.lastname}
                image={user?.image}
                size={150}
              />
              <Text style={{fontSize: 30, marginTop: 10, fontWeight: 'bold'}}>
                {user?.name.firstname} {user?.name.lastname}
              </Text>
              <Text style={{fontSize: 20, marginTop: 10}}>{user?.email}</Text>
            </View>
            <View style={{padding: 20}}>
              <Button title="Edit Profile" onPress={() => {}} />
              <Button
                style={{marginTop: 10}}
                title="Log out"
                onPress={() => {
                  dispatch(userLogOut());
                }}
              />
            </View>
          </View>
        ) : (
          <View>
            <Text style={{fontSize: 20, marginTop: 20, textAlign: 'center'}}>
              Henüz giriş yapmadınıza devam etmek için giriş yapınız
            </Text>
            <Button
              style={{marginTop: 10}}
              title="Giriş Yap"
              onPress={() => {
                navigation.navigate(AUTHNAVIGATOR.LOGIN);
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
