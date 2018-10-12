# Embeds

Some errors happen only once in a while.
To capture ones that only occasionally happen during application startup,
consider making a page with a dozen or more `<iframe>` embeds and constantly reloading them.

Open `index.html` in a modern browser on a good (relatively new) laptop or desktop
without many other applications or tabs open.
You probably won't see _"It happened!"_ in red text in any of the `<iframe>`s.

Next open `index.html` in Internet Explorer.
After a period of the UI becoming nonresponsive you should see the frames again, but much slower.

The embedded pages simulate doing a lot of work on startup before being reloaded.
If that takes > 2 seconds, they have a 1/10 percent chance of displaying _"It happened!"_ and stopping.
