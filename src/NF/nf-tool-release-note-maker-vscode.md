# nf-tool-release-note-maker-vscode

- https://marketplace.visualstudio.com/items?itemName=netpyoung.nf-tool-release-note-maker-vscode
- https://github.com/netpyoung/nf-tool-release-note-maker-vscode

## 시작하며

- [NF.Tool.ReleaseNoteMaker](./NF.Tool.ReleaseNoteMaker.md)을 커맨드라인으로 확인하려니 불편
  - 에디터는 VSCode가 대세

## 참고

- [get-started/your-first-extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [yeoman](https://yeoman.io/)
  - 템플릿 기반 프로젝트 생성기(스캐폴딩 도구)
- `npx --package yo --package generator-code -- yo code`
  - yo, generator-code 패키지를 활용하면서 yo code 명령어 실행
- [microsoft/vscode-generator-code](https://github.com/microsoft/vscode-generator-code)
  - 아직 bun을 지원안하네 https://github.com/microsoft/vscode-generator-code/pull/475
- [microsoft/vscode-vsce](https://github.com/microsoft/vscode-vsce)
  - @vscode/vsce
  - The Visual Studio Code Extension Manager
  - Access Token 생성 - https://azure.microsoft.com/services/devops/
  - Publisher 등록 - https://marketplace.visualstudio.com/manage/createpublisher
    - https://marketplace.visualstudio.com/VSCode > Publish extensions > Create Publisher

## 기록

### 배포

vsce package - 패키지 파일로 만듬 - 후 에 파일을 통해서 배포도 가능
vsce login <publisherName>
vsce publish - 바로배포

- publish대신 vsce package 로 패키지 파일을 사이트에서 수동 업로드.
  - 뭔가 마음이 놓인다.



### 네이밍 실수 nf-tools-release-note-maker-vscode => nf-tool-release-note-maker-vscode

- 나는 툴에 대해 단수 tool을 썼는데 까먹고 복수형인 tools를 붙여버렸다.
- nf-tools-release-note-maker-vscode - NF.Tool.ReleaseNoteMaker 이름이 안맞는 문제가 생겼는데,
  - vscode extension market에 올려져 있어 그냥 유지할까 생각도 했지만,
  - 인스톨횟수가 2회(내가 테스트용으로 한것)밖에 없고,
  - nuget과는 달리 삭제가 가능해서 과감히 삭제후 이름바꾸고 다시 마켓에 업로드
  - 처음 tools로 업로드 했을시에는 5분만에 Verifing이 끝나더니만, 이전 툴을 삭제하고 바로 tool로 올린 탓인지 1시간 정도 걸렸네


### 폴더구조를 바꾸려니 symbolic link가 필요하네

New-Item -ItemType SymbolicLink -Path "./nf-tools-release-note-maker-vscode/README.md" -Target "../README.md"
New-Item -ItemType SymbolicLink -Path "./nf-tools-release-note-maker-vscode/LICENSE.md" -Target "../LICENSE.md"
New-Item -ItemType SymbolicLink -Path "./nf-tools-release-note-maker-vscode/CHANGELOG.md" -Target "../CHANGELOG.md"

### VSCode 멀티인풋을 하려면 webview가 필요하네

- https://github.com/Microsoft/vscode-extension-samples/tree/main/webview-sample
- framework가져다 쓸까하다가 그냥 gpt한테 심플하게 만들어달라고 해서 만듬
  - https://github.com/microsoft/vscode-webview-ui-toolkit - deprecated 
  - https://vscode-elements.github.io/
  - https://github.com/vscode-elements/elements
  - https://fast.design/
  - https://lit.dev/

webview event

``` html
      <script>
        const vscode = acquireVsCodeApi();

        // 1) 버튼 클릭 시 확장으로 메시지 보내기
        document.getElementById('send').addEventListener('click', () => {
          vscode.postMessage({ command: 'alert', text: 'Hello from Webview!' });
        });

        // 2) 확장에서 온 메시지 받기
        window.addEventListener('message', event => {
          const message = event.data;
          switch (message.command) {
            case 'init':
              console.log('Message from extension:', message.data);
              break;
          }
        });
      </script>
```

### 기타

- 흠 나중에 wasm파일 쓸 일 있으면 한번 여기서 테스트 해보고 싶네

activationEvents는 정적으로만 지정 가능 → configuration 기반 동적 활성화는 불가


폴더에 파일이 존재하면 메뉴가 생겨서 우클릭해서 확인하고싶었지만, Explorer에서 폴더를 선택할 때마다 발생하는 이벤트는 없음

ReleaseNote.config.toml 우클릭 임시파일에 preview를 쓰고 마크다운 렌더

resourceFilename == ReleaseNote.config.toml

ReleaseNote.config.toml를 config쪽으로 빼야겠네


https://code.visualstudio.com/api/references/when-clause-contexts#inspect-context-keys-utility

bun add --global yo generator-code



yo code Hello2 --extensionType=ts --pkgManager=npm --skip-install --gitInit=true --bundler=esbuild --skipOpen



node_modules/@types/vscode/index.d.ts.

package.json
  "contributes": {
    "commands": [
      {
        "command": "helloworld.helloWorld",
        "title": "Hello World"
      }
    ]
  },
  
  
const disposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
	vscode.window.showInformationMessage('Hello World!');
});

context.subscriptions.push(disposable);


https://github.com/shd101wyy/markdown-preview-enhanced

https://github.com/dev-jonghoonpark/ettk-vscode-extention/



"menus": {
  "explorer/context": [
	{
	  "command": "myExtension.processFolder",
	  "when": "explorerResourceIsFolder",
	  "group": "navigation"
	}
  ]
}


https://esbuild.github.io/
https://github.com/evanw/esbuild

https://bun.com/docs/bundler/esbuild

- Error: Invalid problemMatcher reference: $esbuild-watch
  - https://marketplace.visualstudio.com/items?itemName=connor4312.esbuild-problem-matchers
  
  
.vscodeignore - VS Code 확장(VSIX) 배포용 필터 파일

.vscode/extensions.json
  "recommendations": ["dbaeumer.vscode-eslint", "connor4312.esbuild-problem-matchers", "ms-vscode.extension-test-runner"]


when 조건식은 정적 컨텍스트키만 됨
https://code.visualstudio.com/api/references/when-clause-contexts

- when 조건식 기반
- setContext 기반
	https://code.visualstudio.com/api/references/commands

resourceExtname 


https://code.visualstudio.com/docs/languages/markdown


await vscode.commands.executeCommand('markdown.showPreviewToSide', tmpUri);

await vscode.commands.executeCommand('markdown-preview-enhanced.openPreview', doc.uri);



https://github.com/BetterThanTomorrow/joyride 도 있네


"activationEvents": ["onStartupFinished"],


https://code.visualstudio.com/api/references/activation-events#workspaceContains

"activationEvents": [
    "workspaceContains:**/.editorconfig"
]


  "activationCommands": {
    "atom-workspace": "markdown-preview-enhanced:toggle"
  },
  "activationHooks": [
  
  
  https://code.visualstudio.com/api/references/contribution-points#contributes.menus
  https://code.visualstudio.com/api/references/contribution-points#contributes.submenus
  
  https://github.com/microsoft/vscode-extension-samples 예제
  
  DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.


    "contributes": {
    "commands": [
    ],
    "menus": {
      "explorer/context": [
      ],
      "editor/context": [
      ]
    }
	}
	
	
--- 설정

"contributes": {
  "configuration": {
    "title": "My Extension Settings",
    "properties": {
      "myExt.enableFeature": {
        "type": "boolean",
        "default": true,
        "description": "Enable or disable the special feature (토글)"
      },
      "myExt.customMessage": {
        "type": "string",
        "default": "Hello!",
        "description": "Set a custom message (문자열 입력)"
      }
    }
  }
}

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('myExt');

    const isEnabled = config.get<boolean>('enableFeature');
    const message = config.get<string>('customMessage');

    if (isEnabled) {
        vscode.window.showInformationMessage(`Feature is enabled! Message: ${message}`);
    }

    // 설정 변경 감지
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('myExt.enableFeature') || event.affectsConfiguration('myExt.customMessage')) {
            const newConfig = vscode.workspace.getConfiguration('myExt');
            const newEnabled = newConfig.get<boolean>('enableFeature');
            const newMessage = newConfig.get<string>('customMessage');

            vscode.window.showInformationMessage(`Updated! Enabled: ${newEnabled}, Message: ${newMessage}`);
        }
    });
}



https://code.visualstudio.com/api/references/contribution-points#contributes.configuration

예제에선 값이 딕셔너리인데, id를 포함한 어레이로 바꾸면 트리형태로 추가됨 - https://github.com/dotnet/vscode-csharp/blob/main/package.json
    "configuration":
      {
        "title": "My Extension Settings",

    "configuration": [
      {
        "title": "My Extension Settings",
        "id": "a.a.a1",
		
		




https://github.com/qjebbs/vscode-plantuml
https://github.com/BetterThanTomorrow/calva



Pulumi

await vscode.window.showQuickPick - 상단 선택
 vscode.window.showInformationMessage - 우측 하단 yes, no

## TODO

### 아이콘

https://code.visualstudio.com/api/references/extension-manifest

### html을 그냥 문자열로 박아놨는데 뭔가 방법이 없을까?

https://medium.com/@sampsonjoliver/importing-html-files-from-typescript-bd1c50909992

