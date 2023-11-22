import React from 'react';
import {Text} from 'react-native';
import style from './style.js';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({title}) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
