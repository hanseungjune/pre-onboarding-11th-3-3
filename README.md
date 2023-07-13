# [Team3 - GitHub Issue Web Page]()

👆🏻 제목을 클릭하면 배포된 사이트를 확인하실 수 있습니다.

<br/>

## 🗓️ 기간

- 2023년 7월 11일 ~ 2023년 07월 14일

## 🧭 목적

- 동료학습 및 협업능력과 새로운 인사이트

<br/>

## 💡 진행방식

1.  팀 컨벤션을 지정하여 [위키](https://github.com/wanted-pre-onboarding-11th-team3/pre-onboarding-11th-1-3/wiki/Team-convention#commit-convention)에 정리해 두었습니다.
2.  [팀 노션](https://www.notion.so/3-5ae5a568e91640bb960bee97a98327a7?pvs=4)을 활용하여 각자의 사전과제를 보고 Best Practice라고 생각되는 과제에 투표를 합니다.
3.  팀원들의 원티드 인턴십 사전과제 중, 각각 Best Practice로 선발된 코드를 팀 프로젝트에 반영하고 VScode의 "Live Share" 확장프로그램을 사용하여 서로의 코드 작성법을 실시간으로 보며 함께 리팩토링을 진행하였습니다.
4.  원격 브랜치에 pr을 올린 후, 한번 더 코드를 확인 한 후, 3명이상 승인을 받으면 develop 브랜치로 Merge합니다.

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
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/111730140?v=4"  alt=""/><br />
        팀원 FE.<br/>
        <a href="https://github.com/ImGyuriKim">
          <img src="https://img.shields.io/badge/김규리-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
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
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/92035406?v=4"  alt=""/>
        팀원 FE.<br/>
        <a href="https://github.com/hanseungjune">
          <img src="https://img.shields.io/badge/한승준-000000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

## 🛠️ Stacks

![react](https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg) ![eslint](https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black) ![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![typescript](https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg) ![styledcomponents](https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg)

<br/>

## 👑 Best Practice

> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

### 📍 기능 (CRUD)

-
-
-
-

<table border>
  <tr>
    <td><img src="" alt="blank"/></td>
    <td><img src="" alt="blank"/></td>
  </tr>
  <tr>
    <td align="center">blank</td>
    <td align="center">blank</td>
  </tr>
  <tr>
    <td><img src="" alt="blank"/></td>
    <td><img src="" alt="blank"/></td>
  </tr>
  <tr>
    <td align="center">blank</td>
    <td align="center">blank</td>
  </tr>
</table>

### 🌳 File Tree

```

```

### GitHub Issues Web Page

#### ❓ 선정이유

-

#### 💥트러블 슈팅

- 이슈

  - `http://localhost:3000/` 다음에 임의의 값을 넣어주면 `"/notFound"`페이지로 바로 넘어가지 않고, 에러창이 뜹니다. 새로고침해야 `"/notFound"`페이지가 렌더됩니다.

  ```Javascript

  ```

  <br/>

- 해결

  - ```Javascript

    ```

- ❌ Bad

  1.  useEffect의 콜백함수는 바로 비동기적일 수 없습니다. 비동기적인 함수를 바로 콜백 함수로 넣을 수 없기 때문에, getData라는 비동기 함수를 useEffect가 실행될 때마다 생성해주고, 그 안에서 데이터를 가져오고 setData를 해주게 됩니다. 그리고 만든 getData라는 함수를 실행하게 됩니다. useEffect가 실행될 때마다 매번 함수가 생성되고 실행되니 매우 비효율적입니다.

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

  1.  useCallback을 활용하면, useCallback안에서 데이터를 가져오는 콜백 함수를 getData에 넣어주고, useEffect안에서는 getData만 호출을 해주면 코드가 훨씬 깔끔해지고, 로직도 분리되며 가독성도 올라가는 효과를 얻을 수 있습니다.

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
    <tr>
      <td align="center">규리</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td align="center">주희</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td align="center">상호</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td align="center">민지</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td align="center">승준</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <td align="center">혜림</td>
      <td>
      </td>
      <td>
      </td>
    </tr>
  </tbody>
</table>
