import React, {useState, useRef} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Animated,
  TextInput,
} from 'react-native';
import {CLOSE_BTN, AUTO_LOCATION, DELETE, SUBMIT} from '../../../../images';
import SlidingUpPanel from 'rn-sliding-up-panel';
import ConfirmationModal from './СonfirmationModal';
import {styles} from './SwipeModal.style';

export default function SwipeModal({
  target,
  deleteTransportMarker,
  addTransportMarker,
  addRoute,
  deleteRoute,
  getCurrentPositionStatic,
  getRoute,
}) {
  const [switchModal, setSwitchModal] = useState(false);
  const [modalSwitchButton, setModalSwitchButton] = useState('default');

  const setCloseOpenModal = () => {
    setSwitchModal(switchModal => !switchModal);
  };

  const showPanel = () => {
    this._panel.show();
  };

  return (
    <SlidingUpPanel
      ref={c => (this._panel = c)}
      draggableRange={{top: 300, bottom: 40}}
      showBackdrop={false /*For making it modal-like*/}
      visible={false /*If you want it to be visible on load*/}
      backdropOpacity={0}
      // containerStyle={colorModal ? styles.true : styles.false}
      containerStyle={styles.true}
      //   onMomentumDragStart={() => {
      //     // runAnimationOnClick();
      //     console.log('fffff');
      //     setColorModal(colorModal => !colorModal);
      //   }}
      //
    >
      <Animated.View
        style={
          styles.swipeContainer
          // {
          //   // backgroundColor: animationValue.interpolate({
          //   //   inputRange: [0, 1],
          //   //   outputRange: ['rgb(255,0,0)', 'rgb(0,0,0)'],
          //   // }),
          // },
        }>
        <ConfirmationModal
          setCloseOpenModal={setCloseOpenModal}
          closeOpenModal={switchModal}
          deleteTransportMarker={deleteTransportMarker}
          setModalSwitchButton={setModalSwitchButton}
          deleteRoute={deleteRoute}
        />
        <View style={styles.buttonsBlockLocation}>
          <TouchableOpacity onPress={target}>
            <Image source={AUTO_LOCATION} style={styles.autoLocationIcon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomColor: 'rgba(184, 184, 184, 0.4)',
            borderBottomWidth: 3,
            marginTop: 8,
            width: 72,
          }}
        />
        <View style={styles.headerModal}>
          {/* {this._panel.show()} */}
          <Text style={styles.textModal}>Где оставили машину?</Text>
          <TouchableOpacity onPress={() => this._panel.hide()}>
            <Image source={CLOSE_BTN} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 13,
            borderBottomColor: '#D9AEF7',
            borderBottomWidth: 1,
            marginTop: 14,
            width: '92%',
          }}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Ваш комментарий"
          placeholderTextColor="rgba(47, 46, 54, 0.5)"
          style={{
            height: '45%',
            width: '92%',
            textAlignVertical: 'top',
            // backgroundColor: 'red',
            borderBottomColor: '#D9AEF6',
            borderBottomWidth: 1,
            color: 'rgba(47, 46, 54, 0.5)',
            fontSize: 18,
            borderStyle: 'solid',
          }}
          // onChangeText={text => this.setState({text})}
          // value={this.state.text}
        />
        <View
          style={
            modalSwitchButton == 'start'
              ? styles.createPanelTwo
              : modalSwitchButton == 'default'
              ? styles.createPanelCenter
              : styles.createPanelSpace
          }>
          {modalSwitchButton == 'default' ? (
            <>
              <TouchableOpacity
                onPress={pre => {
                  getCurrentPositionStatic();
                  setModalSwitchButton((pre = 'create'));
                  target();
                  addTransportMarker();

                  // target();
                }}
                style={[styles.default, {}]}>
                <Text style={styles.textBtn}>Создать</Text>
              </TouchableOpacity>
            </>
          ) : modalSwitchButton == 'create' ? (
            <>
              <TouchableOpacity style={styles.submit}>
                <Image source={SUBMIT} style={{width: 47, height: 47}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={pre => {
                  getRoute();
                  setModalSwitchButton((pre = 'travel'));
                  addRoute();
                }}
                style={styles.default}>
                <Text style={styles.textBtn}>Маршрут</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={setCloseOpenModal}
                style={styles.submit}>
                <Image source={DELETE} style={{width: 44.87, height: 50}} />
              </TouchableOpacity>
            </>
          ) : modalSwitchButton == 'travel' ? (
            <>
              <TouchableOpacity style={styles.submit}>
                <Image source={SUBMIT} style={{width: 47, height: 47}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={pre => {
                  setModalSwitchButton((pre = 'start'));
                  this._panel.hide();
                }}
                style={styles.default}>
                <Text style={styles.textBtn}>Начать</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={setCloseOpenModal}
                style={styles.submit}>
                <Image source={DELETE} style={{width: 44.87, height: 50}} />
              </TouchableOpacity>
            </>
          ) : modalSwitchButton == 'start' ? (
            <>
              <TouchableOpacity style={styles.submit}>
                <Image source={SUBMIT} style={{width: 47, height: 47}} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={pre => {
                  setCloseOpenModal();
                  //   setModalSwitchButton((pre = 'default'));
                }}
                style={styles.default}>
                <Text style={styles.textBtn}>Удалить</Text>
              </TouchableOpacity>
            </>
          ) : undefined}
        </View>
      </Animated.View>
    </SlidingUpPanel>
  );
}
