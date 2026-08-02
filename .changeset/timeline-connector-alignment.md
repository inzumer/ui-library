---
'@inzumer/ui-library': patch
---

Fix `Timeline`'s connecting line being visibly offset from the node dots. The line is a `border-l` on the list, and the dots now center on it via `-translate-x-1/2` instead of a fixed offset that didn't account for the dot's own width.
