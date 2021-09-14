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

## 2차 커밋

| 결                                                                                                                                                 | 과                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![KakaoTalk_Photo_2021-08-30-05-01-20 001](https://user-images.githubusercontent.com/24623403/131263826-d757e6fc-4e19-4ad4-accb-fe6c1e34dd46.jpeg) | ![KakaoTalk_Photo_2021-08-30-05-01-20 002](https://user-images.githubusercontent.com/24623403/131263829-394c6f7d-e505-4658-911a-7d0e895ed1f0.jpeg) |
| ![KakaoTalk_Photo_2021-08-30-05-01-20 003](https://user-images.githubusercontent.com/24623403/131263830-72d1abe1-cda8-4de2-8b18-08819568de73.jpeg) | ![KakaoTalk_Photo_2021-08-30-05-01-20 004](https://user-images.githubusercontent.com/24623403/131263834-47143f75-fb1b-4505-b6e0-7638b4c20dcc.jpeg) |

- 리덕스 적용하기
  - react와 똑같음
- API 통신
  - 브라우저와 달리 CORS에러가 나지 않아 Proxy설정을 안해줘도 된다. axios로 통신함
- 화면 이동을 위해 react-navigation을 사용했다. Stack 방식으로 이전에 있었던 화면을 기억하고 있는 것 같으나 필요없을 때가 있어 공식문서를 더 봐야할 것 같다.

## 이건 뭘까

- { StatusBar } from "expo-status-bar"
  - 상태 표시줄을 제어하여 텍스트 색상, 배경 색상을 변경하고, 숨기고, 반투명 또는 불투명하게 만들고, 이러한 변경 사항에 애니메이션을 적용할 수 있는 구성 요소 및 명령형 인터페이스를 제공합니다. StatusBar구성 요소 로 정확히 수행할 수 있는 작업 은 사용 중인 플랫폼에 따라 다릅니다.
- { SafeAreaProvider } from "react-native-safe-area-context";
  - 장치 안전 영역 삽입 정보에 액세스하기 위한 유연한 API를 제공합니다. 이를 통해 노치, 상태 표시줄, 홈 표시기 및 기타 장치 및 운영 체제 인터페이스 요소 주위에 콘텐츠를 적절하게 배치할 수 있습니다. 또한 안전한 영역을 설명하기 위해 보기를 자동으로 삽입하는 SafeAreaView대신 사용할 수 있는 구성 요소를 제공합니다

## Error Handle

가끔 네트워크 오류 뜰 때 : export REACT_NATIVE_PACKAGER_HOSTNAME={컴퓨터의 IP}

- Linking requires a build-time setting `scheme` in the project's Expo config (app.config.js or app.json) for production apps, if it's left blank, your app may crash. 경고가 뜰 때는 app.json에 "scheme"을 추가해주자

- useColorScheme이 항상 light만 반환을 할 때
  - app.json에 다음을 추가한다.
    `"userInterfaceStyle": "automatic",`
  - 그래도 안된다면 다음을 추가한다.
  ```json
      "android": {
        "userInterfaceStyle": "automatic"
      },
      "ios": {
        "supportsTablet": true,
        "userInterfaceStyle": "automatic"
      },
  ```
