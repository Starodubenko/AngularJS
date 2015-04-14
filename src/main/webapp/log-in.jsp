<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<form class="auth-form" name="form" onsubmit="return false;" ng-submit="logIn.singIn()" novalidate>
    <div id="form-title">
        <label>Log in</label>
    </div>

    <md-content md-theme="docs-dark" class="md-padding" layout="row" layout-sm="column">
        <md-input-container>
            <label>Name</label>
            <input name="name" ng-model="logIn.user.login" required>
        </md-input-container>
        <md-input-container>
            <label>Password</label>
            <input type="password" name="password" ng-model="logIn.user.password" required>
        </md-input-container>
    </md-content>
    <div ng-show="form.$submitted || form.password.$touched">
        <div ng-show="form.password.$error.required">Input your password</div>
    </div>
    <div ng-show="form.$submitted || form.name.$touched">
        <div ng-show="form.name.$error.required">Input your name</div>
    </div>

    <%--<input type="submit" value="Sign in">--%>

    <md-button class="md-raised md-primary" ng-submit="logIn.singIn()">Sin in</md-button>
</form>

