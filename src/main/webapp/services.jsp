<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<form action="<c:url value="/add-value"/>" method="post">
    <input type="submit" value="AddSomeValuesInDataBase"/>
</form>
<ul class="nav nav-pills">
    <li ng-class="{active: isSelected(1)}"><a href="" ng-click="selectTab(1)">Home</a></li>
    <li ng-class="{active: isSelected(2)}"><a href="" ng-click="selectTab(2)">Profile</a></li>
    <li ng-class="{active: isSelected(3)}"><a href="" ng-click="selectTab(3)">Messages</a></li>
    <li ng-class="{active: isSelected(4)}"><a href="" ng-click="selectTab(4)">Settings</a></li>
</ul>

<div class="tab-content">
    <div ng-show="isSelected(1)">Home</div>
    <div ng-show="isSelected(2)">Profile</div>
    <div ng-show="isSelected(3)">Message</div>
    <div ng-show="isSelected(4)">Setting</div>
</div>
