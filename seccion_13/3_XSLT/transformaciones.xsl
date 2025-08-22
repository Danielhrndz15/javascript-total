<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:output method="html" encoding="UTF-8"/>
    
    <xsl:template match="/biblioteca">
        <html>
            <head>
                <title>Biblioteca</title>
                <link rel="stylesheet" type="text/css" href="estilo.css"/>
            </head>
            <body>
                <h1>Lista de Libros</h1>
                <ul>
                    <xsl:for-each select="libro">
                        <li>
                            <strong><xsl:value-of select="titulo"/></strong>
                            por <xsl:value-of select="autor"/>
                            (Año: <xsl:value-of select="anio"/>)
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>