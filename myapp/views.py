from django.shortcuts import render

def home(request):
    return render(request, "html/index.html")

def about(request):
    return render(request, "html/about.html")

def form(request):
    return render(request, "html/form.html")

def chatbot(request):
    return render(request, "html/chatbot.html")

def gallery(request):
    return render(request, "html/gallery.html")

def resources(request):
    return render (request, "html/resources.html")

from .models import Post

def home(request):
    posts = Post.objects.all()
    return render(request, './html/index.html', {'posts': posts})

from django.shortcuts import render
from .models import Post

def home(request):
    posts = Post.objects.all()  # Fetch all posts from the database
    return render(request, './html/index.html', {'posts': posts})

from django.shortcuts import get_object_or_404

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, './html/post_detail.html', {'post': post})

from django.shortcuts import render, redirect, get_object_or_404
from .models import Review, Post
from .forms import ReviewForm

def home(request):
    posts = Post.objects.all()
    reviews = Review.objects.all().order_by('-date')
    return render(request, 'html/index.html', {'posts': posts, 'reviews': reviews})

def submit_review(request):
    if request.method == 'POST':
        form = ReviewForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm()
    return render(request, 'html/submit_review.html', {'form': form})

def update_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        form = ReviewForm(request.POST, instance=review)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = ReviewForm(instance=review)
    return render(request, 'html/update_review.html', {'form': form})

def delete_review(request, review_id):
    review = get_object_or_404(Review, pk=review_id)
    if request.method == 'POST':
        review.delete_review()
        return redirect('home')
    return render(request, 'html/delete_review.html', {'review': review})