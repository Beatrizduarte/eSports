import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface props {
  children: React.ReactNode;
}

export function Background({ children }: props) {
  return (
    <ImageBackground 
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      { children }
    </ImageBackground>
  );
}