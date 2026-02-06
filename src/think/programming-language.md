언어


|                             | 중요도 |                      |
| --------------------------- | ------ | -------------------- |
| 컴파일 속도                 | 8      |                      |
| IDE 지원                    | 8      |                      |
| FFI (C)                     | 8      |                      |
| async/await                 | 7      |                      |
| 정적타입                    | 6      |                      |
| 동일한 언어의 빌드 스크립트 | 6      |                      |
| OOP                         | 5      | 단일상속+/ 다중상속- |
| 중괄호 {}                   | 5      |                      |
| FFI (Cpp)                   | 3      |                      |


### FFI (C)

- 코드 자동생성 : c헤더로부터 타겟 언어 코드
- type: null terminated string 


- null
  -  maybe/option 타입이나 nullable 타입(모나드)을 지원
  - 시스템 수준 프로그래밍에서는 딱히

gc - arc orc


| 언어적 기능 |     |
| ----------- | --- |
| attribute   |     |
| decorator   |     |

오버로딩(연산자)
오버로딩(함수)

path기반 import/include는 별로
 - python
 - zig

타입

- Static Type 언어인가 - 반대 Dynamic
- Strong Type 인가 - 반대 Weak  - https://en.wikipedia.org/wiki/Strong_and_weak_typing - 형변환 강제


procedure
  nested procedure 는 딱히
  
  
성능
SIMD
SoA (Structure of Arrays) / AoS (Array of Structures)


배열
VLA (Variable-Length Array) 하면 좋고, 없으면 아쉬운

신텍스

- return 문이 있는가. 없으면 아웃
- 아웃. 변수명 앞에 $가 붙는가 PHP / Perl / PowerShell
- 할당에 := 이런식으로 자잘하게 붙는가 더욱이 : 는 쉬프트를 써야 함
    - python의 function과 while - ruby의 function과 while
- 아웃. Exception이 있는가(try/catch)가 있는가?


리터럴
- string interpolation
- array/list/map


리플렉션
- RTTI Run Time Type Information 말고 Compile-time Reflection 이 있나?


label

- for/while 을 빠져나올 수 있는 이름 지정 label

반복

- 범위 제외/포함가 잘 들어나는 

툴체인
gofmt 같은게 있는가

기타
async 여부


IDE
- 당연히 Debugger 기능이 있어야하고
- dissasembly기능

