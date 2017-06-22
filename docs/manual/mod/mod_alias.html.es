<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>mod_alias - Servidor HTTP Apache Versi�n 2.5</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="../style/css/prettify.css" />
<script src="../style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="../images/favicon.ico" rel="shortcut icon" /></head>
<body>
<div id="page-header">
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p>
<p class="apache">Versi�n 2.5 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.png" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci�n</a> &gt; <a href="../">Versi�n 2.5</a> &gt; <a href="./">M�dulos</a></div>
<div id="page-content">
<div id="preamble"><h1>M�dulo Apache mod_alias</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../en/mod/mod_alias.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/mod_alias.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/mod_alias.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ja/mod/mod_alias.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../ko/mod/mod_alias.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/mod/mod_alias.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a></p>
</div>
<div class="outofdate">Esta traducci�n podr�a estar
            obsoleta. Consulte la versi�n en ingl�s de la
            documentaci�n para comprobar si se han producido cambios
            recientemente.</div>
<table class="module"><tr><th><a href="module-dict.html#Description">Descripci�n:</a></th><td>Facilita el mapeo a diferentes partes del sistema de ficheros del host en el �rbol de documentos y la redirecci�n de URLs
</td></tr>
<tr><th><a href="module-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="module-dict.html#ModuleIdentifier">Identificador de M�dulos:</a></th><td>alias_module</td></tr>
<tr><th><a href="module-dict.html#SourceFile">Fichero de C�digo Fuente:</a></th><td>mod_alias.c</td></tr></table>
<h3>Resumen de contenidos</h3>

    <p>Las directivas facilitadas por este m�dulo permiten la manipulaci�n y control de URLs seg�n llegan las peticiones al servidor. Las directivas
    <code class="directive"><a href="#alias">Alias</a></code> y 
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> se usan para mapear URLs con rutas del sistema de ficheros. Esto permite que se sirva contenido que no est� directamente dentro del 
    <code class="directive"><a href="../mod/core.html#documentroot">DocumentRoot</a></code> como si fuera parte de �ste. La directiva <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> tiene adem�s el efecto de hacer que el directorio de destino contenga solo scripts CGI.</p>

    <p>Las directivas <code class="directive"><a href="#redirect">Redirect</a></code> se usan para indicar a los clientes que hagan una nueva petici�n con una URL distinta. Se usan a menudo cuando el recurso se ha movido a una nueva ubicaci�n.</p>

    <p>Cuando se usan las directivas <code class="directive"><a href="#alias">Alias</a></code>,
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> y
    <code class="directive"><a href="#redirect">Redirect</a></code> dentro de una secci�n 
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    o <code class="directive"><a href="../mod/core.html#locationmatch">&lt;LocationMatch&gt;</a></code>, se puede usar
    <a href="../expr.html">sintaxis de expresi�n</a> para manipuilar la ruta de destino o URL.
    </p>

    <p><code class="module"><a href="../mod/mod_alias.html">mod_alias</a></code> se ha dise�ado para gestionar tareas sencillas de manipulaci�n de URL. Para tareas m�s complicadas como la manipulaci�n de "query string", use las herramientas facilitadas por
    <code class="module"><a href="../mod/mod_rewrite.html">mod_rewrite</a></code>.</p>

