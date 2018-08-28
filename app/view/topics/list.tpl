<html>
  <head>
    <title>CNode</title>
    <link rel="stylesheet" href="/public/css/topics.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="/topics/{{ item.id }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>