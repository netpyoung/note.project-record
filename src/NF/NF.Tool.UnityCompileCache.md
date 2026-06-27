# NF.Tool.UnityCompileCache

- [NF.Tool.UnityCompileCache](https://github.com/netpyoung/NF.Tool.UnityCompileCache)
- [doc](https://netpyoung.github.io/NF.Tool.UnityCompileCache/docs/)

## 레코드

- IL2CPP로 빌드시 clang.exe로 컴파일이 시작됨. 컴파일 캐쉬를 사용할 수 있으면 시간 절약을 할 수 있을 것임.
  - 다만 유니티가 clang.exe를 실행하는데 어떻게 캐쉬 실행을 하느냐가 문제인데, wrapper에서 그냥 CreateProcess 호출하면 캐쉬가 오동작함.
  - 캐쉬 실행시 lpApplicationName과 lpCommandLine을 조절 해줘야함.

dotnet으로 nativeaot로 빠르게 wrapper작성해보고 dotnet은 아무래도 용량이 크니, c/cpp 생각해봤다가 딱히 내 프로젝트고 해서 zig로 작성.

## 참고

- https://github.com/dotnet/runtime/blob/eeaef45074f577f35bfd1b6b02a029d4053a9683/src/libraries/System.Diagnostics.Process/src/System/Diagnostics/Process.Windows.cs#L588
  - dotnet에선 Interop.Kernel32.CreateProcess시 STARTUPINFO에 null을 넘겨주는것 밖에 없음.
  - lpCommandLine에서 argv[0]가 결정됨 