import Box from './components/Box'
import { View, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style = {[styles.container,styles.flexRow]}>
      <Box color={'black'} size={50}></Box>
      <Box color={'red'} size={80}></Box>
      <Box color={'whrite'} size={80}></Box>
      <Box color={'green'} size={80}></Box>
      <Box color={'black'} size={50}></Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue'
  },

  flexColumn: {
    flexDirection: 'column'
  },

  flexRow: {
    flexDirection: 'row'
  },

  flexColumnReverse: {
    flexDirection: 'column-reverse'
  },

  flexRowReverse: {
    flexDirection: 'row-reverse'
  },

  justifyStart: {
    justifyContent: 'flex-start'
  },

  justifyCenter: {
    justifyContent: 'center'
  },

  justifyEnd: {
    justifyContent: 'flex-end'
  },

  justifySpaceBetween: {
    justifyContent: 'space-beteween'
  },

  justifySpaceAround: {
    justifyContent: 'space-around'
  },

  justifySpaceEvenly: {
    justifyContent: 'space-evenly'
  },

  alignStart: {
    alignItems: 'flex-start'
  },

  alignCenter: {
    alignItems: 'center'
  },

  alignEnd: {
    alignItems: 'flex-end'
  },

  alignStretch: {
    alignItems: 'stretch'
  }
});

export default App;
