class UsersController < ApplicationController
    def create
      user = User.new(user_params)
      if user.save
        render json: { message: 'User registered successfully' }
      else
        render json: { error: user.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    # Login
    def login
      user = User.find_by(username: params[:username])
      if user
        render json: { message: 'Login successful' }
      else
        render json: { error: 'Invalid username' }, status: :unauthorized
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username)
    end
  end
  