</div>
<div id="quickview"><h3>Temas</h3>
<ul id="topics">
<li><img alt="" src="../images/down.gif" /> <a href="#order">Orden de Procesamiento</a></li>
</ul><h3 class="directives">Directivas</h3>
<ul id="toc">
<li><img alt="" src="../images/down.gif" /> <a href="#alias">Alias</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#aliasmatch">AliasMatch</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#redirect">Redirect</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#redirectmatch">RedirectMatch</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#redirectpermanent">RedirectPermanent</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#redirecttemp">RedirectTemp</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#scriptalias">ScriptAlias</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#scriptaliasmatch">ScriptAliasMatch</a></li>
</ul>
<h3>Bugfix checklist</h3><ul class="seealso"><li><a href="https://www.apache.org/dist/httpd/CHANGES_2.4">httpd changelog</a></li><li><a href="https://bz.apache.org/bugzilla/buglist.cgi?bug_status=__open__&amp;list_id=144532&amp;product=Apache%20httpd-2&amp;query_format=specific&amp;order=changeddate%20DESC%2Cpriority%2Cbug_severity&amp;component=mod_alias">Known issues</a></li><li><a href="https://bz.apache.org/bugzilla/enter_bug.cgi?product=Apache%20httpd-2&amp;component=mod_alias">Report a bug</a></li></ul><h3>Consulte tambi�n</h3>
<ul class="seealso">
<li><code class="module"><a href="../mod/mod_rewrite.html">mod_rewrite</a></code></li>
<li><a href="../urlmapping.html">Mapeo de URLs al sistema de ficheros</a></li>
<li><a href="#comments_section">Comentarios</a></li></ul></div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="section">
<h2><a name="order" id="order">Orden de Procesamiento</a></h2>

    <p>Aliases y Redirects que se dan en diferentes contextos se procesan como otras directivas seg�n las <a href="../sections.html#mergin">reglas de fusi�n</a> est�ndar.  Pero cuando se dan m�ltiples 
    Aliases o Redirects en el mismo contexto (por ejemplo, en la misma secci�n 
    <code class="directive"><a href="../mod/core.html#virtualhost">&lt;VirtualHost&gt;</a></code>)
    entonces se procesan en un orden concreto.</p>

    <p>En primer lugar, todos los Redirect se procesan antes que los Aliases, y por tanto una solicitud que coincida con un 
    <code class="directive"><a href="#redirect">Redirect</a></code> o 
    <code class="directive"><a href="#redirectmatch">RedirectMatch</a></code> nunca aplicar� un Alias. En segundo lugar, los Aliases y Redirect se procesan en el orden en el que aparecen en los ficheros de configuraci�n, y la primera coincidencia es la que tiene prioridad.</p>

    <p>Por esta raz�n, cuando dos o m�s de estas directivas se aplican a la misma sub-ruta, debe definir la ruta m�s espec�fica primero para que todas las directivas tengan efecto. Por ejemplo, la siguiente configuraci�n funcionar� como se espera:</p>

    <pre class="prettyprint lang-config">Alias "/foo/bar" "/baz"
Alias "/foo" "/gaq"</pre>


    <p>Pero si estas dos directivas estuvieran en orden inverso, el 
    <code class="directive"><a href="#alias">Alias</a></code>
    <code>/foo</code> siempre se aplicar�a antes que el 
    <code class="directive"><a href="#alias">Alias</a></code> <code>/foo/bar</code>, as� que se obviar�a la �ltima directiva.</p>

    <p>Cuando las directivas <code class="directive"><a href="#alias">Alias</a></code>,
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> y
    <code class="directive"><a href="#redirect">Redirect</a></code> se usan dentro de una secci�n
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    o <code class="directive"><a href="../mod/core.html#locationmatch">&lt;LocationMatch&gt;</a></code>, estas directivas tendr�n prioridad sobre cualquier directiva 
    <code class="directive"><a href="#alias">Alias</a></code>, 
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> y
    <code class="directive"><a href="#redirect">Redirect</a></code> definidas globalmente.
    </p>

