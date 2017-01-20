# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'guest', email: 'guest.com', name: 'John Smith', password: 'password'});
User.create({username: 'scotty', email: 'scotty@yahoo.com', name: 'Scotty Williams', password: 'password'});
User.create({username: 'billy', email: 'billy@yahoo.com', name: 'Billy Bob', password: 'password'});
User.create({username: 'trey', email: 'trey@yahoo.com', name: 'Trey Wingo', password: 'password'});
User.create({username: 'katherine', email: 'katherine@gmail.com', name: 'Katherine Martin', password: 'password'});
25.times do
  User.create({username: Faker::Internet.user_name, email: Faker::Internet.email, name: Faker::Name.name, password: 'password'});
end



Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332510/pexels-photo-94622_iwhyre.jpg', description: 'Beautiful view from the top of the highest peek in peru', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332500/pexels-photo-25943_yi3tzd.jpg', description: 'Now that was a hike', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936664/pexels-photo-169905_llqrup.jpg', description: 'After a long hike, got to eat lunch atop this amazing view', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936660/pexels-photo-28051_f6fduv.jpg', description: 'Bryce canyon at its finest', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936583/pexels-photo-30865_ubuab3.jpg', description: 'One of my absolute favorite places to hike', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936585/delicate-arch-night-stars-landscape_ajrgey.jpg', description: 'Amazing night hike in Arizona', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936568/amazing-animal-beautiful-beautifull_iybv50.jpg', description: 'This lighting back in January was unbelievable', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484936594/pexels-photo-169738_lcnsb2.jpg', description: 'What a world we live in!', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332471/italian-landscape-mountains-nature_j40fuw.jpg', description: 'Great experience from the top', author_id: 3})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332436/pexels-photo-241322_ckdbey.jpg', description: 'I worked really hard', author_id: 4})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332255/32EE183600000578-0-image-a-4_1461009003739_zyhjym.jpg', description: 'Just wow', author_id: 2})


def rand_post
  Random.rand(1...23)
end

def rand_user
  Random.rand(1...30)
end

30.times do
  Comment.create({post_id: rand_post, user_id: rand_user, body: Faker::Lorem.sentence})
end




Follow.create({followed_id: 20, follower_id: 1})
Follow.create({followed_id: 1, follower_id: 2})
Follow.create({followed_id: 1, follower_id: 3})
Follow.create({followed_id: 1, follower_id: 3})
Follow.create({followed_id: 1, follower_id: 2})
Follow.create({followed_id: 1, follower_id: 4})
Follow.create({followed_id: 1, follower_id: 5})
Follow.create({followed_id: 1, follower_id: 6})
Follow.create({followed_id: 1, follower_id: 7})
Follow.create({followed_id: 1, follower_id: 8})
Follow.create({followed_id: 1, follower_id: 9})
Follow.create({followed_id: 1, follower_id: 10})
Follow.create({followed_id: 1, follower_id: 11})
Follow.create({followed_id: 1, follower_id: 12})
Follow.create({followed_id: 2, follower_id: 1})
Follow.create({followed_id: 3, follower_id: 1})
Follow.create({followed_id: 3, follower_id: 1})
Follow.create({followed_id: 4, follower_id: 1})
Follow.create({followed_id: 5, follower_id: 1})
Follow.create({followed_id: 6, follower_id: 1})
Follow.create({followed_id: 7, follower_id: 2})
Follow.create({followed_id: 8, follower_id: 2})
Follow.create({followed_id: 9, follower_id: 2})
Follow.create({followed_id: 10, follower_id: 2})
Follow.create({followed_id: 11, follower_id: 2})
Follow.create({followed_id: 12, follower_id: 2})
Follow.create({followed_id: 13, follower_id: 2})
Follow.create({followed_id: 14, follower_id: 2})
Follow.create({followed_id: 15, follower_id: 2})

Like.create({user_id: 1, post_id: 1})
Like.create({user_id: 1, post_id: 1})
Like.create({user_id: 2, post_id: 1})
Like.create({user_id: 4, post_id: 2})
Like.create({user_id: 5, post_id: 2})
Like.create({user_id: 6, post_id: 2})
Like.create({user_id: 7, post_id: 2})
Like.create({user_id: 8, post_id: 2})
Like.create({user_id: 9, post_id: 2})
Like.create({user_id: 10, post_id: 3})
Like.create({user_id: 11, post_id: 3})
Like.create({user_id: 12, post_id: 3})
Like.create({user_id: 14, post_id: 4})
Like.create({user_id: 15, post_id: 4})
Like.create({user_id: 2, post_id: 4})
Like.create({user_id: 3, post_id: 5})
Like.create({user_id: 4, post_id: 5})
Like.create({user_id: 5, post_id: 6})
Like.create({user_id: 6, post_id: 6})
Like.create({user_id: 7, post_id: 7})
Like.create({user_id: 8, post_id: 9})
Like.create({user_id: 9, post_id: 9})
Like.create({user_id: 10, post_id: 10})
Like.create({user_id: 1, post_id: 11})
Like.create({user_id: 1, post_id: 12})
Like.create({user_id: 2, post_id: 12})
Like.create({user_id: 3, post_id: 12})
Like.create({user_id: 4, post_id: 12})
