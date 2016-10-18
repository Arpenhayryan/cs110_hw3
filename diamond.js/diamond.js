/
<html>
<head>
    <title>Triangle Pattern</title>
</head>
<body style="text-align: center">
<script type="text/javascript">
        function diamond() {
        document.write("<pre>");
        for (const i = 1; i <= 5; i++) {
            for (const k = 1; k <= i; k++) {
                if (i % 2 === 0) {
                    i = i + 1;
                }
                document.write("*");
            }
            document.write("<br>");
        }
        for (const i = 3; i >= 1; i -= 2) {
            for (const k = i; k >= 1; k--) {
                document.write("*");
            }
            document.write("<br>");
        }
        document.write("</pre>");
    }

    diamond();
</script>
</body>
</html>