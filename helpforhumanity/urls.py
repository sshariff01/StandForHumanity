from django.conf.urls import patterns, include, url

from django.contrib import admin

import contributors.views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'helpforhumanity.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', contributors.views.index, name='index'),
    url(r'^postToMap/', contributors.views.postToMap, name='postToMap'),
    url(r'^modern/', contributors.views.modern, name='modern'),
    url(r'^donate/', contributors.views.donate, name='donate'),

    url(r'^admin/', include(admin.site.urls)),
)

from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns += staticfiles_urlpatterns()