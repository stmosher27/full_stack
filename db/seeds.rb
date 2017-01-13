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


Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332510/pexels-photo-94622_iwhyre.jpg', description: 'Beautiful view from the top', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332471/italian-landscape-mountains-nature_j40fuw.jpg', description: 'Great experience from the top', author_id: 3})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332500/pexels-photo-25943_yi3tzd.jpg', description: 'Now that was a hike', author_id: 1})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332436/pexels-photo-241322_ckdbey.jpg', description: 'I worked really hard', author_id: 4})
Post.create({img_url: 'http://res.cloudinary.com/dvm0l8rce/image/upload/v1484332255/32EE183600000578-0-image-a-4_1461009003739_zyhjym.jpg', description: 'Just wow', author_id: 2})

Comment.create({post_id: 3, user_id: 4, body: "Amazing view"})
Comment.create({post_id: 2, user_id: 1, body: "Now where is that place?"})
Comment.create({post_id: 3, user_id: 5, body: "Can I come next time?"})
Comment.create({post_id: 1, user_id: 2, body: "That is gorgeous!"})

Follow.create({followed_id: 2, follower_id: 1})
Follow.create({followed_id: 1, follower_id: 2})
Follow.create({followed_id: 1, follower_id: 3})
Follow.create({followed_id: 4, follower_id: 1})
Follow.create({followed_id: 3, follower_id: 2})

Like.create({user_id: 1, post_id: 2})
Like.create({user_id: 1, post_id: 3})
Like.create({user_id: 2, post_id: 1})
Like.create({user_id: 4, post_id: 2})