</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="Alias" id="Alias">Alias</a> <a name="alias" id="alias">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Mapea URLs a rutas del sistema de ficheros</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>Alias [<var>URL-path</var>]
<var>file-path</var>|<var>directory-path</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>

    <p>La directiva <code class="directive">Alias</code> permite que se almacenen documentos en el sistema de ficheros local en rutas distintas de las que est�n bajo
    <code class="directive"><a href="../mod/core.html#documentroot">DocumentRoot</a></code>. URLs con una ruta 
    (%-decodificada) que comienzan con <var>URL-path</var> ser�n mapeadas a ficheros locales que comiencen con
    <var>directory-path</var>.  El
    <var>URL-path</var> es sensible a may�sculas, incluso en sistemas de ficheros que no lo son.</p>

    <pre class="prettyprint lang-config">Alias "/image" "/ftp/pub/image"</pre>


    <p>Una petici�n para <code>http://example.com/image/foo.gif</code> har�a que el servidor respondiera con el fichero 
    <code>/ftp/pub/image/foo.gif</code>. Solo se comparan segmentos de ruta completos, as� que el alias de m�s arriba no valdr�a para la petici�n 
    <code>http://example.com/imagefoo.gif</code>. Para ejemplos m�s complejos de expresiones regulares, vea la directiva 
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code>.</p>

    <p>Tenga en cuenta que si incluye una / final en el 
    <var>URL-path</var> entonces el servidor requerir� una / final para poder extender el alias. Es decir, si usa</p>

    <pre class="prettyprint lang-config">Alias "/icons/" "/usr/local/apache/icons/"</pre>


    <p>entonces la URL <code>/icons</code> no coincidir� con el alias, porque no tiene la / final. De la misma manera, si omite la barra en el
    <var>URL-path</var> tambi�n debe omitirla del
    <var>file-path</var>.</p>

    <p>Considere que seguramente tenga que especificar secciones de  
    <code class="directive"><a href="../mod/core.html#directory">&lt;Directory&gt;</a></code> adicionales que cubran los <em>destinos</em> de los aliases. Las directivas Alias se comprueban antes que las de 
    <code class="directive"><a href="../mod/core.html#directory">&lt;Directory&gt;</a></code>, as� que solo los destinos de los alias se ven afectados.
    (Sin embargo tenga en cuenta que las secciones 
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    se examinan una vez antes de que los alias tengan efecto, as� que se aplicar�n.)</p>

    <p>En particular, si est� creando un <code>Alias</code> a un directorio fuera de su 
    <code class="directive"><a href="../mod/core.html#documentroot">DocumentRoot</a></code>, probablemente tenga que darle permisos de manera expl�cita al directorio de destino.</p>

    <pre class="prettyprint lang-config">Alias "/image" "/ftp/pub/image"
&lt;Directory "/ftp/pub/image"&gt;
    Require all granted
&lt;/Directory&gt;</pre>


    <p>Cualquier n�mero de barras en el par�metro <var>URL-path</var> coincide con el mismo n�mero de barras en el URL-path solicitado.</p>

    <p>Si la directiva <code class="directive">Alias</code> se usa dentro de una secci�n
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    o <code class="directive"><a href="../mod/core.html#locationmatch">&lt;LocationMatch&gt;</a></code> el URL-path se omite, y el file-path se interpreta usando <a href="../expr.html">sint�xis de expresi�n</a>.<br />
    Esta sint�xis est� disponible en Apache 2.4.19 y versiones posteriores.</p>

    <pre class="prettyprint lang-config">&lt;Location "/image"&gt;
    Alias "/ftp/pub/image"
&lt;/Location&gt;
&lt;LocationMatch "/error/(?&lt;NUMBER&gt;[0-9]+)"&gt;
    Alias "/usr/local/apache/errors/%{env:MATCH_NUMBER}.html"
&lt;/LocationMatch&gt;</pre>



