class WeightsController < ApplicationController
  
  def create
    # debugger
    user = params["user"]
    weight = params["weight"]
    
    render :nothing => true
  end

end
