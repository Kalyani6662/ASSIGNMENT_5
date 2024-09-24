// Find all users
db.users.find();

// Find all articles
db.articles.find();

// Find all comments
db.comments.find();

// Find all likes
db.likes.find();

// Find all categories
db.categories.find();

// Insert a new article
db.articles.insertOne({
    _id: "article_id_22",
    title: "Local Community Wins National Award for Environmental Initiatives",
    author_id: "user_id_3",
    content: "The local community won a national award for its outstanding contribution to environmental protection...",
    category: "Local News",
    publish_date: ISODate("2024-09-05T14:00:00Z"),
    status: "published"
});

// Insert multiple categories
db.categories.insertMany([
    { _id: "category_id_21", name: "News" },
    { _id: "category_id_22", name: "Technology" },
    { _id: "category_id_23", name: "Sports" }
]);

// Find all users with pretty output
db.users.find().pretty();

// Find a specific article by _id
db.articles.find({ _id: "article_id_5" }).pretty();

// Find articles by category "Technology"
db.articles.find({ category: "Technology" }).pretty();

// Update a user's email by user_id
db.users.updateOne(
    { _id: "user_id_2" },  // Find by _id
    { $set: { email: "new_email@example.com" } }  // Set the new email
);

// Update all articles in the "Sports" category to status "draft"
db.articles.updateMany(
    { category: "Sports" }, 
    { $set: { status: "draft" } }
);

// Delete a comment by _id
db.comments.deleteOne({ _id: "comment_id_1" });

// Delete all articles with status "draft"
db.articles.deleteMany({ status: "draft" });

// Aggregate total articles by category
db.articles.aggregate([
    { $group: { _id: "$category", totalArticles: { $sum: 1 } } }
]);

// Aggregate total likes by article_id
db.likes.aggregate([
    { $group: { _id: "$article_id", totalLikes: { $sum: 1 } } }
]);

// Aggregate total likes by user_id and filter users with more than 5 likes
db.likes.aggregate([
    { $group: { _id: "$user_id", likeCount: { $sum: 1 } } },
    { $match: { likeCount: { $gt: 5 } } }
]);

// Create an index on publish_date in articles
db.articles.createIndex({ publish_date: 1 });

// Create a compound index on author_id and category in articles
db.articles.createIndex({ author_id: 1, category: 1 });

// Get all indexes for likes
db.likes.getIndexes();

// Drop an index on category in articles
db.articles.dropIndex({ category: 1 });
