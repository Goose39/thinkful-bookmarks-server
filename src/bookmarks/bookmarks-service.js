const BookmarksService = {
  getAllBookmarks(knex) {
    return knex.select('*').from('bookmarks')
  }, 
  insertBookmark(knex, newBookmark) {
    return knex
       .insert(newBookmark)
       .into('bookmarks')
       .returning('*')
       .then(rows => {
          return rows[0]
        })
  },
  getBookmarkById(knex, id) {
    return knex.from('bookmarks').select('*').where({ id }).first()
  },
  deleteBookmark(knex, id) {
    return knex('bookmarks')
      .where({ id })
      .delete()
  },
  updateBookmark(knex, id, newFields) {
    return knex('bookmarks')
      .where({ id })
      .update(newFields)
  },
  
}

module.exports = BookmarksService