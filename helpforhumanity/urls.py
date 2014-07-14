from django.conf.urls import patterns, include, url

from django.contrib import admin

# from contributors import views as contributorsviews
import contributors.views

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'helpforhumanity.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', contributors.views.index, name='index'),

    url(r'^admin/', include(admin.site.urls)),
)
