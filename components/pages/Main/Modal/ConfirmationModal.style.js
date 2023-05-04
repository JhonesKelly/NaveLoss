import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  btns: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 13,
  },
  txtBtn: {
    fontWeight: 700,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  modalBtn: {
    width: 50,
    height: 30,
    backgroundColor: '#7A53BB',
    borderRadius: 22,
    paddingTop: 2,
  },
  modalQusBtns: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 15,
  },
  modalQustion: {
    fontWeight: 500,
    fontSize: 18,

    color: '#44036F',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#7A53BB',
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '25%',
  },
  close: {width: '10%'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    // padding: 35,
    width: '88%',
    height: '20%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    width: '80%',
    fontWeight: 700,
    fontSize: 20,
    color: '#FFFFFF',
  },
});
