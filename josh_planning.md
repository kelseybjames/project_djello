* Create rails app with postgres
* Set up angular, ui-router, restangular
* Set up database with schema and seeds
* Set up test framework (rspec, guard, factory_girl)

### Auth
* SessionsController (create, destroy)
* setup devise with rails and angular
* user sign in - immediately see boards
* user sign out
* (optional) user sign up

### Users (new, create, edit, update, destroy)
* has_many boards (as owned boards)
* has_many cards through memberships
* attributes:
  * username
  * password
  * email
  * auth_token
  * password_digest

### Boards (index, show, create, update, destroy)
* belongs_to user (owned boards)
* has_many lists
* attributes:
  * title
  * user_id

### Lists (index, show, create, update, destroy)
* belongs_to board
* has_many cards
* attributes:
  * title
  * description
  * board_id

### Cards (index, show, create, update, destroy)
* belongs_to list
* has_many members through memberships
* has_many activities
* attributes:
  * title
  * description
  * list_id

### Memberships (no controller, included with cards)
* belongs_to card
* belongs_to member (User)
* attributes:
  * card_id
  * member_id (User)

### Activity (no controller, included with cards)
* belongs_to card
* belongs_to user
* attributes
  * description
  * user_id
  * card_id
