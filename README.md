Generic Student Theme, Fork Away!
=================================

## Page Menu

Each page requires YAML front matter to be rendered by jekyll, so I build a neat feature into the header and footer.

``` html
{% for item in page.menu %}
  <a href=#{{ item.url }}>{{ item.header }}</a>
{% endfor %}
```

To use this add a yaml list called menu in each page front matter. Jekyll creates a id for each header in the following manner `# Music in a Box` to `<h1 id="music-in-a-box">Music in a Box</h1>`. Take advantage of this by adding descriptive menu tags.

``` yaml
menu:
-header: Music in a Box
-url   : music-in-a-box
```

# Sources

[Artist Theme by DevTips](https://github.com/DevTips/Artists-Theme)

[DevTips Youtube](https://www.youtube.com/user/DevTipsForDesigners)

**HUGE** Thanks for the video series that allowed me to create this, couldn't have done it with out it.

A lot of the sections were taken directly from the Artist Theme, I never included all of them because I never intended to use them myself. However, I'm sure you can grab the other sections not included to use them without too much hassle. You might have to change variable names and add a section in the config files.


[Midnight Theme by Matt Graham](https://github.com/mattgraham/midnight)

Grabbed some of the theme from this fantastic design. Most notably would be the fantastic dark UI and some of the images used (Bullets, and horizontal Rules). Excellent Job Done on it.
