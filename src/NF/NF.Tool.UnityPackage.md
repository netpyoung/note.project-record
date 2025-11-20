# NF.Tool.UnityPackage

- <https://github.com/netpyoung/NF.Tool.UnityPackage>

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




tar-cs https://code.google.com/archive/p/tar-cs/
https://learn.microsoft.com/ko-kr/dotnet/api/system.formats.tar.tarfile?view=net-8.0

unity yaml이 key:value쌍이 맞지 않는 것도 있음. YamlDotNet https://github.com/aaubry/YamlDotNet 에서 파싱 오류 - 엄격한 검사

https://github.com/TwoTenPvP/UnityPackager 기반

avaloniaui 한번 적용해봤으나 Winform버전은 800Kb 언더라면, avaloniaui로 40Mb 가 나옴.


https://github.com/icsharpcode/SharpZipLib
SharpZipLib을 System.Formats.Tar - TarFile로 대채
YamlDotNet 파싱 오류도 있고, 어차피 guid만 얻어오는 부분만 쓰고 있어서 YamlDotNet을 걷어내니

- 800kb가 200kb로 줄어듬