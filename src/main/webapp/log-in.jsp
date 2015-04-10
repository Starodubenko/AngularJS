<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<form ng-submit="singIn()" style="{background-color: white; width: 300px;}" ng-controller="LoginController as logIn">
  <md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column">
    <md-input-container>
      <label>Login</label>
      <input ng-model="user.login">
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="user.password">
    </md-input-container>
  </md-content>

  <md-button class="md-raised md-primary" ng-show="!logined">Sin in</md-button>
  <md-button class="md-raised md-primary" ng-show="logined" ng-click="logOut()">Log out</md-button>

  <h2 ng-bind-template="{{user.login}} {{user.password}}"></h2>
</form>
