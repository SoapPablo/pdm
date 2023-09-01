import { View } from 'react-native'

const Box = (props) => {
  const BoxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  };

  return (
    <View style = {BoxStyle}>
    

  </View>
  )
};

export default Box