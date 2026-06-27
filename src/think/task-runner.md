# task runner

## 결론

- [just](https://github.com/casey/just)를 쓰자
  - 100프로 맘에 드는건 아니지만 일단.. 뭐... 대안이 별로...
- 로직들어간건 그냥 dotnet으로
  - https://devblogs.microsoft.com/dotnet/announcing-dotnet-run-app/

## 주저리

- https://github.com/ruby/rake
- https://github.com/pyinvoke/invoke
- https://github.com/dotnet-script/dotnet-script

rake를 전에 좋아해서 시작함. \`dir\`같이 명령어 바로 실행시키는 것이 맘에듬. 하지만 라이브러리 사용도 그렇고 점점 코딩하는게 불편해짐. 대중적인 pyhton으로 invoke도 써봤지만 결국엔 ruby와 마찬가지로 코딩도 불편하고 프로젝트안에 알아야 하는 언어가 하나 더 추가되는 것일 뿐. 후에 dotnet-script로 사용하다가 file-based C# apps이 가능해지고선 복잡해진 로직은 .cs로 처리하는게...

다만 dotnet쪽에 태스크 런하는게 썩 괜찮은게 없어서 테스크 러너는 아싸리 just로..

## Ref

- https://github.com/bartdorlandt/Beyond_the_Makefile