</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="AliasMatch" id="AliasMatch">AliasMatch</a> <a name="aliasmatch" id="aliasmatch">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Mapea URLs a ubicaciones del sistema de ficheros usando expresiones regulares</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>AliasMatch <var>regex</var>
<var>file-path</var>|<var>directory-path</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>Esta directiva es equivalente a 
    <code class="directive"><a href="#alias">Alias</a></code>, pero hace uso de 
    <a class="glossarylink" href="../glossary.html#regex" title="ver glosario">expresiones regulares</a>,
    en lugar de comparaciones simples de prefijo. La expresi�n 
    regular facilitada se compara con el URL-path, y si coincide, 
    el servidor sustituye cualquier coincidencia entre par�ntesis con 
    la cadena de caracteres facilitada y la usa como el nombre de fichero. Por ejemplo, para activar el directorio <code>/icons</code>, uno podr�a usar:
    </p>

    <pre class="prettyprint lang-config">AliasMatch "^/icons(/|$)(.*)" "/usr/local/apache/icons$1$2"</pre>


    <p>Puede usar toda la capacidad que le permiten las
    <a class="glossarylink" href="../glossary.html#regex" title="ver glosario">expresiones regulares</a>. Por ejemplo, es posible construir un alias con comprobaci�n insensible a may�sculas del URL-path:</p>

    <pre class="prettyprint lang-config">AliasMatch "(?i)^/image(.*)" "/ftp/pub/image$1"</pre>


    <p>Una sutil diferencia entre 
    <code class="directive"><a href="#alias">Alias</a></code>
    y <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> es que
    <code class="directive"><a href="#alias">Alias</a></code> copiar� autom�ticamente cualquier parte adicional de la URI, pasada la parte que coincide, al final de la ruta del fichero en el par�metro de la derecha, mientras que
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> no lo har�. Esto significa en casi todos los casos, querr� que las expresiones regulares concuerden con la URI solicitada al completo desde el comienzo al final, y usar la sustituci�n del par�metro a la derecha.</p>

    <p>En otras palabras, cambiar
    <code class="directive"><a href="#alias">Alias</a></code> a
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> no tendr� el mismo resultado. Como m�nimo, tendr� que a�adir un <code>^</code> al comienzo de la expresi�n regular, a�adir un <code>(.*)$</code> al final y a�adir 
    <code>$1</code> al final del reemplazo.</p>

    <p>Por ejemplo, supongamos que quiere reemplazar esto con AliasMatch:</p>

    <pre class="prettyprint lang-config">Alias "/image/" "/ftp/pub/image/"</pre>


    <p>Esto no es equivalente - �no haga esto! Esto enviar� todas las peticiones que tengan /image/ en cualquier parte de la petici�n y la pondr� en /ftp/pub/image/:</p>

    <pre class="prettyprint lang-config">AliasMatch "/image/" "/ftp/pub/image/"</pre>


    <p>Esto es lo que necesita para que tenga el mismo efecto:</p>

    <pre class="prettyprint lang-config">AliasMatch "^/image/(.*)$" "/ftp/pub/image/$1"</pre>


    <p>Por supuesto, no hay ning�n motivo para usar
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code>
    donde <code class="directive"><a href="#alias">Alias</a></code> funcionar�a.  
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> le permite hacer cosas m�s complicadas. Por ejemplo, puede servir diferentes tipos de ficheros desde diferentes directorios:</p>

    <pre class="prettyprint lang-config">AliasMatch "^/image/(.*)\.jpg$" "/files/jpg.images/$1.jpg"
AliasMatch "^/image/(.*)\.gif$" "/files/gif.images/$1.gif"</pre>


    <p>Si se usan multiples barras iniciales en la URL solicitada, el servidor las descarta antes de que las directivas de este m�dulo las compare con el URL-path solicitado.
    </p>


</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="Redirect" id="Redirect">Redirect</a> <a name="redirect" id="redirect">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Env�a una redirecci�n externa indicando al cliente que solicite una URL distinta</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>Redirect [<var>status</var>] [<var>URL-path</var>]
<var>URL</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory, .htaccess</td></tr>
<tr><th><a href="directive-dict.html#Override">Anula:</a></th><td>FileInfo</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>La directiva <code class="directive">Redirect</code> mapea una URL antigua a una nueva indicando al cliente que solicite el recurso en otra ubicaci�n.</p>

    <p>El antiguo <em>URL-path</em> es una ruta (%-decodificada) que comienza con una barra. No se permite una ruta relativa.</p>

    <p>La nueva <em>URL</em> puede ser una URL absoluta que comienza con esquema y nombre de host, or un URL-path que comienza con una barra (/). En este �ltimo caso se a�adir�n el esquema y nombre de host del servidor actual si tiene <code class="directive"><a href="../mod/core.html#usecanonicalname">UseCanonicalName</a></code> configurado a on, si no el nombre de host se reemplazar� por la cabecera Host solicitada.</p>

    <p>Entonces cualquier petici�n que comience con <em>URL-path</em> devolver� una solicitud de redirecci�n al cliente hacia la ubicaci�n de la <em>URL</em> de destino. Informaci�n adicional de la ruta pasado el <em>URL-path</em> que coincide se a�adir� al final de la URL de destino.</p>

    <pre class="prettyprint lang-config"># Redirect hacia una URL en un host diferente
