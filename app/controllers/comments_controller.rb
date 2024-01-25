class CommentsController < ApplicationController
    def index 
      @post = Post.find(params[:post_id])
      @comments = @post.comments.all
      render json: @comments
    end
      
    def create
      @post = Post.find(params[:post_id])
      @comment = @post.comments.new(comment_params)
      
      if @comment.save
        render json: @comment 
      else
        render json: { error: @comment.errors.messages }, status: 422
      end
    end
  
    def destroy
      @post = Post.find(params[:post_id])
      @comment = @post.comments.find(params[:id])
      if @comment.destroy
        head :no_content
      else
        render json: { error: @comment.errors.messages }, status: 422
      end
    end
     
    private
      def comment_params
        params.require(:comment).permit(:commenter, :body)
      end
  end
  
