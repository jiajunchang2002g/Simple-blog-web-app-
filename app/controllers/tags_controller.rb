class TagsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    @tags = Tag.includes(posts: :comments).all
    render json: @tags
  end
  
  def show
    @tag = Tag.includes(posts: :comments).find(params[:id]) 
    render json: @tag
  end
  
  def new
      @tag = Tag.new
  end
  
  def create
    @tag = Tag.new(tag_params)
    
    if @tag.save
      render json: @tag
    else
      render json: { error: @tag.errors.messages }, status: 422
    end
  end
    
  def edit
    @tag = Tag.find(params[:id])
  end
    
  def update 
    @tag = Tag.find(params[:id])
       
    if @tag.update(tag_params)
      render json: @tag
    else
      render json: { error: @tag.errors.messages }, status: 422
    end
  end
    
  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      head :no_content
    else render json: { error: @tag.errors.messages }, status: 422
    end
  end

  private
    def tag_params
      params.require(:tag).permit(:title)
    end
end
