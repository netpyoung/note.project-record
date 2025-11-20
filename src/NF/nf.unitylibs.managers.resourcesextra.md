# nf.unitylibs.managers.resourcesextra

- [netpyoung/nf.unitylibs.managers.resourcesextra](https://github.com/netpyoung/nf.unitylibs.managers.resourcesextra)

## 시작하며

- puerts를 가지고 놀다가 DefaultLoader에서 파일있는지 여부를 판별하는데서 UnityEngine.Resources.Load 사용함.
  - 이게 유니티가 Resources쪽 API는 놔버려서 로드를 해서 체크를 해야함.
  ``` cs
  // https://github.com/Tencent/puerts/blob/f93907e9b6110497a2fc95827851b7e05ec1e2c9/unity/Assets/core/upm/Runtime/Src/Loader.cs#L96
  public bool FileExists(string filepath)
      bool exist = UnityEngine.Resources.Load(pathToUse) != null;
  ```

## 뭘할까

- Resources가 여러 제약이 있긴해도 간편함때문에 버리지는 못하고 계속 써야하는데, 중복로드 / 의존성그래프 문제
  - Resources는 Assets/Resources/ => Resources.assets
  - Addressable의 로컬로드는 StreamingAssets를 사용
    - Assets/StreamingAssets =>StreamingAssets/
- 일단 Resources.Load 없이 존재하는지 확인가능(런타임)하는 거랑
- 정적분석으로 Resources.Load("asdf"); // 이름 체크기능 - 코드짜면서 아날리시트 타임
  - 정적 분석이라 런타임 기능 함수를 가져다 쓸 수 없음
  - 정적 분석은 [netpyoung/nf.unitylibs.utils](./nf.unitylibs.utils.md)를 만들면서 조금 깔딱거려봤음

## 삽질

- Resources.IsExist 처럼 스태틱클래스를 확장시키고 싶었으나
  - 유니티는 C# 9까지 지원함.
  - 스태틱 클래스 확장은 C# 14 부터 지원
    - <https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/extension-methods#declare-extension-members>
|                                                                                                  |                                                                                                                    |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| AppContext.BaseDirectory;                                                                        | C:\Program Files\Microsoft Visual Studio\18\Insiders\Common7\ServiceHub\Hosts\ServiceHub.Host.Extensibility.amd64\ |
| typeof(ResourceLoadAnalyzer).Assembly.Location;                                                  | C:\Users\pyoung\AppData\Local\Temp\Roslyn\AnalyzerAssemblyLoader\4a41c1fd308e4a8b946ef9548f7a1c00\3\HelloHello.dll |
| Assembly.GetExecutingAssembly().Location;                                                        | C:\Users\pyoung\AppData\Local\Temp\Roslyn\AnalyzerAssemblyLoader\f5def63c834c4efd803ba9f171794778\3\HelloHello.dll |
| Environment.GetEnvironmentVariable("MSBuildProjectFullPath");                                    | ''                                                                                                                 |
| Environment.GetEnvironmentVariable("MSBuildProjectFullPath", EnvironmentVariableTarget.Process); | ''                                                                                                                 |
| context.Node.SyntaxTree.FilePath;                                                                | C:\temp\unityProj\Assets\Scenes\NewMonoBehaviourScript.cs                                                          |

## 해킹

- importer를 만들어서 __ResourceBlabla.txt 갱신

설정은


## Ref

- Runtime
  - [ScriptReference/Resources](https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Resources.html)
  - [ScriptReference/ScriptableObject](https://docs.unity3d.com/6000.4/Documentation/ScriptReference/ScriptableObject.html)
  - [ScriptReference/ISerializationCallbackReceiver](https://docs.unity3d.com/6000.4/Documentation/ScriptReference/ISerializationCallbackReceiver.html)
- Editor
  - [ScriptReference/ScriptableSingleton](https://docs.unity3d.com/6000.4/Documentation/ScriptReference/ScriptableSingleton_1.html)
  - [ScriptReference/FilePathAttribute](https://docs.unity3d.com/6000.4/Documentation/ScriptReference/FilePathAttribute.html)
  - [ScriptReference/SettingsProvider](https://docs.unity3d.com/6000.2/Documentation/ScriptReference/SettingsProvider.html)
  - [ScriptReference/SettingsProviderAttribute](https://docs.unity3d.com/6000.4/Documentation/ScriptReference/SettingsProviderAttribute.html)