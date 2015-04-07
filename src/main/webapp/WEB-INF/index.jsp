<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html ng-app="dialogDemo1">
<head>
    <link type="text/css" rel="stylesheet" href="<c:url value="webjars/bootstrap/3.0.0/css/bootstrap.css"/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value="../style/welcome.css"/>"/>

    <link rel='stylesheet' href='<c:url value="/style/navigation.css"/>'>
    <link rel="stylesheet" href="<c:url value="http://fonts.googleapis.com/css?family=Lobster"/>"/>
    <!-- Angulars Material CSS now available via Google CDN; version 0.8 used here -->
    <link rel="stylesheet" href="<c:url value="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.css"/>">
    <link rel="stylesheet" href="<c:url value="https://rawgit.com/angular/bower-material/master/angular-material.css"/>">
</head>

<body>
<div class="background-navigation">
    <nav class="center">
        <ul class="fancyNav">
            <li id="news"><a href="#/News">News</a></li>
            <li id="about"><a href="#/About">About</a></li>
            <li id="services"><a href="#/Services">Services</a></li>
        </ul>
    </nav>

    <div ng-controller="AppCtrl" class="full" layout="column" layout-margin>
        <div layout="column" layout-align="center" >
            <md-button class="md-primary" ng-click="showConfirm($event)">
                Confirm Dialog
            </md-button>
            <%--DOTO Исправить контороллер на my-ang !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--%>
        </div>
    </div>
</div>

<h2 style="{margin: auto}">TEST ANGULAR</h2>

<div ng-view></div>

<script type="text/javascript" src="<c:url value="/webjars/jquery/1.9.0/jquery.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/bootstrap/3.0.0/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angularjs/1.3.15/angular.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/angularjs/1.3.15/angular-route.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/demo-angular.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/my-ang.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/index.js"/>"></script>

<!-- Angular Material Dependencies -->
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-animate.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-aria.min.js"/>"></script>
<!-- Angular Material Javascript now available via Google CDN; version 0.8 used here -->
<script type="text/javascript" src="<c:url value="https://ajax.googleapis.com/ajax/libs/angular_material/0.8.3/angular-material.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="https://rawgit.com/angular/bower-material/master/angular-material.js"/>"></script>
</body>
</html>
