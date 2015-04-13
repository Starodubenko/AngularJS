<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="authentication" ng-controller="LoginController as logIn">
  <md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column" ng-show="logIn.isLoggedIn()">
    <md-input-container>
      <label>Login</label>
      <input ng-model="logIn.user.login">
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="logIn.user.password">
    </md-input-container>
  </md-content>

  <md-button class="md-raised md-primary" ng-show="logIn.isLoggedIn()" ng-click="logIn.singIn()">Sin in</md-button>
  <md-button class="md-raised md-primary" ng-show="!logIn.isLoggedIn()" ng-click="logIn.logOut()">Log out</md-button>

  <a href="" ng-click="logIn.goToRegistration()">Registration</a>
</div>