[Typeless 언어](https://www.youtube.com/watch?v=Has3suZ2qws)
[좋은 프로그래밍 언어와 기본동작](https://www.youtube.com/watch?v=99XbTaCJfhU)

작업용
C#
C++ 별로
typescript

## 레이더 포착

- zig
 - https://codeberg.org/ziglang/translate-c

- hylo (formerly Val)
  - https://hylo-lang.org/
  - 소유권 언어
	- 라이프타임 'a 안보인다
  - consume이 있어서 rust보다는 코드 읽기 편하네
  - 맘에드는데
  - [Hylo - The Safe Systems and Generic-programming Language Built on Value Semantics - Dave Abrahams](https://www.youtube.com/watch?v=5lecIqUhEl4)
    - [Alexander Stepanov: STL and Its Design Principles.](https://www.youtube.com/watch?v=1-CmNNp5eag)
    - Hylo컴파일러는 swift로 작성됨
    - [Concurrency Hylomorphism - Lucian Radu Teodorescu - ACCU 2024](https://www.youtube.com/watch?v=k6fI4asLJxo)
    - [Concurrency Approaches: Past, Present, and Future - Lucian Radu Teodorescu - ACCU 2023](https://www.youtube.com/watch?v=uSG240pJGPM)

- Beef 언어
  - c#문법
  - exception없고 Result 방식으로 처리
  - 게임 개발 출신이라는것도 맘에듬
  - async/await없는건 좀..(그래도 지원 예정)
  - 일단 지금은 윈도우 개발환경만 있음
  - ide 지원!
    - dissassembly도 보여주고 좋네
  - Brian Fiete (One of the PopCap founders)
  - [Inside Penny's Big Breakaway - They Made Their Own 3D Engine! - Developer Deep Dive](https://www.youtube.com/watch?v=zmzS9vz6h30)
    - Penny's Big Breakaway - Evening Star
  - Mixin은 함수와 비슷해 보이지만, 컴파일 타임에 코드를 호출 부위로 직접 주입
    - inline 컴파일 지시
    - mixin - AST 복사
  - object boxing이 있지만, gc가 없으니 해제 수동
  - fin언어도 c# 문법을 https://github.com/fin-language/fin

## 그 다음 레이더


- swift
  - async/await가 있네?
  - try/catch 있는건 별로
  - 모노 만든사람도 swift로 godot을...
    - [Miguel de Icaza: Swift Godot: Fixing the Multi-million dollar mistake #GodotCon2023](https://www.youtube.com/watch?v=tzt36EGKEZo)
    - [Embedding Godot: spicing up your app with SwiftGodotKit and more – Miguel de Icaza – GodotCon 2025](https://www.youtube.com/watch?v=1V1G6H-vzxU)
  - actor 지원 예정
    - 라이브러리 방식: 액터 내부 변수를 밖에서 그냥 읽어도 컴파일 에러가 나지 않습니다. 런타임에 크래시가 나거나, 운이 나쁘면 데이터가 꼬인 채로 계속 돌아갑니다.
	- Swift 언어 방식: 액터 외부에서 내부 상태에 접근하려고 하면 **"Actor-isolated state ... cannot be accessed from a non-isolated context"**라며 컴파일 자체가 안 됩니다. 즉, '실수할 자유'를 뺏어서 안전성을 보장합니다.
  - Swift 6 (2024년 9월 출시): **'완전한 동시성 안전(Full Data Isolation)'**이 기본값이 되었습니다. 이제 액터를 제대로 쓰지 않아 발생할 수 있는 데이터 레이스 위험을 컴파일러가 '에러'로 간주하여 빌드조차 막아버립니다.
  - swift ide지원이 좋으면 고려
    - 맥ide쓰래기
    - 윈도우 지원이 약하네

- jai
  - 아직 클로즈 소스
  - 객체지향(AoS)처럼 유지하면서, 메모리 레이아웃만 데이터 지향(SoA)으로 바꾸는 자동화 문법
  - odin과는 다르게 build.jai가 있네
  - [Jonathan Blow - Jai Demo and Design Explanation (KEYNOTE) - Updated](https://www.youtube.com/watch?v=IdpD5QIVOKQ)
  - https://www.mrphilgames.com/jai/
  - https://inductive.no/jai/
  - https://github.com/Ivo-Balbaert/The_Way_to_Jai/

- crystal
  - ruby문법 static typed. 아직 ide 문제. 컴파일 속도가 느림.
  - https://crystal-lang.org/
  - async/await가 없는건 별로
  - try/catch( rescue ) 있는건 별로
  - 루비 계열(문법)이 마음에 들지만, 그쪽 계열은 웹쪽에서 나온거라 뭔가 부족하게 나온다.
    - IDE지원이라던지
    - 컴파일 속도라던지

## Lisp 계열

- common lisp
  - 애증
- racket/scheme
- clojure
  - 별로
  - return문이 없음
  - try/catch, async지원 별로
- jscl - https://github.com/jscl-project/jscl
- WECL - https://turtleware.eu/posts/Common-Lisp-and-WebAssembly.html
- valtan - https://github.com/cxxxr/valtan

## erlang 계열

이쪽 세상도 뭔가 이상함. 디버깅도 힘들고.

- gleam - go
- elixir - ruby

## 소유권 언어

hylo빼면 별로.. 특히 rust는 작성하기 짜증난다

- rust
	- 라이프타임 'a
  - = 연산자가 copy인지 move인지 햇갈림

- vale
  - https://vale.dev/
  - 소유권 언어
	- 라이프타임 'a 안보인다


### JVM 계열

성능이나 GC도 잘 발전해 왔지만, 딱히...

- JAVA
  - 딱히
- Kotlin / Scala / Groovy
- 셋중에는 Kotlin이 그나마 봐줄만한듯. 그래도 쓰기 싫다.


## 애매함

- dart
  - 구글

### go 계열

- go
  - 구글
  - 별로
  - 채널도 별로

- odin
  - context로 allocator 지정 가능
  - async/await없는건 별로
  - ide는 지원하네  https://github.com/obiwan87/odin-intellij
  - 해커뉴스 의견 - https://news.ycombinator.com/item?id=45551995
  - EmberGen - odin
  - 패키지 관리자에 대해 악이라고 생각하는 기조가 있네
    - https://odin-lang.org/docs/faq/#how-do-i-manage-my-code-without-a-package-manager
  - https://programvideogames.com/
  - https://github.com/karl-zylinski/odin-raylib-hot-reload-game-template
  - https://www.gingerbill.org/

- https://nothings.org/
  - stb - https://github.com/nothings/stb
  - Advice for Writing Small Programs in C https://www.youtube.com/watch?v=eAhWIO1Ra6M


## 별로

ada
pascal


### ML계열

F#
OCaml
Prolog

### Haskell 계열

Haskell Elm


### python 계열 
- nim
  - python문법이 살짝 걸리긴해도 async/await 있네
  - try/catch 있는건 별로
  - transpiler라 조금 걸리긴 하는데
- erg
- mojo

### haxe - https://haxe.org/

이도 저도 아닌 언어


### c++계열

어차피 그 나물에 그 밥. C++자체가 요상해서 그런지 따라 나온애들도 상태가...

- cpp
  - MS빼고는 빌드 시스템도 엉망이고
  - cpp template 헬, 특히 STL 쓰기도 싫다.
  - 스마트포인터 unique_ptr 빼면 쓰레기고
  - 익셉션도 있어서 하..
  - << 스트림 연산자도 병신
- carbon - https://github.com/carbon-language/carbon-lang
  - 구글
  - C++코드와의 상호 운용성 달성 목표
  - 딱히... 메리트를 못느끼겠음
- cppfront - https://github.com/hsutter/cppfront


### D 언어

뭔가 있는것 처럼하는데, 딱히

- https://www.reddit.com/r/d_language/comments/1pbldga/my_game_written_in_d_in_a_custom_engine_is_now/
- https://store.steampowered.com/app/2290770/The_Art_of_Reflection/
- [DConf '25 Day One Livestream](https://www.youtube.com/live/Ou4KUBjr_78?t=8113)


### open dylan / julia

괄호 없네?

- https://en.wikipedia.org/wiki/History_of_the_Dylan_programming_language

## 혐

- Basic 계열
- javascript
- perl
  - 극혐 php / 계열 hack


## 스크립트

- 타입없는 lua 계열
  - 타입이 없어서.. 별로 이지만
  - https://github.com/ThePhD/sol2
- 타입있는 lua 계열
  - luau - https://luau.org/
    - https://github.com/nuskey8/luau-dotnet
    - https://github.com/sssooonnnggg/luau-debugger
  

- chaiscript
  - https://chaiscript.com/
    - 너무 cpp 용도
- http://squirrel-lang.org/
  - 너무 cpp 용도
- https://wren.io/
  - 문법 별로...
- AngelScript 별로...
- Mond 문법 멍미
  - https://github.com/Rohansi/Mond
  
- js 계열
  - https://github.com/sebastienros/jint
    - https://github.com/Veslo5/Csharp-ScriptingBenchmark
- msharp - https://www.msharp.co.uk/
  - 좋은데 개발중단이네
  
-typescript 계열
  - ClearScript - https://github.com/ClearFoundry/ClearScript
  - puerts - https://github.com/Tencent/puerts/tree/master/unity
  
- cs-script
  - https://www.cs-script.net/

