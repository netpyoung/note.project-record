
- https://github.com/netpyoung/nf.data-flow
  - assembly로드 하는것까지 했음
  
- partial db 갱신도
  - excel을 winform에 드래그하면 그 엑셀에꺼만 갱신
- Razor page

- Attr지정
- 클라랑 서버 데이터 분리
- 타입지정

validate
- table column 이름 중복 - 알려주기

???
- unique id같은경우 알려주기?



템플릿은 T4로 C#함수를 쓸 수 있는


// sheet / enums / consts / class
https://marketplace.visualstudio.com/items?itemName=bricelam.T4Language

### const

CONST
| Type | Name | Value | Desc  |
| ---- | ---- | ----- | ----- |
| int  | n1   | 1     | hello |

### Enum

E_ENUM

| Name | Value | Desc  |
| ---- | ----- | ----- |
| n1   | 1     | hello |
| >    | n1    | hello |


https://shd101wyy.github.io/markdown-preview-enhanced/#/markdown-basics?id=table

{
    "markdown-preview-enhanced.enableExtendedTableSyntax": true,
}

셀 합치니까 멀티라인시 표가 안늘어나네? 'AutoFit Row Height' on merged cells

### class

|       |              |              |
| ----- | ------------ | ------------ |
| ATTR  | [PrimaryKey] | [Unique]     |
| TYPE  | int          | int          |
| NAME  | id           | character_id |
| DESC  |              |              |
| VALUE | 1            | 1            |



tableroot/
  Defines/
    Const_1.xlsx
    Const_2.xlsx
    Enum_1.xlsx
    Enum_2.xlsx
  Hello/
    Hello_1.xlsx
    Hello_2.xlsx


참조
상대경로로 해도 ='[ComponentsC.xlsx]Sheet1'!A1 => 결국 절대경로로 되어버림

외부 파일과 참조 파일이 동시에 열려 있을 때만 상대경로 사용 가능 - INDIRECT / VLOOKUP
https://stackoverflow.com/questions/11629633/how-do-i-make-a-relative-reference-to-another-workbook-in-excel


나중에 git 커밋마다 비교하면서 수정내역 알 수 있으면 좋겠네
  - 누가
  - 언제
  - 파일
  - 시트
  - 내용

NPOI는 수식평가 외부참조가 안됨

- This workbook contains link to one or more external sources that could be unsafe.
  - File > Info > Edit Links to Files > 톱니바퀴 > Always Refresh
  
) https://excel-dna.net/


sqlite 추출
json 추출


#Comment ? $Comment
  $는 엑셀에서 자주쓰는것이므로 쓰지말자

&END ? :END

client - 클라 전용
server - 서버 전용
빈칸   - 둘다 공용

- 같은 값으로 머지한것도 지원

- 셀에 대한 Note기능은 활용하지 않는걸로

_ignore


[Unique]
[PrimaryKey]


예제
Type
id 다른시트 참조

Const / Enum / 클래스

클래스 상속 금지


https://iekill.tistory.com/41

- https://github.com/catsnipe/XlsToJson
  - json/scriptableobject
- https://github.com/cathei/BakingSheet
  - enum이랑 dictionary다루는게 신기했었는데 지금보면 별로인 접근방식
- https://github.com/elky84/ExcelToDotnet **
- https://github.com/qingfeng346/ScorpioConversion
  - bytes	二进制数据,支持 base64:// file://
https://github.com/kimsama/Unity-QuickSheet
https://github.com/hnb-rabear/excel-to-unity
  - winform 툴
  - BouncyCastle.Crypto
  - BouncyCastle.Cryptography
  - markdig
- https://github.com/MyNameIsDabin/TabbySheet
- https://blog.naver.com/gamephysics/223825533965

- https://github.com/NtreevSoft/Crema
  - https://github.com/s2quake/crema
  - https://github.com/MahApps/MahApps.Metro
  - https://github.com/Actipro/WPF-Controls
  - https://github.com/mmanela/diffplex



- https://github.com/ExcelDataReader/ExcelDataReader
- https://github.com/tonyqus/npoi
- https://github.com/ClosedXML/ClosedXML




https://github.com/sveinungf/spreadcheetah

https://github.com/Cysharp/MasterMemory
https://www.litedb.org/



https://github.com/zirplsoftware/ZCalcEngine
https://github.com/pieterderycke/Jace
https://github.com/soomin-kevin-sung/dotnet-calculation-engine


https://github.com/softlion/SQLite.Net-PCL2 - IBlobSerializer 지원

root/
  /ByteFiles/image...
  /Sheets/
  

byte[] - byte:// - 이미지 같은거
string - text:// - 스크립트 같은거
string - base64://
string - base64url://




설정파일
- regexp _스코어시작

_스코어 시작

int / float / byte[]  / DateTime

## 시트

주석시트


## 
List<int> [1, 2, 3]
Vector3 <1, 2, 3>
TimeSpan? nullable

키prim /sub



3번째로 뒤엎는거다.


시트당 클래스/enum/const를 같이 묶으려했다


        // enum
        // - header: *NAME | *FIELD
        // - field: *NAME | *VALUE | DESC | ATTR

        // const
        // - header: *NAME | *FIELD
        // - field: *TYPE | *NAME | *VALUE | DESC | ATTR

        // class
        // - header: ?*NAME | *TYPE | PART | DESC | *TABLE


IFormulaEvaluator evaluator 검증



컴파일
Microsoft.CodeAnalysis.CSharp.Workspaces
Microsoft.Build.Locator



https://learn.microsoft.com/ko-kr/nuget/consume-packages/package-references-in-project-files#controlling-dependency-assets







## client/server assembly만들어서 sqlite에 삽입하니 충돌문제

- 처음에는 어셈블리 중복로드 문제인가 싶어서 살펴봤지만
  - https://learn.microsoft.com/ko-kr/dotnet/standard/assembly/unloadability
- 코드를 보니 sqlite.net내부에 타입 맵핑 태이블(_mapping)이 있는데 캐슁되어 있는 부분에서 문제가 발생. 클리어 함수가 노출되어 있지않아, 리플렉션으로 강제호출


## TODO

- 프로토콜 추가
  - file:// file path
  - proto:// json

