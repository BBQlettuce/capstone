json.array! @search_results do |result|
  json.partial! 'mini_show', job: result
end
