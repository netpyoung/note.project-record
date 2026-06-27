# Sample.Dotnet.Nes

- [Sample.Dotnet.Nes](https://github.com/netpyoung/Sample.Dotnet.Nes)
- [nes 노트](https://netpyoung.github.io/note.nes/)

프로그래밍 언어관련 검색을 하다. 아 crystal언어가 지금 어떻게 되어가고 있지 생각이나서 검색중 [블로그 글](https://matiassalles99.codes/posts/building-nes-emulator-crystal-book/)을 발견.

- [Building Your First Emulator: Understanding how emulators work by building a NES from scratch by Matias Salles](https://leanpub.com/nes-emulator-en)
  - https://github.com/matiassalles99
  - https://github.com/matiassalles99/nes-emulator-book

책을 알게 되었고 [crystal](https://crystal-lang.org/)언어와 [SDL2](https://wiki.libsdl.org/SDL2/FrontPage)로 구현되었으나, 개발 환경이 불편하고 include문을 써서 좀 코드 분석하기 불편하게 되어있어 dotnet과 [SDL3](https://wiki.libsdl.org/SDL3/FrontPage) / [Raylib](https://www.raylib.com/)로 구현해봄.

역시 dotnet이 visual studio가 좋아. 테스트도 잘 할 수 있고 손에 익어 바로바로 코드가 나옴. ruby가 좋아 crystal도 관심을 갖게되었는데, 책의 소스를 보다보니 점점 ruby계열 언어 아니 다른 gc언어에 대한 관심들이 떨어짐. gc언어는 그냥 dotnet 하나로 가는게 좋을듯.

그리고 다행인게 [nesdev쪽 위키](https://www.nesdev.org/wiki/Nesdev_Wiki) 가 정리가 잘 되어있어서 좋았고, 여러 youtube나 github에 참고할게 많아서 좋았음.

```
AMD Ryzen 7 5700g
dotnet --version 10.0.301
```

릴리즈는 nes기준 60프레임 맞춰서 나오는데, 디버그 빌드가 8프레임 정도밖에 안나온다. zig로 짜면 어떻게 되려나?

PPU랑 APU쪽이 빡셌음.

저 책이 아니였으면 손대볼 염두도 안났을것임. gameboy를 해볼까? 아니면 chip-8 에뮬로 가볍게 작업하고 심화로 chip-8타겟팅하는 롬을 만들 수 있도록?

일단 어찌어찌 완성시켰는데 심화해볼 수 있는것들도 남았고. 다시 관심을 가질때 다시 재미있게 가지고 놀 수 있을 프로젝트라 어느정도 1차 완성하고나서 나름 만족감을 느낄 수 있었음.


## 기타

구현하면서 [Writing NES Emulator in Rust](https://bugzmanov.github.io/nes_ebook/)도 참고해서 봤는데, wiki링크가 과거 nesdev.com 기준으로 작성되었음. 사이트 분쟁이 있는지 현재는 nesdev.org로 접속이 되는데 nesdev.com 기준으로 작성된 문서/코드 주석들을 수정하는 [PR](https://github.com/bugzmanov/nes_ebook/pull/47)을 남겼고 받아들여짐. 참고하면서 도움을 받았는데 조금이라도 도움을 줄 수 있어서 나름 만족.

