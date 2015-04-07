<%@ page contentType="text/html;charset=UTF-8" language="java" %>

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
<%--Search: <input type="text" ng-model="query">--%>
Search: <input type="text" ng-model="name" ng-keydown="jsonFilter()">

<div ng-repeat="car in cars">
    <span>{{car.name}}</span>
    <img ng-src="{{car.image}}"/>
</div>

<%--<div ng-repeat="car in cars | filter:query">--%>
    <%--<span>{{car.name}}</span>--%>
    <%--<img ng-src="{{car.image}}"/>--%>
<%--</div>--%>
