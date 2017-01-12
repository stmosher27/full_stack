class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      post_id: params[:post_id]
    )
    if @like.save
      @user = current_user
      @post = Post.find(params[:post_id])
      render :show, status: 200
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      post_id: params[:post_id]
    )
    @like.destroy
    @user = current_user
    @post = Post.find(params[:post_id])
    render :show, status: 200
  end
end
