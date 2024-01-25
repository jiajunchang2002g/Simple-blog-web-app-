class PostsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
      @posts = Post.all
      render json: @posts
    end
    
    def show
      @post = Post.find(params[:id])
      render json: @post
    end
    
    def new
        @post = Post.new
    end
    
    def create
      @post = Post.new(post_params)
      
      if @post.save
        render json: @post
      else
        render json: { error: @post.errors.messages }, status: 422
      end
    end
      
    def edit
      @post = Post.find(params[:id])
    end
      
    def update 
      @post = Post.find(params[:id])
         
      if @post.update(post_params)
        render json: @post
      else
        render json: { error: @post.errors.messages }, status: 422
      end
    end
      
    def destroy
      @post = Post.find(params[:id])
      if @post.destroy
        head :no_content
      else render json: { error: @post.errors.messages }, status: 422
      end
    end
  
    private
      def post_params
        params.require(:post).permit(:title, :body)
      end
  end