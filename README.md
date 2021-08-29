# Expo Study

## 기록

### 관련 공식 문서

- react-native : https://reactnative.dev/docs/getting-started
- expo : https://docs.expo.dev/
- react-navigation : https://reactnavigation.org/docs

### 1차 커밋

| 결                                                                                                                                             | 과                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![KakaoTalk_Photo_2021-08-13-17-54-22](https://user-images.githubusercontent.com/24623403/129331915-301815c4-fca0-4623-861f-0cd7bff5c3bd.jpeg) | ![KakaoTalk_Photo_2021-08-13-17-54-26](https://user-images.githubusercontent.com/24623403/129331936-4fc115a9-1e59-4159-ae48-4324b2260ab2.jpeg) |

- 앱 시작점 변경
  - /App.jsx -> /src/App.jsx
  - export default registerRootComponent(App);
- 라이브러리
  - react-native-vector-icons
- 배운점
  - View는 터치가 안된다
    - TouchableOpacity등을 써야함
  - event의 종류가 다름. event.nativeEvent
    - textInput에선 onChangeText
  - rn은 기본적으로 display flex에 flexDirection은 column인 것 같다.
  - 기본 컴포넌트의 구조가 web과 다르다.
  - css가 web과는 상당히 다르다.
    - shadow, border, padding, margin, background
    - background image가 없다. -> ImageBackground
  - KeyboardAvoidingView로 자판이 올라올 때 뷰를 자동으로 조절해준다!
  - Keyboard.dismiss();로 자판을 내릴 수 있다.

## Error Handle

가끔 네트워크 오류 뜰 때 : export REACT_NATIVE_PACKAGER_HOSTNAME={컴퓨터의 IP}
