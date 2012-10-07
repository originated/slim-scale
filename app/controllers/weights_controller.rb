class WeightsController < ApplicationController
  
  def create
    user = User.find_by_email(params["email"])
    if user
      user.update_attributes({:weight => params["weight"]})
    end
    render :nothing => true
  end

end
