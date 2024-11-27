# 템플릿 언어

## 결정

- 디버깅때문이라도 t4쓰자. 추후 razor디버깅 방법을 안다면 이쪽으로 가도 될듯?

## 시도

- [mustache] / [handlebars] 는 문법이 간단한데 이걸 기반으로 템플릿을 작성해보면 더 개판남.
- 비쥬얼스튜디오 [T4 template] / [razor] 가 디버깅이 잘됨
  - t4로 작성해도 `<# #>` 하다보면 너무 지저분해보임
- [liquid] 개인적으로 맘에드는데 디버깅이 안되네..



[liquid]: https://shopify.dev/docs/api/liquid
[T4 template]: https://learn.microsoft.com/en-us/visualstudio/modeling/code-generation-and-t4-text-templates
[mustache]: https://mustache.github.io/
[handlebars]: https://handlebarsjs.com/
[razor]: https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor