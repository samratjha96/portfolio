import{b as n,j as s,k as t}from"./three-114a71c7.js";function a(i){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",span:"span",strong:"strong",...i.components};return s(t,{children:[s(e.p,{children:["My ",n(e.code,{children:"~/.tmux.conf"})," grew one frustration at a time. This is an explanation of what's in it and what the defaults get wrong."]}),`
`,s(e.h2,{id:"the-prefix",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-prefix",children:n(e.span,{className:"icon icon-link"})}),"The prefix"]}),`
`,s(e.p,{children:["The default tmux prefix is ",n(e.code,{children:"C-b"}),". I changed it to ",n(e.code,{children:"C-a"}),":"]}),`
`,n(e.pre,{children:n(e.code,{className:"hljs language-bash",children:`unbind C-b
set-option -g prefix C-a
bind-key C-a send-prefix
`})}),`
`,s(e.p,{children:[n(e.code,{children:"C-a"}),` is what GNU Screen used, and it sits better under the left hand. The tradeoff: it conflicts with Bash/Zsh's "go to beginning of line" shortcut. In practice I just use Option+Left to jump to the front of a line, or drop into vi mode.`]}),`
`,n(e.p,{children:"I also remap Caps Lock to Control at the OS level. That makes the prefix Caps Lock + a, which you can hit without moving your hand at all. Highly recommend it on any keyboard where Control is buried in the corner."}),`
`,s(e.h2,{id:"escape-time",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#escape-time",children:n(e.span,{className:"icon icon-link"})}),"Escape time"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -s escape-time 0
`]})}),`
`,n(e.p,{children:"By default tmux waits 500ms after an Escape keypress to see if it's the start of a key sequence. That delay is noticeable in any editor. Setting it to zero fixes this completely. I don't know why this isn't the default."}),`
`,s(e.h2,{id:"true-color",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#true-color",children:n(e.span,{className:"icon icon-link"})}),"True color"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"})," -g default-terminal ",n(e.span,{className:"hljs-string",children:'"tmux-256color"'}),`
`,n(e.span,{className:"hljs-built_in",children:"set"})," -ga terminal-overrides ",n(e.span,{className:"hljs-string",children:'",xterm-256color:Tc"'}),`
`,n(e.span,{className:"hljs-built_in",children:"set"})," -ga terminal-overrides ",n(e.span,{className:"hljs-string",children:'",tmux-256color:Tc"'}),`
`]})}),`
`,s(e.p,{children:["Without this, colorschemes look washed out inside tmux even when the terminal supports true color. The ",n(e.code,{children:"Tc"})," flag tells tmux to pass through 24-bit color instead of capping at 256. The ",n(e.code,{children:"default-terminal"})," setting needs to match something your system has in its terminfo database; ",n(e.code,{children:"tmux-256color"})," is the right choice on modern macOS."]}),`
`,s(e.h2,{id:"focus-events",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#focus-events",children:n(e.span,{className:"icon icon-link"})}),"Focus events"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -s focus-events on
`]})}),`
`,n(e.p,{children:"This lets tmux pass focus events through to applications inside panes. Editors use this to detect when you switch back to them and reload files that changed on disk. Without it, you're working with stale buffers and don't know it."}),`
`,s(e.h2,{id:"history",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#history",children:n(e.span,{className:"icon icon-link"})}),"History"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -g history-limit 50000
`]})}),`
`,n(e.p,{children:"The default is 2000 lines. That's not enough for anything involving log output or long test runs. 50k is still fast and covers everything I've thrown at it."}),`
`,s(e.h2,{id:"window-and-pane-numbering",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#window-and-pane-numbering",children:n(e.span,{className:"icon icon-link"})}),"Window and pane numbering"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -g base-index 1
setw -g pane-base-index 1
`,n(e.span,{className:"hljs-built_in",children:"set"}),` -g renumber-windows on
`]})}),`
`,s(e.p,{children:["Windows and panes start at 1 instead of 0. ",n(e.code,{children:"1"})," through ",n(e.code,{children:"9"})," map directly to the number keys on the keyboard. ",n(e.code,{children:"C-a 1"})," to jump to window 1 is more natural than ",n(e.code,{children:"C-a 0"}),". ",n(e.code,{children:"renumber-windows on"})," means if you close window 2, window 3 becomes the new 2, so there are no gaps."]}),`
`,s(e.h2,{id:"stop-renaming-my-windows",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#stop-renaming-my-windows",children:n(e.span,{className:"icon icon-link"})}),"Stop renaming my windows"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -g allow-rename off
`]})}),`
`,n(e.p,{children:`By default, tmux renames windows based on whatever process is currently running in them. You rename a window "api", switch to it, run a command, and now it's called "node". This setting stops that. Name your windows once, they stay named.`}),`
`,s(e.h2,{id:"quiet-bell",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quiet-bell",children:n(e.span,{className:"icon icon-link"})}),"Quiet bell"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"}),` -g bell-action none
`]})}),`
`,n(e.p,{children:"Silences all terminal bells. Programs send BEL constantly: completion hooks, SSH prompts, test runners. tmux surfaces all of it as status bar alerts by default. I don't want any of it."}),`
`,s(e.h2,{id:"splits-that-make-sense",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#splits-that-make-sense",children:n(e.span,{className:"icon icon-link"})}),"Splits that make sense"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:["bind-key h split-window -v -c ",n(e.span,{className:"hljs-string",children:'"#{pane_current_path}"'}),`
bind-key v split-window -h -c `,n(e.span,{className:"hljs-string",children:'"#{pane_current_path}"'}),`
`]})}),`
`,s(e.p,{children:[n(e.code,{children:"h"})," for horizontal split (stacked top/bottom), ",n(e.code,{children:"v"})," for vertical split (side by side). The ",n(e.code,{children:'-c "#{pane_current_path}"'})," part makes the new pane open in the same directory as the current one, which is almost always what you want. The default behavior opens in your home directory."]}),`
`,n(e.p,{children:"Same thing for new windows:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:["bind-key c new-window -c ",n(e.span,{className:"hljs-string",children:'"#{pane_current_path}"'}),`
`]})}),`
`,s(e.h2,{id:"pane-navigation",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#pane-navigation",children:n(e.span,{className:"icon icon-link"})}),"Pane navigation"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"bind"}),` -n M-h select-pane -L
`,n(e.span,{className:"hljs-built_in",children:"bind"}),` -n M-j select-pane -D
`,n(e.span,{className:"hljs-built_in",children:"bind"}),` -n M-k select-pane -U
`,n(e.span,{className:"hljs-built_in",children:"bind"}),` -n M-l select-pane -R
`]})}),`
`,s(e.p,{children:[n(e.code,{children:"M-"})," means Alt. ",n(e.code,{children:"Alt+hjkl"})," switches panes with no prefix required. I also have arrow key equivalents for muscle memory from before I was fully on hjkl."]}),`
`,s(e.h2,{id:"vi-copy-mode",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#vi-copy-mode",children:n(e.span,{className:"icon icon-link"})}),"Vi copy mode"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[`set-window-option -g mode-keys vi
bind-key -T copy-mode-vi v send -X begin-selection
bind-key -T copy-mode-vi y send-keys -X copy-pipe-and-cancel `,n(e.span,{className:"hljs-string",children:'"pbcopy"'}),`
bind-key -T copy-mode-vi Y send-keys -X copy-end-of-line
bind-key -T copy-mode-vi C-v send-keys -X rectangle-toggle
`]})}),`
`,s(e.p,{children:[n(e.code,{children:"prefix + ["})," enters copy mode. Then ",n(e.code,{children:"v"})," to start a selection, ",n(e.code,{children:"y"})," to yank to the macOS clipboard, ",n(e.code,{children:"Y"})," to yank to end of line (vim-consistent). ",n(e.code,{children:"C-v"})," toggles block selection for columnar yanks."]}),`
`,n(e.p,{children:"Mouse drag also copies to clipboard:"}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:["bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel ",n(e.span,{className:"hljs-string",children:'"pbcopy"'}),`
`]})}),`
`,s(e.p,{children:["And paste from clipboard with ",n(e.code,{children:"prefix + P"})," (uppercase):"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:["bind-key P run-shell ",n(e.span,{className:"hljs-string",children:'"pbpaste | tmux load-buffer - && tmux paste-buffer"'}),`
`]})}),`
`,s(e.h2,{id:"sync-panes",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sync-panes",children:n(e.span,{className:"icon icon-link"})}),"Sync panes"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"bind"}),` y setw synchronize-panes
`]})}),`
`,s(e.p,{children:[n(e.code,{children:"prefix + y"})," toggles synchronized input across all panes in the current window. Useful for running the same command on multiple servers at once. I use it rarely, but when I need it there's no substitute."]}),`
`,s(e.h2,{id:"plugins",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#plugins",children:n(e.span,{className:"icon icon-link"})}),"Plugins"]}),`
`,n(e.pre,{children:s(e.code,{className:"hljs language-bash",children:[n(e.span,{className:"hljs-built_in",children:"set"})," -g @plugin ",n(e.span,{className:"hljs-string",children:"'tmux-plugins/tpm'"}),`
`,n(e.span,{className:"hljs-built_in",children:"set"})," -g @plugin ",n(e.span,{className:"hljs-string",children:"'tmux-plugins/tmux-resurrect'"}),`
`,n(e.span,{className:"hljs-built_in",children:"set"})," -g @plugin ",n(e.span,{className:"hljs-string",children:"'tmux-plugins/tmux-continuum'"}),`

`,n(e.span,{className:"hljs-built_in",children:"set"})," -g @continuum-restore ",n(e.span,{className:"hljs-string",children:"'on'"}),`
`,n(e.span,{className:"hljs-built_in",children:"set"})," -g @resurrect-capture-pane-contents ",n(e.span,{className:"hljs-string",children:"'on'"}),`
`]})}),`
`,s(e.p,{children:[n(e.a,{href:"https://github.com/tmux-plugins/tpm",children:"TPM"})," is the plugin manager. The two plugins I actually use:"]}),`
`,s(e.p,{children:[n(e.strong,{children:"tmux-resurrect"})," saves your entire session layout: windows, panes, working directories, and running programs, so you can restore it after a reboot. Without this, every restart means rebuilding your workspace from scratch."]}),`
`,s(e.p,{children:[n(e.strong,{children:"tmux-continuum"})," runs resurrect automatically in the background, saving every 15 minutes and restoring on tmux start. ",n(e.code,{children:"continuum-restore on"})," means the last saved session loads automatically when you open a new tmux server."]}),`
`,n(e.p,{children:`These two together mean I haven't thought about "setting up my terminal" in years. It's just there when I open my laptop.`}),`
`,s(e.h2,{id:"the-full-config",children:[n(e.a,{"aria-hidden":"true",tabIndex:"-1",href:"#the-full-config",children:n(e.span,{className:"icon icon-link"})}),"The full config"]}),`
`,n(e.p,{children:s(e.a,{href:"https://github.com/samratjha96/dotfiles/blob/master/.tmux.conf",children:[n(e.code,{children:"~/.tmux.conf"})," on GitHub"]})})]})}function r(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(a,{...i})}):a(i)}export{r as default};
