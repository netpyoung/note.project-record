# http://netpyoung.github.io

- <https://netpyoung.github.io/blog/jekyll_to_zola/>
- <https://netpyoung.github.io/blog/githubpages_jekyll_v3/>
- <https://netpyoung.github.io/blog/netpyoung.github.io_on_jekyll/>


스프링노트 - 서비스 종료
에버노트 - 익숙하지 않음
티스토리 - 커스터마이즈 불편
네이버 블로그 - 처음부터 고려대상 제외

그 당시 서비스가 없었음
노션 - 에메한 포지션
미디엄 - 구독유도 혐오



블로그 ? 개발 블로그 ? 

내용이 없는 이유
고찰 부족
블로그 보다 사이드프로젝트

## 생각중

- zig로 된 zine은 어떨까?
  - 아직 성숙하지 않은거 같아 일단 보류
  - https://github.com/kristoff-it/zine


## snippet

``` html
<details>
<summary>Tab 1</summary>

Content for Tab 1
| a   |
| --- |
| b   |

</details>

<details>
<summary>Tab 2</summary>

Content for Tab 2

</details>
```

``` html
<style>
/* 전체 그리드: 왼쪽 레이블 140px, 오른쪽 콘텐츠 유동 */
.vtabs {
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: start;
  border: 1px solid #ccc;
  min-height: 160px;
  width: 100%;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* 라디오 숨기기 (하지만 DOM순서는 유지) */
.vtabs input[type="radio"] {
  display: none;
}

/* 레이블: 왼쪽 컬럼에 쌓이도록 설정 */
.vtabs label {
  display: block;
  padding: 0.6em 0.9em;
  border-bottom: 1px solid #ddd;
  background: #f3f3f3;
  cursor: pointer;
  user-select: none;
  grid-column: 1;          /* 왼쪽 컬럼 */
}

/* 라벨 hover / 포커스 시 */
.vtabs label:hover,
.vtabs label:focus {
  background: #e9e9e9;
}

/* 콘텐츠: 오른쪽 컬럼 */
.vtabs .content {
  display: none;           /* 기본 숨김 */
  padding: 1em;
  grid-column: 2;          /* 오른쪽 컬럼 */
  border-left: 1px solid #eee;
  background: white;
}

/* 체크된 탭의 레이블 스타일 (input 바로 다음 label에만 적용) */
.vtabs input:checked + label {
  background: white;
  font-weight: 600;
  border-bottom: 1px solid white; /* 이걸로 레이블과 콘텐츠가 연결된 듯 보이게 함 */
}

/* 체크된 탭에 해당하는 콘텐츠만 표시 */
.vtabs input:checked + label + .content {
  display: block;
}

/* 반응형: 좁은 화면에서는 레이블을 위로 쌓음 */
@media (max-width: 520px) {
  .vtabs {
    grid-template-columns: 1fr;
  }
  .vtabs label {
    grid-column: 1;
    border-right: none;
  }
  .vtabs .content {
    grid-column: 1;
    border-left: none;
    border-top: 1px solid #eee;
  }
}
</style>

<div class="vtabs">

  <!-- 탭 1 -->
  <input type="radio" name="vtabs" id="tab-a" checked>
  <label for="tab-a">Overview</label>
  <div class="content">
  
**Overview content**  
간단한 개요나 요약을 넣는 영역입니다.

  </div>

  <!-- 탭 2 -->
  <input type="radio" name="vtabs" id="tab-b">
  <label for="tab-b">Details</label>
  <div class="content">
  
**Details content**  
상세 내용을 여기에 작성하세요.
  
  </div>

  <!-- 탭 3 -->
  <input type="radio" name="vtabs" id="tab-c">
  <label for="tab-c">Examples</label>
  <div class="content">

**Examples content**  
코드 블록이나 예제를 넣을 수 있습니다.

  </div>

  <input type="radio" name="vtabs" id="tab-d">
  <label for="tab-d">Examples</label>
  <div class="content">

**Examples content**  
코드 블록이나 예제를 넣을 수 있습니다.

  </div>

  <input type="radio" name="vtabs" id="tab-e">
  <label for="tab-e">Examples</label>
  <div class="content">

**Examples content**  
코드 블록이나 예제를 넣을 수 있습니다.

  </div>


  <input type="radio" name="vtabs" id="tab-f">
  <label for="tab-f">Examples</label>
  <div class="content">

**Examples content**  
코드 블록이나 예제를 넣을 수 있습니다.

  </div>

</div>

```

- 검색창 - https://www.fusejs.io/demo.html
  - [heyimalex/wafu](https://github.com/heyimalex/wafu)- Rust port of Fuse.js 
https://github.com/netpyoung/netpyoung.github.io/commit/8902af639842a67a4656e2066dac8440ec89fc3b
https://github.com/lispkorea/lispkorea.github.io/commit/04c68a1cb20e7e9f2902047c91bfb13d906834da