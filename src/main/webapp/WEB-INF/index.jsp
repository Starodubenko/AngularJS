<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html ng-app="App">
<head>
    <link type="text/css" rel="stylesheet" href="<c:url value="webjars/bootstrap/3.0.0/css/bootstrap.css"/>"/>
    <%--<link type="text/css" rel="stylesheet" href="<c:url value="../style/welcome.css"/>"/>--%>

    <link rel='stylesheet' href='<c:url value="/style/navigation.css"/>'>
    <link rel="stylesheet" href="<c:url value="http://fonts.googleapis.com/css?family=Lobster"/>"/>
    <!-- Angulars Material CSS now available via Google CDN; version 0.8 used here -->
    <link rel="stylesheet" href="<c:url value="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css"/>">
    <link rel="stylesheet" href="<c:url value="https://rawgit.com/angular/bower-material/master/angular-material.css"/>">
</head>

<body>
<div class="background-navigation" ng-controller="NavigationController as navigation">
    <nav class="center">
        <ul class="fancyNav">
            <li><a href="" ng-click="navigation.selectNav('news')">News</a></li>
            <li><a href="" ng-click="navigation.selectNav('about')">About</a></li>
            <li><a href="" ng-click="navigation.selectNav('services')">Services</a></li>
            <li><a href="" ng-click="navigation.selectNav('log-in')">Log in</a></li>
        </ul>
    </nav>
</div>

<h2 style="{margin: auto}">TEST ANGULAR</h2>

<div ui-view></div>

<script type="text/javascript" src="<c:url value="/webjars/jquery/1.9.0/jquery.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/bootstrap/3.0.0/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angularjs/1.3.15/angular.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angularjs/1.3.15/angular-route.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angularjs/1.3.15/angular-resource.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angular-ui-router/0.2.13/angular-ui-router.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/demo-angular.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/services/services.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/index.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/app.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/controller/container-ctrl.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/controller/login-ctrl.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/controller/nav-ctrl.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/controller/tab-ctrl.js"/>"></script>


<!-- Angular Material Dependencies -->
<%--<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"/>"></script>--%>
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"/>"></script>
<!-- Angular Material Javascript now available via Google CDN; version 0.8 used here -->
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://rawgit.com/angular/bower-material/master/angular-material.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://cdn.rawgit.com/auth0/angular-jwt/master/dist/angular-jwt.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://cdn.rawgit.com/auth0/angular-storage/master/dist/angular-storage.js"/>"></script>
</body>
</html>
