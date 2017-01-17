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
    # post_feed = current_user.followings.ids
    # post_feed << current_user.id
    # @posts = Post.order('created_at DESC').includes(
    #   :comments, :author, :likes,
    #   comments: [:author]).where(
    #   author_id: post_feed)
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

# post_feed = current_user.followings.ids
# post_feed << current_user.id
# @posts = Post.order('created_at DESC').includes(
#   :comments, :author, :likes,
#   comments: [:author]).where(
#   author_id: post_feed).limit(5)
