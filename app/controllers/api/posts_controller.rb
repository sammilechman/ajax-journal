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
    respond_to do |format|
      format.json do

      end
      format.html do
        render :index
      end
    end
  end

  def show
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end


end
