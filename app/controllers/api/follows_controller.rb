class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followed_id: params[:followed_id])
    @follow.follower_id = current_user.id
    if @follow.save
      @user = User.find(params[:followed_id])
      render :show
    end
  end

  def destroy
    @follow = Follow.find_by(followed_id: params[:followed_id],
      follower_id: current_user.id)
    @follow.destroy
    @user = User.find(params[:followed_id])
    render :show
  end
end
