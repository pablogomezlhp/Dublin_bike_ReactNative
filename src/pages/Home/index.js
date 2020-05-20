import React from 'react';
import {Container, ImageBottom} from './styles';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoImg from '../../assets/logo.png';
import familyImg from '../../assets/Group.png';

import Button from '../../components/Button';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image source={logoImg} />

      <TouchableOpacity onPress={() => navigation.navigate('Results')}>
        <Button style={{color: 'white'}}>FIND STATIONS</Button>
      </TouchableOpacity>
      <ImageBottom source={familyImg} />
    </Container>
  );
};

export default Home;
