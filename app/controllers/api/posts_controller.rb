class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end

  end

  def update

  end

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end


end
