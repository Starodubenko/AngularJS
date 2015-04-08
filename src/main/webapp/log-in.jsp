<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<div style="{background-color: white; width: 300px;}" ng-controller="LoginController as logIn">
  <md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column">
    <md-input-container>
      <label>Login</label>
      <input ng-model="login">
    </md-input-container>
    <md-input-container>
      <label>Password</label>
      <input ng-model="password">
    </md-input-container>
  </md-content>

  <md-button class="md-raised md-primary" >Sin in</md-button>

  <h2 ng-bind-template="{{login}} {{password}}"></h2>
</div>
