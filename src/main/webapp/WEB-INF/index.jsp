<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html ng-app="mainModule">
<head>
    <link type="text/css" rel="stylesheet" href="<c:url value="webjars/bootstrap/3.0.0/css/bootstrap.min.css"/>"/>
</head>

<body>
<h2>TEST ANGULAR</h2>

<form action="<c:url value="/add-value"/>" method="post">
    <input type="submit" value="AddSomeValuesInDataBase"/>
</form>

<div role="tabpanel" ng-controller="containerCtrl as container">

    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="home">
            <input type="text" ng-model="name">
            Container name: {{name}}
            <br/>
            <textarea ng-model="description"></textarea>
            Load description: {{description}}
            <br/>
            <input type="text" ng-model="newPhoto">
            <button ng-click="addPhoto()">Add</button>
            <ul ng-repeat="photo in photos">
                <li>Photo: {{photo}}<a href="" ng-click="removePhoto(photo)">{{photo}}</a></li>
            </ul>

            <span>Images</span>
            Search: <input type="text" ng-model="query">
            <div ng-repeat="car in cars | filter:query">
                <span>{{car.name}}</span>
                <img ng-src="{{car.image}}"/>
            </div>
        </div>
        <div role="tabpanel" class="tab-pane" id="profile">Profile</div>
        <div role="tabpanel" class="tab-pane" id="messages">Message</div>
        <div role="tabpanel" class="tab-pane" id="settings">Setting</div>
    </div>

    <a href="<c:url value="FirstExampleAngular.jsp"/>">First Example</a>
</div>

<script type="text/javascript" src="<c:url value="/webjars/jquery/1.9.0/jquery.js"/>"></script>
<script type="text/javascript" src="<c:url value="/webjars/bootstrap/3.0.0/js/bootstrap.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="webjars/angularjs/1.3.15/angular.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/my-ang.js"/>"></script>
<script type="text/javascript" src="<c:url value="/script/index.js"/>"></script>
</body>
</html>
