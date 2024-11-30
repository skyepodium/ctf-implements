<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Uploaded Files</title>
</head>
<body>
<h1>Uploaded Files</h1>

<%-- files가 비어있지 않을 때 반복 출력 --%>
<c:if test="${not empty files}">
    <ul>
        <c:forEach var="file" items="${files}">
            <li><a href="/upload/${file}" target="_blank">${file}</a></li>
        </c:forEach>
    </ul>
</c:if>
<c:if test="${empty files}">
    <p>No files uploaded yet.</p>
</c:if>

<a href="/">Go back</a>
</body>
</html>