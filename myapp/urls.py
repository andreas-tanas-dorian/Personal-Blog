from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),               # index.html
    path('about/', views.about, name='about'),       # about.html
    path('form/', views.form, name='form'), # form.html
    path('gallery/', views.gallery, name='gallery'), # gallery.html
    path('chatbot/', views.chatbot, name='chatbot'), # chatbot.html
    path('resources/', views.resources, name='resources'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
    path('submit-review/', views.submit_review, name='submit_review'),
    path('update-review/<int:review_id>/', views.update_review, name='update_review'),
    path('delete-review/<int:review_id>/', views.delete_review, name='delete_review'),
]