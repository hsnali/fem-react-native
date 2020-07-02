import { StyleSheet } from 'react-native';

export const utilStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  flush: {
    margin: 0,
    padding: 0,
  },
  bold: {
    fontWeight: '700',
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '700',
  },
  subHeading: {
    fontSize: 18,
    padding: 10,
    fontWeight: '600',
  },
  spacer: {
    marginBottom: 30,
  },
  previews: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    flexGrow: 1,
  },
  thumbnail: {
    flexBasis: '20%',
    flexShrink: 0,
    flexGrow: 1,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  invisible: {
    opacity: 0,
  },
});
