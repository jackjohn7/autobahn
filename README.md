# autobahn

Free and Open-Source (FOSS) SCRUM and Kanban system. Autobahn users
are able to create unlimited projects.

No nonsense. Just a sleek UI, with features enabling a great degree
of customization to perfectly match your team's workflow.

# Immediate Todos

There's a lot to do, so I'm keeping a list here. As things are 
completed, I'll be removing them from here. If others begin working 
on this project, I'll move to using the issues tab. While it's just 
me, using issues would be unnecessary friction.

- Design database schema
- PostgreSQL docker init script
- Custom .env validation
  - Base URL
  - Connection info
- Use DnDKit to create status (Lane) components for dragging stories
- Use NextAuth to authenticate with GitHub, GitLab, and Google

# Planned features

Autobahn is a very early WIP. These are the planned features.

## Integrations

### GitHub Integrations

I would like to allow the user to tie GitHub repository issues and 
pull-requests to Autobahn Stories.

GitHub actions and webhook integrations could also be neat.

### GitLab Integrations

I'm not a GitLab user, but I'd like to ensure GitLab users are able 
to fully utilize Autobahn without feeling like they're missing any 
features available to GitHub users.

### Discord Integrations

For those that use Discord to communicate with team members, 
integrations with Discord via Bots or Webhooks can be useful.

### Autobahn Automations

Users should be able to define triggers and events in Autobahn to
automate certain tasks. For example, when a story moves from one 
status (Lane) to another, an HTTP request can be fired.

### JSON Import and Export

User should be able to import and export Autobahn projects in 
the form of JSON.

### RESTful API

Users should be able to request information about projects using
HTTP.
