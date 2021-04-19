<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="stilus.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="feldolgoz.js" type="text/javascript"></script>

        <title>Vince Patrik</title>
    </head>
    <body>
        <main>
            <header>Teendők</header>
            <article>
                <form action="feldolgoz.js" method="POST">
                    <label>TODO lista</label>
                    <br>    
                    <input type="text" name="todo" id="todo">
                    <input type="date" name="datum" id="datum">
                    <input type="button" value="Add" name="add" id="add">
                    <input type="button" value="Betölt" name="betolt" id="betolt">
                </form>
            </article>
            <section>
                
            </section>
        </main>
        <footer>Vince Patrik</footer>
    </body>
</html>
