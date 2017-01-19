class Api::SearchesController < ApplicationController
  def index
    search_string = params[:search];
    @users = User.where("username like ?", "%#{search_string}%")
    render :results
  end

  def create
    search_string = params[:search]
    @users = []
    unless search_string.empty?
      @users = User.where("username like ?", "%#{search_string}%")
    end

    render :results
  end
end
