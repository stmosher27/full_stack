class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render json: { createPost: @post.errors.full_messages }, status: 422
    end
  end

  def show
    render :index
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render json: @post.author_id
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post_author = @post.author_id
    if @post.destroy
      render json: @post_author
    else
      render json: { deletePost: @post.errors.full_messages }, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:img_url, :description, :author_id, :likes)
  end
end
