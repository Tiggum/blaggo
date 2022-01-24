# READ THIS!

Turns out setting a cookie on a different subdomain for heroku doesn't work. I spent an unfortunate amount of hours trying to figure out why my cookies wouldn't save at all, which breaks the site in a lot of unfortunate ways.

There's not really a good way to make it work out of the box without buying a custom domain. The current best workaround is to create a cookie with your userid and it will be functional again.

Running this command will make the site work for user 1
"document.cookie = "userid=1"

To find the userid for your account, look in the login network response, the set-cookie header will have that accounts userid to make it work on the site.