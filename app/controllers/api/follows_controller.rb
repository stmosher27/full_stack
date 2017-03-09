class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(followed_id: params[:user_id])
    @follow.follower_id = current_user.id
    if @follow.save!
      @user = User.find(params[:user_id])
      render :show
    end
  end

  def show

  end

  def destroy
    @follow = Follow.find_by(followed_id: params[:id],
      follower_id: current_user.id)

    if @follow.destroy
      @user = User.find(params[:id])
      render :show
    end
  end
end
