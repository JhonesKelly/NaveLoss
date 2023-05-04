import {Modal, Text, TouchableOpacity, View, Image} from 'react-native';
import {CLOSE_BTN2} from '../../../../images';
import {styles} from './ConfirmationModal.style';

export default function ConfirmationModal({
  setCloseOpenModal,
  closeOpenModal,
  setModalSwitchButton,
  deleteTransportMarker,
  deleteRoute,
}) {
  return (
    <Modal animationType="slide" visible={closeOpenModal} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <View style={{width: '10%'}}></View>
            <Text style={styles.modalText}>Окно подтверждения</Text>
            <TouchableOpacity onPress={setCloseOpenModal} style={styles.close}>
              <Image source={CLOSE_BTN2} style={{width: 25, height: 25}} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalQusBtns}>
            <Text style={styles.modalQustion}>
              Вы действительно хотите удалить метку?
            </Text>
            <View style={styles.btns}>
              <TouchableOpacity
                onPress={pre => {
                  deleteTransportMarker();
                  deleteRoute();
                  setCloseOpenModal();
                  setModalSwitchButton((pre = 'default'));
                  // showPanel();
                }}
                style={styles.modalBtn}>
                <Text style={styles.txtBtn}>Да</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={setCloseOpenModal}
                style={styles.modalBtn}>
                <Text style={styles.txtBtn}>Нет</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