Redirect "/service" "http://foo2.example.com/service"

# Redirect hacia una URL en el mismo host
Redirect "/one" "/two"</pre>


    <p>Si el cliente solicita <code>http://example.com/service/foo.txt</code>, se le indicar� que acceda a 
    <code>http://foo2.example.com/service/foo.txt</code> en su lugar. Esto incluye solicitudes con par�metros 
    <code>GET</code>, tales como
    <code>http://example.com/service/foo.pl?q=23&amp;a=42</code>,que ser�
    redirigido a
    <code>http://foo2.example.com/service/foo.pl?q=23&amp;a=42</code>.
    Tenga en cuenta que los <code>POST</code> ser�n descartados.<br />
    Solo se comparan segmentos completos de ruta, as� que el ejemplo de m�s arriba no coincidir�a con una petici�n a
    <code>http://example.com/servicefoo.txt</code>. Para comparaciones m�s complejas usando la 
    <a href="../expr.html">sint�xis de expresi�n</a>, omita el argumento de URL-path tal y como se indica m�s abajo. Alternativamente, para coincidencias usando expresiones regulares, vea la directiva 
    <code class="directive"><a href="#redirectmatch">RedirectMatch</a></code>.</p>


    <div class="note"><h3>Nota</h3>
    <p>Las directivas <code class="directive">Redirect</code> tienen priodidad sobre directivas 
    <code class="directive"><a href="#alias">Alias</a></code> y 
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code>, independientemente de su orden en el fichero de configuraci�n. Directivas 
    <code class="directive">Redirect</code> 
    dentro de Location tiene prioridad sobre directivas 
    <code class="directive">Redirect</code> y 
    <code class="directive"><a href="#alias">Alias</a></code> con un <var>URL-path</var>.</p>
    </div>

    <p>Si no se indica un par�metro <var>status</var>, la redirecci�n ser�
    "temporal" (estado HTTP 302). Esto le indica al cliente que el recurso se ha movido temporalmente. El par�metro <var>status</var> se puede usar para devolver otros c�digos de estado HTTP:</p>

    <dl>
      <dt>permanent</dt>

      <dd>Devuelve una estado de redirecci�n permanente (301) indicando que el recurso se ha movido de forma permanente.</dd>

      <dt>temp</dt>

      <dd>Devuelve un estado de redirecci�n temporal (302). Este es el valor por defecto.</dd>

      <dt>seeother</dt>

      <dd>Devuelve un estado "See Other" (303) indicando que el recurso ha sido sustituido.</dd>

      <dt>gone</dt>

      <dd>Devuelve un estado "Gone" (410) indicando que el recurso ha sido eliminado de forma permanente. Cuando se usa este estado, el par�metro 
      <var>URL</var> deber�a omitirse.</dd>
    </dl>

    <p>Se pueden devolver otros c�digos de estado indicando el c�digo num�rico del estado en el valor de <var>status</var>. Si el estado est� entre 300 y 399, el par�metro <var>URL</var> debe estar presente. Si el estado 
    <em>no</em> est� entre 300 and 399, el par�metro <var>URL</var> debe ser omitido. El estado debe ser un c�digo de estado v�lido HTTP, conocido por el Servidor Apache HTTP (vea la funci�n <code>send_error_response</code> en http_protocol.c).</p>

    <pre class="prettyprint lang-config">Redirect permanent "/one" "http://example.com/two"
