<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
 
    <xsl:template match="/biblioteca">
    <html>
    <head>
    <title>Biblioteca</title>
    <link rel="stylesheet" type="text/css" href="estilos.css"/>
    </head>
    <body>
    <h1>lista de libros</h1>
    <ul>
    <xml:for-each select="libro">
        <li>
            <strong><xsl:value-of select="titulo"/></strong> -
            <em><xsl:value-of select="autor"/></em> (<xsl:value-of select="anio"/>)
        </li>
    </xml:for-each>
    </ul>
    </body>
       
    </body>
    </html>