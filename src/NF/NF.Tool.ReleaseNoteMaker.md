# NF.Tool.ReleaseNoteMaker

- <https://github.com/netpyoung/NF.Tool.ReleaseNoteMaker>

## 시작하며

- [히스토리에서 뽑는건 별로](../think/changelog-based-on-git-history.md)
- [ADR](../think/adr.md)같은 도구가 있으면 좋겠다.
  - [towncrier]을 찾았다.

## 기록

### 라이브러리 결정

- AnsiConsole
  - public override string StackTrace { get; } 안먹히는것.
    - 이슈를 일단 남김 - <https://github.com/spectreconsole/spectre.console/issues/1692>
  - stderr AnsiConsole 어떻게 처리할고
  - MultiSelectionPrompt 해서 키를 입력받아 캔슬 넣고싶었는데 캔슬이 없네?
    - Select는 있는데 SelectAll/DeselectAll이 없네
    - <https://github.com/spectreconsole/spectre.console/discussions/700>
  - 최대길이
    - AnsiConsole.Profile.Width = 255;

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

### 렌더템플릿 및 라이브러리 선택

visual studio에서 디버깅이 되는거에 가중치를 많이 줌.

-  t4
   -  디버깅 가능한걸로
   -  mono t4 디버깅 꽤 괜찮네, 근데 string넘기는게 아니라 filepath라 찝찝
- razor
   - 아직 관리가 되지 않는듯 : https://github.com/adoconnection/RazorEngineCore/pull/148
   - razor로도 template만들어 봤는데 의외로 t4보다 가시성이 안좋았다.
-  [liquid]
  - towncrier는 [Jinja2]
  - 일단 liquid를 넣긴 넣었는데 t4가 더 나아보여서 삭제할까 보류중 => 혹시나 다른 사람들이 쓰면 돌이키기 힘드니 빠른 삭제로 결정.
    - [Template.liquid](https://github.com/netpyoung/NF.Tool.ReleaseNoteMaker/blob/3980c961869794b69bc01e7d5637e73570f2111c/NF.Tool.ReleaseNoteMaker/NF.Tool.ReleaseNoteMaker.CLI/res/Template.liquid)
    - [Template.tt](https://github.com/netpyoung/NF.Tool.ReleaseNoteMaker/blob/3980c961869794b69bc01e7d5637e73570f2111c/NF.Tool.ReleaseNoteMaker/NF.Tool.ReleaseNoteMaker.CLI/res/Template.tt)
  - [fluid](https://github.com/sebastienros/fluid) / [scriban](https://github.com/scriban/scriban) / [dotliquid](https://github.com/dotliquid/dotliquid)
    - dotliquid는 Drop만드는게 귀찮아서 패스
    - <https://github.com/microsoft/semantic-kernel/issues/6233> 에서 scriban대신 fluid쓰는거보고 fluid로 선택
  - liquid를 지원했으나 whitespace관리가 어렵고 fluid에서 class의 method호출이 안되었다.
    - 안되서 {%- assign categoryIssues = category.GetAllIssues() -%}
    - 이렇게 함 {%- assign categoryIssues = category.CategoryIssues -%}

### 네이밍

- towncrier
  - 다이나믹 언어 타입 및 네이밍 문제 - 저쪽 세상 네이밍 센스 맘에 안듬.

- PatchNoteMaker 했는데... ReleaseNoteMaker 도 있는데...
  - PatchNoteMaker했다가 최종적으로 ReleaseNoteMaker로 결정.

### 기타

- assemblyLocation empty
  - `<IncludeAllContentForSelfExtract>true</IncludeAllContentForSelfExtract>`
  - 이 옵션을 사용하면 애플리케이션의 모든 콘텐츠 파일(예: DLL, 구성 파일, 리소스 파일 등)이 실행 파일 내에 포함되어 실행 파일을 실행하면 자동으로 추출되고 실행됩니다.
  - <https://learn.microsoft.com/en-us/dotnet/core/deploying/single-file/overview?tabs=cli>

- line ending 문제
  - <https://en.wikipedia.org/wiki/Newline>
- TestInitialize/TestCleanup/DeploymentItem/TestMethod
  - DeploymentItem들이 TestInitialize보다 먼저 실행되는데 막상 TestContext.DeploymentDirectory는 동일해서 파일조작 테스트는 오작동을 일으킬 가능성이 생김.
  - public required TestContext TestContext { get; set; } 로 가져와서 시작시 폴더이동.

- docfx
  - `[!INCLUDE [<title>](<filepath>)]`
    - <https://dotnet.github.io/docfx/docs/markdown.html?q=include&tabs=linux%2Cdotnet#include-markdown-files>
  - `[!code-<language>[](<filepath><query-options>)]`
    - <https://dotnet.github.io/docfx/docs/markdown.html?q=include&tabs=linux%2Cdotnet#code-snippet>
  - `mermaid`
    - <https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet#mermaid-diagrams>
  - NOTE / TIP / IMPORTANT / CAUTION / WARNING
    - <https://dotnet.github.io/docfx/docs/markdown.html?tabs=linux%2Cdotnet#alerts>

``` txt
> [!NOTE]
> Information the user should notice even if skimming.
```

- pack 시 define flag를 알 수 없네..
  - <https://github.com/dotnet/sdk/issues/26324>, <https://github.com/dotnet/sdk/issues/10402>
- reno라는 것도 있네?
  - <https://github.com/openstack/reno>
  - <https://docs.openstack.org/reno/latest/>


### .tt vs .t4

- 확장자를 .tt로 했다가 t4로 했다가 다시 tt로.
  - 처음에 찾아봤을때 t4 template가 어감에 감겨 찾아봤다가 .tt가 많이 쓰인다는 사실을 알고 .tt로 결정
  - 후에 까먹어서 왜 .tt야라고 생각하고 t4가 맘에 들어서 .t4로 변경
  - 후에 또 뭔가 쌔해서 다시 찾아보고 .tt로 롤백


## 잡다한

- filename => fileName
- <https://stackoverflow.com/questions/159017/named-string-formatting-in-c-sharp>
- python textwrap
- <https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-11.0/raw-string-literal>
- 러스트로 작성된 것도 있네?
  - <https://github.com/nekitdev/changelogging>
    - draft대신 preview라는 명령어를 넣은건 좋은듯. <https://docs.rs/changelogging/latest/changelogging/#preview>
- https://github.com/twisted/towncrier
  - https://devguide.python.org/core-team/committing/index.html#what-s-new-and-news-entries
  - https://docs.gitlab.com/development/changelog/
  - https://github.com/miniscruff/changie

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

