import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    width: scale(300),
    height: verticalScale(30),
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingLeft: scale(10),
    marginTop: verticalScale(10),
  },
});
