# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Demo', type: :system do
  before do
    driven_by(:selenium_chrome_headless)
  end

  it 'replaces text' do
    visit '/demo'

    expect(page).to have_text('Hello, Stimulus!')
  end
end
