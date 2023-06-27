import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
  return (
    <View style={styles.constainerStyle}>
          <Text>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    constainerStyle: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 1,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 9
    }
})

export default Card