Redirect 303 "/three" "http://example.com/other"</pre>


    <p>Si se usa la directiva <code class="directive">Redirect</code> dentro de una secci�n
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    o <code class="directive"><a href="../mod/core.html#locationmatch">&lt;LocationMatch&gt;</a></code>
    sin el <var>URL-path</var>, entonces el par�metro <var>URL</var> ser� interpretado
    usando <a href="../expr.html">sint�xis de expresi�n</a>.<br />
    Esta sint�xis est� disponible en Apache 2.4.19 y versiones posteriores.</p>

    <pre class="prettyprint lang-config">&lt;Location "/one"&gt;
    Redirect permanent "http://example.com/two"
&lt;/Location&gt;
&lt;Location "/three"&gt;
    Redirect 303 "http://example.com/other"
&lt;/Location&gt;
&lt;LocationMatch "/error/(?&lt;NUMBER&gt;[0-9]+)"&gt;
    Redirect permanent "http://example.com/errors/%{env:MATCH_NUMBER}.html"
&lt;/LocationMatch&gt;</pre>


</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="RedirectMatch" id="RedirectMatch">RedirectMatch</a> <a name="redirectmatch" id="redirectmatch">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Env�a una redirecci�n externa basada en una coincidencia de expresi�n regular con la URL actual
</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>RedirectMatch [<var>status</var>] <var>regex</var>
<var>URL</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory, .htaccess</td></tr>
<tr><th><a href="directive-dict.html#Override">Anula:</a></th><td>FileInfo</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>Esta directiva es equivalente a 
    <code class="directive"><a href="#redirect">Redirect</a></code>, pero hace uso de 
    <a class="glossarylink" href="../glossary.html#regex" title="ver glosario">expresiones regulares</a>,
    en lugar de comparaciones simple de prefijo. La expresi�n 
    regular facilitada se compara con el URL-path, y si coincide, 
    el servidor sustituye cualquier coincidencia entre par�ntesis con 
    la cadena de caracteres facilitada y la usa como el nombre de fichero. Por ejemplo, para redirigir todos los ficheros GIF al mismo nombre pero del tipo JPEG en otro servidor, uno podr�a usar:</p>

    <pre class="prettyprint lang-config">RedirectMatch "(.*)\.gif$" "http://other.example.com$1.jpg"</pre>


    <p>Las consideraciones relacionadas con las diferencias entre
    <code class="directive"><a href="#alias">Alias</a></code> y
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code>
    tambi�n aplican a las diferencias entre
    <code class="directive"><a href="#redirect">Redirect</a></code> y
    <code class="directive"><a href="#redirectmatch">RedirectMatch</a></code>.
    Vea <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> para m�s
    detalles.</p>


</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="RedirectPermanent" id="RedirectPermanent">RedirectPermanent</a> <a name="redirectpermanent" id="redirectpermanent">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Env�a una redirecci�n externa permanente indicando al cliente que solicite una URL diferente</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>RedirectPermanent <var>URL-path</var> <var>URL</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory, .htaccess</td></tr>
<tr><th><a href="directive-dict.html#Override">Anula:</a></th><td>FileInfo</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>Esta directiva hace saber al cliente que el Redirect es permanente
    (estado 301). Exactamente equivalente a 
    <code>Redirect permanent</code>.</p>

</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="RedirectTemp" id="RedirectTemp">RedirectTemp</a> <a name="redirecttemp" id="redirecttemp">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Env�a una redirecci�n externa temporal indicando al cliente que solicite una URL diferente</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>RedirectTemp <var>URL-path</var> <var>URL</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory, .htaccess</td></tr>
<tr><th><a href="directive-dict.html#Override">Anula:</a></th><td>FileInfo</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>Esta directiva le hace saber al cliente que el Redirect es solo temporal (estado 302). Exactamente equivalente a 
    <code>Redirect temp</code>.</p>

