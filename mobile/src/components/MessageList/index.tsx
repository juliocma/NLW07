import React from 'react';

import { ScrollView } from 'react-native';
import { Message } from '../Message';

import { UserPhoto } from '../UserPhoto';
import { styles } from './styles';

export function MessageList() {
  const data = {
    id: '1',
    text: 'Teste',
    user: {
      name: 'Julio Cesar',
      avatar_url: 'https://github.com/juliocma.png',
    },
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      <Message data={data} />
    </ScrollView>
  );
}
