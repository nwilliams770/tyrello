# Tyrello

[Tyrello Live](http://www.tyrello.co/#/)

Tyrello is a Trello-inspired note-taking application built on ReactJS + Rails and follows a Redux/Flux pattern.

Features & Implementation
------
### Boards
Users can organize projects via boards. Upon creation, boards will default to a personal board. Board page navigation is always accessible to the user from the menu bar on the left.

![board demo](http://res.cloudinary.com/nwilliams770/image/upload/q_30/v1512156465/Screen_Shot_2017-12-01_at_10.51.48_AM_tslckk.jpg)

### Lists & Cards
Board components contain list components which contain card components. Lists stack horizontally, allowing users to intuitively scroll through lists while modularizing their projects.

![board demo](http://res.cloudinary.com/nwilliams770/image/upload/q_30/v1512156480/Screen_Shot_2017-12-01_at_10.52.28_AM_sjidpt.jpg)

Future Directions 
------
With the knowledge gained from building this project, I plan to refactor and implement additional features.

### Drag & Drop
One of the core features of Trello is the ability to drag cards to different lists, providing the user with quick flexibility. I plan to implement this feature using the ReactDnD library.

### Board Sharing
Board sharing was considered and implemented on the backend but I'd like to implement board sharing components. This will encourage collaboration while working on projects and allow users to create 'microteams' via board sharing.
