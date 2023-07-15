# [Team3 - GitHub Issue Web Page](https://11th-team3-week3-githubissue.netlify.app)

👆🏻 제목을 클릭하면 배포된 사이트를 확인하실 수 있습니다.

<br/>

## 🗓️ 기간

- 2023년 7월 11일 ~ 2023년 07월 14일

## 🧭 목적

- 동료학습 및 협업능력과 새로운 인사이트
- [GitHub REST API](https://docs.github.com/en/rest)로 GitHub Issue 페이지 구현하기

<br/>

## ✅ Task

### ❗필수 요구 사항

- [x] 이슈 목록 및 상세 화면 기능 구현
- [x] Context API를 활용한 API 연동
- [x] 데이터 요청 중 로딩 표시
- [x] 에러 화면 구현
- [x] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

### ❗범위

1. 이슈 목록 화면

   - [x] 이슈 목록 가져오기 API 활용
   - [x] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - [x] 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - [x] 다섯번째 셀마다 광고 이미지 출력
   - [x] 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

2. 이슈 상세 화면

   - [x] 이슈의 상세 내용 표시
   - [x] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

3. 공통 헤더

   - [x] 두 페이지는 공통 헤더를 공유합니다.
   - [x] 헤더에는 Organization Name / Repository Name이 표시됩니다.

<br/>

## 💡 진행방식

1.  팀 컨벤션을 지정하여 [위키](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-1-3/wiki/Team-convention#commit-convention)에 정리해 두었습니다.
2.  [팀 노션](https://www.notion.so/3-5ae5a568e91640bb960bee97a98327a7?pvs=4)을 활용하여 각자의 사전과제를 보고 Best Practice라고 생각되는 과제에 투표를 합니다.
3.  팀원들의 원티드 인턴십 사전과제 중, 각각 Best Practice로 선발된 코드를 팀 프로젝트에 반영하고 VScode의 "Live Share" 확장프로그램을 사용하여 서로의 코드 작성법을 실시간으로 보며 함께 리팩토링을 진행하였습니다.
<!-- 4.  원격 브랜치에 pr을 올린 후, 한번 더 코드를 확인 한 후, 3명이상 승인을 받으면 develop 브랜치로 Merge합니다. -->

<br/>

## 🎖️ Members

<table border>
  <tbody>
    <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/64674174?v=4"  alt=""/>
        팀장 FE.<br/>
        <a href="https://github.com/hyerimhan">
          <img src="https://img.shields.io/badge/한혜림-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <!-- <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/111730140?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/ImGyuriKim">
          <img src="https://img.shields.io/badge/김규리-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td> -->
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/117807467?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/jh1109">
          <img src="https://img.shields.io/badge/노주희-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/94950829?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/NONONCRUST">
          <img src="https://img.shields.io/badge/신상호-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/44185091?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/marie-ming">
          <img src="https://img.shields.io/badge/정민지-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <!-- <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/92035406?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/hanseungjune">
          <img src="https://img.shields.io/badge/한승준-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td> -->
     </tr>
  </tbody>
</table>

<br/>

## 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

<br/>

## 👑 Best Practice

> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

### 📍 기능

- 이슈 목록
- 이슈 상세
- 이슈 목록 인피니티 스크롤

<table border>
  <tr>
    <td><img src="https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-3-3/assets/64674174/45762045-357b-49d9-acb4-0d70dab0b6ed" alt="GitHub issue Page"/></td>
  </tr>
  <tr>
    <td align="center">GitHub issue Page</td>
  </tr>
</table>

### 🌳 File Tree

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜issueApi.ts
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜IssueDetail.tsx
 ┃ ┣ 📜IssueItem.tsx
 ┃ ┣ 📜IssueList.tsx
 ┃ ┗ 📜LocalNavBar.tsx
 ┣ 📂constants
 ┃ ┗ 📜color.ts
 ┣ 📂context
 ┃ ┗ 📜IssueContext.tsx
 ┣ 📂httpClient
 ┃ ┗ 📜httpClient.ts
 ┣ 📂interface
 ┃ ┗ 📜issue.ts
 ┣ 📂lotties
 ┃ ┗ 📜loading.json
 ┣ 📂pages
 ┃ ┣ 📜Issue.tsx
 ┃ ┗ 📜NotFound.tsx
 ┣ 📂routes
 ┃ ┗ 📜router.tsx
 ┣ 📂utils
 ┃ ┗ 📜InfiniteScroll.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.ts
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts

```

### ✨ GitHub Issues Web Page

#### ❓ 선정이유

- 과제의 핵심 기능인 API연동이 깔끔하고 Context API와 HTTP통신의 관심사 분리가 잘 되어 있다고 생각합니다.저번 과제에서 피드백 받았던 부분을 class로 관심사 분리했습니다.

#### 💥트러블 슈팅

- 이슈

  - base url 다음에 임의의 값을 넣어주면 `/notFound`페이지로 바로 넘어가지 않고, 에러창이 뜹니다. 새로고침해야 `/notFound`페이지가 렌더됩니다.

  ```Javascript
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Issue />,
          children: [
            {
              path: '/:id',
              element: <IssueDetail />,
              errorElement: <Navigate to="/notFound" />,
            },
          ],
        },
        { path: '/notFound', element: <NotFound /> },
        { path: '*', element: <Navigate to="/notFound" /> },
      ],
    },
  ]);
  ```

- 해결

  - 비정상적으로 접근을 하면 바로 데이터 요청 없이 바로 "404 Not found"페이지로 이동을 해야하는데 데이터 요청을 하니까 GitHub API에서는 `documentation_url: "https://docs.github.com/rest/issues/issues#get-an-issue" message: "Not Found"` 에러가 출력됩니다.
  - 디테일 페이지를 불러올 때, 디테일 페이지를 불러오는 id값 앞에 `/issues` 경로를 추가합니다.
  - base url 다음에 임의의 값을 넣어주면 "404 Not found"페이지로 이동하고, `base url/issues/` 다음 임의의 값을 넣어주면 '존재하지 않는 이슈'가 화면에 출력됩니다.

  ```Javascript
  const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Issue />,
        errorElement: <Navigate to="/notFound" />,
        children: [
          {
            path: '/issues',
            element: <Navigate to="/" />,
          },
          {
            path: '/issues/:id',
            element: <IssueDetail />,
          },
        ],
      },
      { path: '/notFound', element: <NotFound /> },
      { path: '*', element: <Navigate to="/notFound" /> },
    ],
  },
  ]);
  ```

- 이슈

  - 빈값일 때 보여지는 "empty" 이미지와 데이터를 불러오는 중일 때 보여지는 "loading"이 함께 보여집니다. 빈값일 때는 "empty" 이미지만, 데이터를 불러오는 중일 때는 "loading"이 각각 따로 보여졌으면 좋겠습니다.

  ```Javascript
  const IssueDetail = () => {

    // ...

    return (
      <IssueDetailStyle>
        {detail ? (
          // ...
        ) : (
          <Loading />
        )}
      </IssueDetailStyle>
    );
  };
  ```

- 해결

  - 삼항연산자를 중복 사용 `(조건식(if) ? 참 : 조건식(else if) ? 참 : 거짓(else))` 하여 `detail` 데이터가 있으면 렌더링되고, 데이터를 불러오는 중일 땐 "loading"이 보이고, 데이터가 없을 땐 "empty" 이미지를 보여줍니다.

  ```Javascript
  const IssueDetail = () => {

    // ...

    return (
      <IssueDetailStyle>
        {detail ? (
          // ...
        ) : isLoading ? (
          <Loading />
        ) : (
          <WarningStyle>
            <ImWarning />
            존재하지 않는 이슈입니다
          </WarningStyle>
        )}
      </IssueDetailStyle>
    );
  };
  ```

      <br/>

- ❌ Bad

  1.  useEffect의 콜백함수는 바로 비동기적일 수 없습니다. 비동기적인 함수를 바로 콜백 함수로 넣을 수 없기 때문에, 즉시실행함수라는 비동기 함수를 useEffect가 실행될 때마다 생성해주고, 그 안에서 데이터를 가져오고 setDetail을 해주게 됩니다. 그리고 만든 즉시실행함수를 실행하게 됩니다. useEffect가 실행될 때마다 매번 함수가 생성되고 실행되니 매우 비효율적입니다.

  ```Javascript
    useEffect(() => {
      (async () => {
        try {
          setDetail(await issueDetail(location));
        } catch (error) {
          console.log(error);
        }
      })();
    }, [location, issueDetail]);
  ```

- ⭕ Good

  1.  useCallback을 활용하면, useCallback안에서 데이터를 가져오는 콜백 함수를 getIssueDetail에 넣어주고, useEffect안에서는 getIssueDetail만 호출을 해주면 코드가 훨씬 깔끔해지고, 로직도 분리되며 가독성도 올라가는 효과를 얻을 수 있습니다.

  ```Javascript
    const getIssueDetail = useCallback(async () => {
      try {
        setDetail(await issueDetail(location));
      } catch (error) {
        console.log(error);
      }
    }, [issueDetail, location]);

    useEffect(() => {
      getIssueDetail();
    }, [location, issueDetail, getIssueDetail]);
  ```

<br/>

## ✒️ 회고

<table border>
  <thead>
    <tr>
      <th width="10%">이름</th>
      <th width="45%">좋았던 점</th>
      <th width="45%">아쉬웠던 점</th>
    </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td align="center">규리</td>
      <td>
      </td>
      <td>
      </td>
    </tr> -->
    <tr>
      <td align="center">주희</td>
      <td>
      - 사전 과제보다 성장했습니다. TypeScript 사용, Context API 활용한 API 연동, 라우트 중첩을 프로젝트에 적용할 수 있는 기회였습니다. 
      </td>
      <td>
      - 시간이 너무 촉박했습니다 😭
      </td>
    </tr>
    <tr>
      <td align="center">상호</td>
      <td>
      - Redux와 Context API의 차이점에 대해 에전보다 자세히 알게 되었다.
      </td>
      <td>
      - 상세 페이지에서 목록 페이지로 돌아왔을 때 데이터가 유지되는 기능을 구현하지 못한 점이 아쉽다.
      </td>
    </tr>
    <tr>
      <td align="center">민지</td>
      <td>
      - 필수 요소가 동일한, 같은 조건 내에서도 사람마다 정말 다르게 구현해 내는 것이 신기했다. <br/>
      - 다른 사람의 코드를 보는 것은 여전히 어렵지만 도움이 많이 됬다.
      </td>
      <td>
      - 짧은 기한 내에 구현하려니 좋은 코드를 생각하면서 짤 시간이 부족했다.
      </td>
    </tr>
    <!-- <tr>
      <td align="center">승준</td>
      <td>
      </td>
      <td>
      </td>
    </tr> -->
    <tr>
      <td align="center">혜림</td>
      <td>
      - 글과 화면으로만 배운 class와 Context API를 직접 적용해 볼 수 있어서 좋았다. <br/>
      - 잘 알지 못한 리덕스 툴킷으로 구현하신 상호님의 코드를 보고 찾아보며 공부할 수 있어서 좋았다. 하지만 그래도 잘 모르겠는게 함정… 🤣 리덕스를 집중적으로 공부하고 프로젝트에 직접 적용해 봐야겠다.<br/>
      </td>
      <td>
      - 과제 기간이 짧아서 더욱 자세하게 공부하지 못한 것 같아 조금 아쉽다.
      </td>
    </tr>
  </tbody>
</table>
