class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @commment.save
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
    params.require(:comment).permit(:post_id, :body)
  end
end
