<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div class="authentication-form" ng-controller="LoginController as logIn">
  <md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column">
    <md-input-container>
      <label>Login</label>
      <input ng-model="logIn.user.login">
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="logIn.user.password">
    </md-input-container>
  </md-content>

  <md-button class="md-raised md-primary" ng-click="logIn.singIn()">Sin in</md-button>
</div>
