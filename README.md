# pr — 개인 브랜딩 모바일 랜딩 페이지

> AI 활용이 막막한 직장인에게 실무에 바로 적용 가능한 AI 협업 방법을 활용하여 업무 생산성을 극대화하고,
> 창의적인 일에 집중하는 즐거움을 제공한다.

**🔗 라이브 사이트: https://vientokk03.github.io/pr/**

빌드 도구 없이 순수 HTML · CSS · JavaScript로 만든 모바일 우선(Mobile-first) 개인 브랜딩 랜딩 페이지입니다.
GitHub Pages로 배포되며, `main` 브랜치에 push하면 자동으로 반영됩니다.

---

## 📌 콘텐츠

| # | 주제 | 내용 |
|---|------|------|
| 1 | **AI 워크 스마트** | 실전 AI 활용법 & 성공사례 |
| 2 | **AI 동료 만들기** | No-code / Low-code 업무 자동화 |
| 3 | **AI로 데이터 인사이트 발견** | 데이터 분석 & 시각화 |

마지막 섹션의 **☕ 커피챗 신청** 버튼은 구글 폼으로 연결됩니다.

## 🧱 페이지 구성

1. **Hero** — 핵심 메시지와 커피챗 / 콘텐츠 보기 버튼
2. **Mission** — 브랜드 미션 문장과 핵심 가치 3가지
3. **Contents** — 주제 3개를 탭하면 펼쳐지는 아코디언 카드
4. **Coffee Chat** — 구글 폼 신청 안내
5. **하단 고정 CTA** — Hero를 지나면 나타나고, 커피챗 섹션에 도달하면 숨겨지는 신청 버튼

## ✨ 주요 기능

- 📱 모바일 우선 레이아웃 (PC에서는 480px 폭으로 가운데 정렬)
- 🎞️ 스크롤 시 요소가 부드럽게 나타나는 애니메이션 (`IntersectionObserver`)
- 🗂️ 접근성을 고려한 아코디언 카드 (`aria-expanded`)
- 📌 상황에 따라 나타나고 사라지는 하단 고정 CTA
- 📐 iPhone 노치/홈 인디케이터 영역 대응 (`safe-area-inset`)
- ♿ `prefers-reduced-motion` 설정 시 애니메이션 최소화
- 🔤 한글 가독성을 위한 [Pretendard](https://github.com/orioncactus/pretendard) 폰트, `word-break: keep-all`

## 📁 파일 구조

```
pr/
├── index.html   # 페이지 구조와 콘텐츠
├── style.css    # 디자인 (다크 테마, 색상 변수는 :root에서 관리)
├── script.js    # 커피챗 링크, 아코디언, 스크롤 애니메이션, 고정 CTA
└── README.md
```

## 🛠️ 수정 방법

| 바꾸고 싶은 것 | 위치 |
|----------------|------|
| 커피챗 구글 폼 링크 | `script.js` 맨 위 `COFFEE_CHAT_URL` |
| 문구 · 주제별 세부 항목 | `index.html` (각 `.card-body` 목록) |
| 색상 · 여백 · 폭 | `style.css` 상단 `:root` 변수 |
| 로고 텍스트 | `index.html`의 `.logo` |

## 💻 로컬에서 실행

별도 설치 없이 `index.html`을 브라우저로 열면 됩니다. 로컬 서버로 보고 싶다면:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

브라우저 개발자 도구의 모바일 화면 모드(Chrome: `Ctrl+Shift+M`)로 확인하는 것을 권장합니다.

## 🚀 배포

GitHub Pages(`main` 브랜치 루트)로 배포됩니다.

```bash
git add .
git commit -m "변경 내용"
git push
```

push 후 1~2분 안에 https://vientokk03.github.io/pr/ 에 반영됩니다.
