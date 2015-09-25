json.search_results do
  json.array! @search_results do |result|
    json.partial! 'mini_show', job: result
  end
end

json.num_pages @search_results.num_pages
