import { StyleSheet } from 'react-native';
import { verticalScale } from '../../theme';
import colors from '../../theme/Colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: verticalScale(20),
    padding: verticalScale(10),
    backgroundColor: colors.red,
    borderRadius: 10,
  },
});
