class CategoriesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def all
    categories = Category.all

    render json: categories
  end

  def create
    @newCategory = Category.create(:name => params[:name])

    render json: @newCategory 
  end

end
