# NF.Tool.UnityPackage

## 시작하며

- 유니티 패키지에 있는 파일들을 쉽게 확인하고 싶었다. (이미자, 사운드 등등)
- 드레그 드랍으로 쉽게 만들고 싶었다.

## 결정

- winform 아니면 WPF 아니면 Maui
  - 간단하게 만들거라 winform으로.
  - 나중에 크로스플렛폼이 되는 Maui로 하면 어떨까? 너무 무겁나?

## unitypackage경로

| os    | path                                                 |
| ----- | ---------------------------------------------------- |
| win   | C:\Users{User}\AppData\Roaming\Unity\Asset Store-5.x |
| mac   | ~/Library/Unity/Asset\ Store/                        |
| linux | ~/.local/share/unity3d/Asset Store-5.x/              |


## 기타

- pack : yaml
- unpack: tar/gzip


## Ref

- <https://discussions.unity.com/t/where-are-downloaded-asset-store-packages-stored-at/14129/20>