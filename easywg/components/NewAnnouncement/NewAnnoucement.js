

import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

const NewAnnoucement = () => {
    const [text, setText] = useState('');
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 300 }}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    );
}
export default NewAnnoucement;