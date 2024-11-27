# NF.Tool.ReleaseNoteMaker

## 시작하며

- [히스토리에서 뽑는건 별로](../think/changelog-based-on-git-history.md)
- [ADR](../think/adr.md)같은 도구가 있으면 좋겠다.
  - [towncrier]을 찾았다.

## 기록

- 렌더템플릿 및 라이브러리 선택
  - towncrier는 [Jinja2]
  -  [liquid] / razor / t4
     -  디버깅 가능한걸로
     -  mono t4 디버깅 꽤 괜찮네, 근데 string넘기는게 아니라 filepath라 찝찝

- AnsiConsole
  - public override string StackTrace { get; } 안먹히는것.
    - 이슈를 일단 남김 - <https://github.com/spectreconsole/spectre.console/issues/1692>
  - stderr AnsiConsole 어떻게 처리할고
  - MultiSelectionPrompt 해서 키를 입력받아 캔슬 넣고싶었는데 캔슬이 없네?
    - Select는 있는데 SelectAll/DeselectAll이 없네
    - <https://github.com/spectreconsole/spectre.console/discussions/700>

- towncrier
  - 다이나믹 언어 타입 및 네이밍 문제 - 저쪽 세상 네이밍 센스 맘에 안듬.

- assemblyLocation empty
  - `<IncludeAllContentForSelfExtract>true</IncludeAllContentForSelfExtract>`
  - 이 옵션을 사용하면 애플리케이션의 모든 콘텐츠 파일(예: DLL, 구성 파일, 리소스 파일 등)이 실행 파일 내에 포함되어 실행 파일을 실행하면 자동으로 추출되고 실행됩니다.
  - <https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview?tabs=cli>


- PatchNoteMaker 했는데... ReleaseNoteMaker 도 있는데...
  - PatchNoteMaker했다가 최종적으로 ReleaseNoteMaker로 결정.

- Tomlyn 사용법
  - array를 키를 지정해서 dic으로 넣는 기능이 있으면 좋을것같은데...
- 집합연산 까먹네
  - <https://learn.microsoft.com/en-us/dotnet/csharp/linq/standard-query-operators/set-operations>
  - 표로 정리했다가 그냥 그때그때 검색하자. 나중에 필요하면 다시 표로정리.
- public void Deconstruct(out string fname, out string lname)
  - <https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/functional/deconstruct#user-defined-types>
- 구조체 생성자 방지
  - public ObsoleteAttribute(string? message, bool error)
    - throw new InvalidOperationException

## 잡다한

- filename => fileName
- <https://stackoverflow.com/questions/159017/named-string-formatting-in-c-sharp>
- textwrap


[towncrier]: https://github.com/twisted/towncrier
[Jinja2]: https://jinja.palletsprojects.com/
[sebastienros/fluid]: https://github.com/sebastienros/fluid
[liquid]: https://shopify.dev/docs/api/liquid
[RazorLight]: https://github.com/toddams/RazorLight
[RazorEngineCore]: https://github.com/adoconnection/RazorEngineCore
[Toml format]: https://toml.io/en/
[xoofx/Tomlyn library]: https://github.com/xoofx/Tomlyn
[T4 template]: https://learn.microsoft.com/en-us/visualstudio/modeling/code-generation-and-t4-text-templates
[mono/t4 library]: https://github.com/mono/t4
[Spectre.Console]: https://spectreconsole.net/
[Spectre.Console.Cli]: https://spectreconsole.net/cli/
[reStructuredText]: https://www.sphinx-doc.org/en/master/usage/restructuredtext/

