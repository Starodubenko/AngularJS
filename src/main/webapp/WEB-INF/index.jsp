<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
<h2>Hello World!</h2>

<form action="<c:url value="/add-value"/>" method="post">
    <input type="submit" value="AddSomeValuesInDataBase"/>
</form>
</body>
</html>
