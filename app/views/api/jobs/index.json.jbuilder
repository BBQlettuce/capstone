json.array! @jobs do |job|
  json.partial! 'mini_show', job: job
end
