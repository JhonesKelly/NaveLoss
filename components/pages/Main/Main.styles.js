import {StyleSheet} from 'react-native';



export const styles = StyleSheet.create({
  createPanelTwo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    gap: 43,
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 20,
  },
  createPanelSpace: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 20,
  },
  createPanelCenter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 20,
  },

  default: {
    // marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: '#7A53BB',
    borderRadius: 50,
  },
  textBtn: {
    textAlign: 'center',
    top: '15%',
    fontWeight: 700,
    fontSize: 24,
    color: 'white',
  },
  buttonsBlockLocation: {
    position: 'absolute',
    right: 23,
    top: -60,
  },
  autoLocationIcon: {
    width: 45,
    height: 45,
  },
  buttonsBlock: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  buttonWrapper: {
    marginTop: 8,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
  },
  howUseIcon: {
    width: 45,
    height: 45,
  },
  headerModal: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textModal: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 20,
  },
  buttonWrapper: {
    marginTop: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  button: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
  },
  container: {
    flex: 1,
    display: 'flex',
  },
  swipeContainer: {
    position: 'absolute',
    // backgroundColor: 'rgba(0, 0, 0, 0)',
    // backgroundColor: colorModal ? 'red' : 'blue',
    borderTopLeftRadius: 11.54,
    borderTopRightRadius: 11.54,
    width: '100%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
  },

  windowAddTravel: {
    top: '65%',
    position: 'absolute',
    width: '100%',
    height: '35%',
    backgroundColor: 'white',
  },

  true: {
    opacity: 1,
    // transition: '2s, transform 0.5s',
    backgroundColor: 'white',
    borderTopLeftRadius: 11.54,
    borderTopRightRadius: 11.54,
    borderTopColor: 'rgba(184, 184, 184, 0.4)',
    borderTopWidth: 2,
    borderStyle: 'solid',
  },
  false: {
    // opacity: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

