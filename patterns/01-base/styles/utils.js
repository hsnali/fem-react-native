import { StyleSheet } from 'react-native';

export const utilStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  flexOne: {
    flex: 1,
  },
  flush: {
    margin: 0,
    padding: 0,
  },
  flushHorizontal: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
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
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  thumbnailSmall: {
    flexBasis: 'auto',
    width: 30,
    height: 30,
    marginRight: 10,
    shadowOpacity: 0,
  },
  invisible: {
    opacity: 0,
  },
  buttonPrimary: {
    fontSize: 18,
    fontWeight: '600',
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#022a4b',
    borderRadius: 3,
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
  },
  textField: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#555',
    padding: 11,
    marginBottom: 10,
  },
  switchFields: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  rowFieldMinimal: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 1,
    alignItems: 'center',
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});
