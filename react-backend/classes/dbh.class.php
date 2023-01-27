 <?php

class Dbh
{
    protected function connect()
    {
        try {
            $host = 'localhost';
            $user = '';
            $pass = '';
            $dbName = 'Users';

            $dsn = "sqlsrv:server=$host;Database=$dbName";
            $pdo = new PDO($dsn, $user, $pass);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); //fetch associative array
            return $pdo;    
        } catch (PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br>";
            die();
        }
        
    }
}
