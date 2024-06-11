# 🏫 SSAP

### '서울, 시골 아무데나 Possible'의 준말로

### 한국에 거주 중인 외국인 및 유학생과 한국에 관심있는 학생을 타겟으로

### 한국 생활 Tip을 제공하며, 그들만의 커뮤니티를 제공

</br>

## ⏱️ 개발기간

- ### 2024.05.13(월) ~ 2024.06.13(목)

</br>

## 🗺️ ERD
![SSAP_ERD](https://github.com/pkg0203/SSAP/assets/141356379/67890e92-22b5-446d-b5e9-645f8ce4f44e)

</br>
</br>

## 🧑‍🤝‍🧑 팀 멤버 구성

- ### 🦔 박강균 [@pkg0203] (https://github.com/pkg0203)
    * #### 팀장, Main Page 및 Events CRUD / DeepL, ChatGPT API 구현
- ### ![image](https://github.com/pkg0203/SpartaNews/assets/141356379/855e3eca-de30-4a79-9f97-f2fee6051ff6) 신연우 [@yeonwooshin] (https://github.com/yeonwooshin)
    * #### Article/Story CRUD 및 좋아요, 북마크 기능 구현
- ###  ![image](https://github.com/pkg0203/SpartaNews/assets/141356379/99274cba-e3b6-4d5c-8892-b01d8ac3f714) 황수민 [@sumina-codewell] (https://github.com/sumina-codewell)
    * #### Comments CRUD, FE 페이지네이션
- ###  🐅강슬범 [@kngslbm] (https://github.com/kngslbm)
    * #### Google OAuth 구현, React 활용 FE 구현
</br>
</br>

## 🖥️ 개발 환경

- ### Front-End
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">

- ### Back-End
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/django-80FF00?style=for-the-badge&logo=django&logoColor=black">

- ### DB
<img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=mysql&logoColor=white">

- ### AI
<img src="https://img.shields.io/badge/amazonaws-black?style=for-the-badge&logo=amazonaws&logoColor=white"> <img src="https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/DeepL-0F2B46?style=for-the-badge&logo=DeepL&logoColor=white">

- ### Version Control
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">

</br>
</br>

## 🚊 API 명세
|Index|Http Method|Authorization|End point|Description|
|---|---|---|---|---|
| **[Account]**|
||GET|None|**`ssap/accounts/google/login/`**|구글 로그인|
||POST|None|**`ssap/accounts/login/`**|로그인|
||POST|None|**`ssap/accounts/registration/`**|회원가입|
||POST|**Only Self**|**`ssap/accounts/logout/`**|로그아웃|
||POST|**Only Self**|**`ssap/accounts/password/change/`**|비밀번호 변경|
||POST|**Only Self**|**`ssap/accounts/token/refresh/`**|토큰 Refresh|
||GET|**User with Login**|**`ssap/accounts/<str:username>/`**|프로필 조회|
||PUT|**Only Self**|**`ssap/accounts/<str:username>/`**|프로필 수정|
||GET|**User with Login**|**`ssap/accounts/liked/article/<str:username>/`**|유저가 좋아하는 article 조회|
||GET|**Only Self**|**`ssap/accounts/bookmarked/article/<str:username>/`**|유저가 북마크한 article 조회|
||GET|**User with Login**|**`ssap/accounts/liked/story/<str:username>/`**|유저가 좋아하는 story 조회|
||GET|**Only Self**|**`ssap/accounts/bookmarked/story/<str:username>/`**|유저가 북마크한 story 조회|
||GET|**User with Login**|**`ssap/accounts/comments/`**|유저가 작성한 댓글과 대댓글 조회|
|**[Articles]**|
||GET|None|**`ssap/articles/`**|article 리스트 조회|
||POST|**Only Admin**|**`ssap/articles/`**|article 생성|
||GET|None|**`ssap/articles/<pk>/`**|article 상세 조회(댓글과 대댓글도 조회하게 됨)|
||PUT|**Only Admin**|**`ssap/articles/<pk>/`**|article 수정|
||DELETE|**Only Admin**|**`ssap/articles/<pk>/`**|article 삭제|
||POST|**User with Login**|**`ssap/articles/like/<pk>/`**|article 좋아요|
||POST|**User with Login**|**`ssap/articles/bookmark/<pk>/`**|article 북마크|
|**[Stories]**|
||GET|None|**`ssap/stories/`**|article 리스트 조회|
||POST|**User with Login**|**`ssap/stories/`**|article 생성|
||GET|**User with Login**|**`ssap/stories/<pk>/`**|article 상세 조회(댓글과 대댓글도 조회하게 됨)|
||PUT|**Only Self**|**`ssap/stories/<pk>/`**|article 수정|
||DELETE|**Only Self**|**`ssap/stories/<pk>/`**|article 삭제|
||POST|**User with Login**|**`ssap/stories/like/<pk>/`**|article 좋아요|
||POST|**User with Login**|**`ssap/stories/bookmark/<pk>/`**|article 북마크|
|**[Comments]**|
||POST|**User with Login**|**`ssap/comments/article/<article_pk>/`**|article에 댓글 생성|
||PUT|**Only Self**|**`ssap/comments/article/<comment_pk>/`**|article에 댓글 수정|
||DELETE|**Only Self**|**`ssap/comments/article/<comment_pk>/`**|article에 댓글 삭제|
||POST|**User with Login**|**`ssap/comments/article/comment_at/<comment_pk>/`**|article에 대댓글 생성|
||PUT|**Only Self**|**`ssap/comments/article/comment_at/<comment_pk>/`**|article에 대댓글 수정|
||DELETE|**Only Self**|**`ssap/comments/article/comment_at/<comment_pk>/`**|article에 대댓글 삭제|
||
||POST|**User with Login**|**`ssap/comments/story/<story_pk>/`**|story에 댓글 생성|
||PUT|**Only Self**|**`ssap/comments/story/<comment_pk>/`**|story에 댓글 수정|
||DELETE|**Only Self**|**`ssap/comments/story/<comment_pk>/`**|story에 댓글 삭제|
||POST|**User with Login**|**`ssap/comments/story/comment_at/<comment_pk>/`**|story에 대댓글 생성|
||PUT|**Only Self**|**`ssap/comments/story/comment_at/<comment_pk>/`**|story에 대댓글 수정|
||DELETE|**Only Self**|**`ssap/comments/story/comment_at/<comment_pk>/`**|story에 대댓글 삭제|
|**[Events]**|
||GET|None|**`ssap/events/`**|유효한 event 조회|
||POST|**Only Admin**|**`ssap/events/`**|event 생성|
||PUT|**Only Admin**|**`ssap/events/<event_pk>/`**|event 수정|
||DELETE|**Only Admin**|**`ssap/events/<event_pk>/`**|event 삭제|
|**[AI Tools]**|
||GET|**User with Login**|**`ssap/ai/korean_name/<name>/`**|한국인 이름으로 변환|
||GET|**User with Login**|**`ssap/ai/translate/<text>/`**|text를 자기 국적의 언어로 번역|
</br>
</br>

## ⚜️ Front End Pages
|Authorization|Domain|Description|
|---|---|---|
|None|**`{{domain}}`**|메인 페이지|
|None|**`{{domain}}/login/`**|일반 로그인|
|None|**`{{domain}}/login/google/`**|구글 로그인|
|None|**`{{domain}}/registration/`**|회원가입|
|**User with Login**|**`{{domain}}/profile/<username>/`**|프로필 조회|
|**Only Self**|**`{{domain}}/profile/edit/username/`**|프로필 수정|
|None|**`{{domain}}/contents/`**|article 리스트 조회|
|None|**`{{domain}}/contents/<int:article_id>`**|article 상세 조회|
|None|**`{{domain}}/community/`**|story 리스트 조회|
|None|**`{{domain}}/community/<int:story_id>`**|story 상세 조회|
|None|**`{{domain}}/calendar/`**|event 조회|
</br>
</br>

## 🎫 기능 상세
### 🔒 Accounts

- ##### 메인 타겟층이 외국인이기 때문에 손쉽게 유입될 수 있도록 구글 로그인 구현

- ##### 그 외에 일반 로그인은 JWT를 베이스로 구현

- ##### 프로필 페이지가 존재하며, 프로필 이미지는 국기가 대신하게 됨

- ##### 북마크한 것들은 인스타그램처럼 본인만 확인 가능

</br>
</br>

### 📑 Articles 

- ##### 한국에서 생활하면서 필요한 꿀팁을 제공하는 게시글로 관리자만 CUD 가능

- ##### 댓글과 대댓글의 작성이 가능

- ##### 좋아요와 북마크 가능

</br>
</br>

### 🎇 Stories

- ##### 서로 소통할 수 있는 게시판으로 로그인을 한 유저라면 모두 CRUD 가능

- ##### Article과 마찬가지로 댓글과 대댓글 작성이 가능

- ##### Article과 마찬가지로 좋아요와 북마크 가능

</br>
</br>

### 🌈 Events

- ##### 화면을 달력으로 구성하여 각 행사의 기간을 한 눈에 확인 가능

- ##### Article과 비슷하게 정보를 알려주는 목적이지만, 기한이 한정되어 있는 경우

   - ##### ex) 신청 기간이 정해져있지만 외국인도 참여할 수 있는 `축제`와 같은 경우

- ##### 좋아요, 북마크, 댓글과 대댓글이 `불가능`
