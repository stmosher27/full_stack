class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end

  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    @post = Post.find_by(id: params[:comment][:post_id])
    render "api/posts/show"
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @post = Post.find_by(id: @comment.post_id)
    @comment.destroy
    render "api/posts/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :user_id, :body)
  end
end
