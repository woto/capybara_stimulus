class DemoController < ApplicationController
  def index
    render inline: '<h1>Hello DemoController</h1>', layout: 'application'
  end
end
