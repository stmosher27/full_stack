<h2>Component Hierarchy</h2>

<h4>AuthFormContainer</h4>
<ul>
  <li>AuthForm</li>
</ul>

<h4>NavBarContainer</h4>
<ul>
  <li>NavBar</li>
  <li>SearchBar</li>
  <li>Profile</li>
</ul>

<h4>PostsIndexContainer</h4>
<ul>
  <li>NavBar</li>
  <li>PostsIndex</li>
</ul>

<h4>ProfileInfoContainer</h4>
<ul>
  <li>Username</li>
  <li>PostsNum</li>
  <li>FollowersNum</li>
  <li>FollowingNum</li>
  <li>UserName</li>
</ul>

<h4>UserProfileContainer</h4>
<ul>
  <li>NavBar</li>
  <li>UserProfile</li>
  <li>UserPosts</li>
</ul>

<h4>PictureContainer</h4>
<ul>
  <li>Post</li>
</ul>

<h4>CreatePostContainer</h4>
<ul>
  <li>CreatePost</li>
</ul>

<h2>Routes</h2>

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "PostsIndexContainer" |
| "/users/:userId" | "UserProfileContainer" |
| "/users/:userId/:postId" | "PictureContainer" |
| "/posts/create" | "CreateContainer" |