</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="ScriptAlias" id="ScriptAlias">ScriptAlias</a> <a name="scriptalias" id="scriptalias">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Mapea una URL a una ubicaci�n del sistema de ficheros y designa el destino como un script CGI</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>ScriptAlias [<var>URL-path</var>]
<var>file-path</var>|<var>directory-path</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host, directory</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>La directiva <code class="directive">ScriptAlias</code> tiene el mismo comportamiento que la directiva <code class="directive"><a href="#alias">Alias</a></code>, excepto que adem�s indica el directorio de destino conteniendo scripts CGI que ser�n procesados por el handler cgi-script de 
    <code class="module"><a href="../mod/mod_cgi.html">mod_cgi</a></code>. URLs con una ruta sensible a may�sculas y (%-decodificadas) que comienzan con <var>URL-path</var> ser�n
    mapeadas a scripts que comiencen con el segundo par�metro, que es un nombre de ruta completo en el sistema de ficheros local.</p>

    <pre class="prettyprint lang-config">ScriptAlias "/cgi-bin/" "/web/cgi-bin/"</pre>


    <p>Una petici�n para <code>http://example.com/cgi-bin/foo</code> har�a que el servidor ejecute el script <code>/web/cgi-bin/foo</code>. Esta configuraci�n es esencialmente equivalente a:</p>
    <pre class="prettyprint lang-config">Alias "/cgi-bin/" "/web/cgi-bin/"
&lt;Location "/cgi-bin"&gt;
    SetHandler cgi-script
    Options +ExecCGI
&lt;/Location&gt;</pre>


    <p>Tambi�n puede usarse <code class="directive">ScriptAlias</code>junto con un script o handler que usted tenga. Por ejemplo:</p>

    <pre class="prettyprint lang-config">ScriptAlias "/cgi-bin/" "/web/cgi-handler.pl"</pre>


    <p>En este escenario todos los ficheros solicitados en 
    <code>/cgi-bin/</code> ser�n gestionados por el fichero que usted ha configurado, esto permite que use su propio handler personalizado. Puede que quiera usar esto como un wrapper de CGI y as� pueda a�adir contenido, o alguna otra acci�n a medida.</p>

    <div class="warning">Es m�s seguro evitar que se coloquen scripts CGI bajo el <code class="directive"><a href="../mod/core.html#documentroot">DocumentRoot</a></code> para que no se revele de manera accidental el c�digo fuente si la configuraci�n se vuelve a cambiar alguna vez. El <code class="directive">ScriptAlias</code> hace esto f�cil mapeando una URL y designando CGI scripts al mismo tiempo. Si decide colocar sus scripts CGI en un directorio que ya es accesible desde la web, no use
    <code class="directive">ScriptAlias</code>. En su lugar, use <code class="directive"><a href="../mod/core.html#directory">&lt;Directory&gt;</a></code>, <code class="directive"><a href="../mod/core.html#sethandler">SetHandler</a></code>, y <code class="directive"><a href="../mod/core.html#options">Options</a></code> como en:

    <pre class="prettyprint lang-config">&lt;Directory "/usr/local/apache2/htdocs/cgi-bin"&gt;
    SetHandler cgi-script
    Options ExecCGI
&lt;/Directory&gt;</pre>


    Esto es necesario puesto que multiples <var>URL-paths</var> pueden mapear a la misma ubicaci�n del sistema de ficheros, potencialmente salt�ndose el
    <code class="directive">ScriptAlias</code> y revelando el c�digo fuente de los scripts CGI si no est�n restringidos por una secci�n 
    <code class="directive"><a href="../mod/core.html#directory">Directory</a></code>.
    </div>

    <p>Si se usa la directiva 
    <code class="directive">ScriptAlias</code> dentro de una secci�n
    <code class="directive"><a href="../mod/core.html#location">&lt;Location&gt;</a></code>
    o <code class="directive"><a href="../mod/core.html#locationmatch">&lt;LocationMatch&gt;</a></code>
    con el URL-path omitido, entonces el par�metro URL ser� interpretando usando
    <a href="../expr.html">sintaxis de expresi�n</a>.<br />
    Esta sintaxis est� disponible en Apache 2.4.19 y versiones posteriores.</p>

    <pre class="prettyprint lang-config">&lt;Location "/cgi-bin"&gt;
    ScriptAlias "/web/cgi-bin/"
