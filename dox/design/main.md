# Solution Design for Mood Check API
This document contains documentation and artifacts related to the solution design for a REST API that allows the creation of quick mood-check surveys that can be created in real-time and recieve the "mood" of the intended audience in real-time also.

The intent here was to learn and apply [Clean Architecture](http://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) principles as described by [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin):
- Recent Clean Architecture [YouTube videos](https://www.youtube.com/results?search_query=clean+architecture&sp=EgIIBQ%253D%253D)
- [Google Search](https://www.google.com/search?hl=en&as_q=clean+architecture&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=y&as_sitesearch=&as_occt=any&safe=active&as_filetype=&as_rights=) for Clean Architecture.

## Clean Architecture Considerations
### Source Code Structure
One of the characteristics of real-world architectural documentation reveal what the architectural drawins is about. For example, if you look at the high-level architecture diagram of a building, the drawing itself broadcasts the intent of the building. When you look at the diagram, you are able to tell "It is a church.", "It is a home", "It is a library", etc.

It should not be any different when looking at the top level directory structure where the source code of a system is located.  Many times, engineers let the tooling they use dictate the shape and organization structure of the directories that host the solution. The directory structure will look like a Ruby app, a Java/.NET app, or a node.js app.  According to [Clean Architctrue principles](https://youtu.be/o_TH-Y78tt4?t=642), that should not be the case.

## Side-Effects
My intent, also, is to get better as a software engineer by applying Clean Code techniques and perfecting my craft by pursuing a state of continuous learning.