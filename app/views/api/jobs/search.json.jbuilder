json.search_results do
  json.array! @search_results do |result|
    json.partial! 'mini_show', job: result
  end
end

json.total_count @search_results.total_count
json.num_pages @search_results.num_pages