&lt;/Location&gt;
&lt;LocationMatch "/cgi-bin/errors/(?&lt;NUMBER&gt;[0-9]+)"&gt;
    ScriptAlias "/web/cgi-bin/errors/%{env:MATCH_NUMBER}.cgi"
&lt;/LocationMatch&gt;</pre>



<h3>Consulte tambi�n</h3>
<ul>
<li><a href="../howto/cgi.html">Tutorial CGI</a></li>
</ul>
</div>
<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="ScriptAliasMatch" id="ScriptAliasMatch">ScriptAliasMatch</a> <a name="scriptaliasmatch" id="scriptaliasmatch">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci�n:</a></th><td>Mapea una URL a una ubicaci�n del sistema de ficheros usando 
una expresi�n regular y designa el destino como un script CGI</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>ScriptAliasMatch <var>regex</var>
<var>file-path</var>|<var>directory-path</var></code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config, virtual host</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>Base</td></tr>
<tr><th><a href="directive-dict.html#Module">M�dulo:</a></th><td>mod_alias</td></tr>
</table>
    <p>Esta directiva es equivalente a 
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code>, pero hace uso de
    <a class="glossarylink" href="../glossary.html#regex" title="ver glosario">expresiones regulares</a>,
    en lugar de comparaciones simples de prefijo. La expresi�n regular facilitada se compara con el URL-path, y si coincide, el servidor sustituye cualquier coincidencia entre par�ntesis con la cadena de caracteres facilitada y la usa como el nombre de fichero. Por ejemplo, para activar el est�ndar 
    <code>/cgi-bin</code>, uno podr�a usar:</p>

    <pre class="prettyprint lang-config">ScriptAliasMatch "^/cgi-bin(.*)" "/usr/local/apache/cgi-bin$1"</pre>


    <p>En cuanto a AliasMatch, puede usar toda la capacidad que le permiten las
    <a class="glossarylink" href="../glossary.html#rexex" title="ver glosario">expresiones regulares</a>. 
    Por ejemplo, es posible construir un alias con comparaci�n insensible
    a may�sculas del URL-path:</p>

    <pre class="prettyprint lang-config">ScriptAliasMatch "(?i)^/cgi-bin(.*)" "/usr/local/apache/cgi-bin$1"</pre>


    <p>Las consideraciones relacionadas con las diferencias entre
    <code class="directive"><a href="#alias">Alias</a></code> y
    <code class="directive"><a href="#aliasmatch">AliasMatch</a></code>
    tambi�n aplican a las diferencias entre
    <code class="directive"><a href="#scriptalias">ScriptAlias</a></code> y
    <code class="directive"><a href="#scriptaliasmatch">ScriptAliasMatch</a></code>.
    Vea <code class="directive"><a href="#aliasmatch">AliasMatch</a></code> para m�s
    detalles.</p>


</div>
</div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../en/mod/mod_alias.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/mod_alias.html" title="Espa�ol">&nbsp;es&nbsp;</a> |
<a href="../fr/mod/mod_alias.html" hreflang="fr" rel="alternate" title="Fran�ais">&nbsp;fr&nbsp;</a> |
<a href="../ja/mod/mod_alias.html" hreflang="ja" rel="alternate" title="Japanese">&nbsp;ja&nbsp;</a> |
<a href="../ko/mod/mod_alias.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a> |
<a href="../tr/mod/mod_alias.html" hreflang="tr" rel="alternate" title="T�rk�e">&nbsp;tr&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="../images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Freenode, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/trunk/mod/mod_alias.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else {
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2017 The Apache Software Foundation.<br />Licencia bajo los t�rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M�dulos</a> | <a href="../mod/quickreference.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa del sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>