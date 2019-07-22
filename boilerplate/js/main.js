// sst - single source of truth.

const allCommands = [
[
    {
        command : "git init",
        description : "Initialize a local Git repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520init"></iframe>'
    },
    {
        command : "git clone ssh://git@github.com/[username]/[repository-name].git",
        description : "Create a local copy of a remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520clone ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git status",
        description : "Check status of your local repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520status"></iframe>'
    },
    {
        command : "git add [file-name.txt]",
        description : "Add a file to the staging area",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520add [file-name.txt]"></iframe>'
    },
    {
        command : "git add -A",
        description : "Add all new and changed files to the staging area",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520add -A"></iframe>'
    },
    {
        command : "git commit -m \"[commit message]\"",
        description : "Commit (save) changes",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520commit -m \"[commit message]\"""></iframe>'
    },
    {
        command : "git rm -r [file-name.txt]",
        description : "Remove a file (or folder)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520rm -r [file-name.txt]"></iframe>'
    },
    {
        command : "git branch",
        description : "List branches (the asterisk denotes the current branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch"></iframe>'
    },
    {
        command : "git branch -a",
        description : "List all branches (local and remote)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch -a"></iframe>'
    },
    {
        command : "git branch [branch name]",
        description : "Create a new branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch [branch name]"></iframe>'
    },
    {
        command : "git branch -d [branch name]",
        description : "Delete a branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520branch -d [branch name]"></iframe>'
    },
    {
        command : "git push origin --delete [branch name]",
        description : "Delete a remote branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push origin --delete [branch name]"></iframe>'
    },
    {
        command : "git checkout -b [branch name]",
        description : "Create a new branch and switch to it",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -b [branch name]"></iframe>'
    },
    {
        command : "git checkout [branch name]",
        description : "Switch to a branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout [branch name]"></iframe>'
    },
    {
        command : "git checkout -",
        description : "Switch to a branch last checked out",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -"></iframe>'
    },
    {
        command : "git checkout -- [file-name.txt]",
        description : "Discard changes to a file",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520checkout -- [file-name.txt]"></iframe>'
    },
    {
        command : "git merge [branch name]",
        description : "Merge a branch into the active branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520merge [branch name]"></iframe>'
    },
    {
        command : "git merge [source branch] [target branch]",
        description : "Merge a branch into target branch",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520merge [source branch] [target branch]"></iframe>'
    },
    {
        command : "git stash",
        description : "Stash changes in a dirty working directory",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520stash"></iframe>'
    },
    {
        command : "git push origin [branch name]",
        description : "Push a branch to your remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push origin [branch name]"></iframe>'
    },
    {
        command : "git push -u origin [branch name]",
        description : "Push changes to remote repository (and remember the branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520push -u origin [branch name]"></iframe>'
    },
    {
        command : "git push",
        description : "Push changes to remote repository (remembered branch)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520init"></iframe>'
    },
    {
        command : "git pull",
        description : "Update local repository to the newest commit",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520pull"></iframe>'
    },
    {
        command : "git pull origin [branch name]",
        description : "Pull changes from remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520pull origin [branch name]"></iframe>'
    },
    {
        command : "git remote add origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Add a remote repository",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520remote add origin ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",
        description : "Set a repository's origin branch to SSH",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520remote set-url origin ssh://git@github.com/[username]/[repository-name].git"></iframe>'
    },
    {
        command : "git log",
        description : "View changes",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520log"></iframe>'
    },
    {
        command : "git log --summary",
        description : "View changes (detailed)",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520log --summary"></iframe>'
    },
    {
        command : "git diff [source branch] [target branch]",
        description : "Preview changes before merging",
        snippet: '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%2524%2520git%2520diff [source branch] [target branch]"></iframe>'
    },

],
[
    {
        command : "bash echo",
        description : "echo prints out the command",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=echo%2520Hello%2520World%250A%252F%252F%2520Hello%2520World%250A%250Aecho%2520hello%257B_%252C%257D.txt%250A%252F%252F%2520hello_.txt%2520hello.txt"></iframe>'
    },
    {
        command : "bash echo $SHELL",
        description : "Check which shell currently using",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=echo%2520%2524SHELL"></iframe>'
    },
    {
        command : "bash ls",
        description : "Lists files from current directory",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=ls"></iframe>'
    },
    {
        command : "bash pwd",
        description : "It displays the current directory you are in.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=pwd"></iframe>'
    },
    {
        command : "bash cd",
        description : "You can change the directory you are in. ",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=cd%2520Desktop"></iframe>'
    },
    {
        command : "bash man (manual)",
        description : "Type the command name after the man you wan to know about.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=man%2520--command%2520name--%250Aman%2520ls"></iframe>'
    },
    {
        command : "bash cat",
        description : "Used to concatenate all the files from the argument",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=cat%2520a.txt%2520b.txt"></iframe>'
    },
    {
        command : "bash cp (copy command)",
        description : "Copy a file to another directory or file name.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=cp%2520--source--%2520--target--%250Acp%2520a.txt%2520b.txt%250A%250A%252F%252FCopy%2520multiple%2520file%2520into%2520a%2520directory.%250Acp%2520a.txt%2520b.txt%2520source%252F"></iframe>'
    },
    {
        command : "bash mv (move command)",
        description : "The mv command is used to rename or overwrite files and directories.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=%252F%252F%2520Rename%250Amv%2520old.txt%2520new.txt%250A%252F%252F%2520Override%2520(it%2520will%2520override%2520one%2520file%2520to%2520another)%250Amv%2520old.txt%2520oldexists.txt"></iframe>'
    },
    {
        command : "bash mkdir",
        description : "Creates a new directory to the current directory.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=mkdir%2520react%250A%250A%252F%252F%2520-p%2520create%2520the%2520dir%2520if%2520it%2520doesnot%2520exists%250Amkdir%2520-p%2520react%252Fredux"></iframe>'
    },
    {
        command : "bash brace expansion sequences",
        description : "To type numerical list you can use brace expansion.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=echo%2520hello%257B1..5%257D%250A%252F%252F%2520hello1%2520hello2%2520hello3%2520hello4%2520hello5%250A%250Aecho%2520hello%257B1%252C%25202%257D.txt%250A%252F%252F%2520hello1.txt%2520hello2.txt%250A%250Aecho%2520img%257B0..40..10%257D%250A%252F%252F%2520prints%2520after%2520every%252010%2520img0%2520img10%2520img20%2520img30%2520img40"></iframe>'
    },
    {
        command : "bash rm (remove file)",
        description : "used to remove file",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=rm%2520b.txt%250A%250A%252F%252F%2520remove%2520multiple%2520files%250Arm%2520a.txt%2520b.txt%2520c.txt%250A%250A%252F%252F%2520Remove%2520entire%2520directory%2520-r%2520stands%2520for%2520recursively%250Arm%2520-r%2520--dirname--"></iframe>'
    },
    {
        command : "bash Head",
        description : "Head prints the first part of the file.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=head%2520main.txt%250A%252F%252F%2520For%2520specifying%2520the%2520number%2520of%2520lines%250Ahead%2520main.txt%2520--lines%253D5%250Ahead%2520-n5%2520main.txt"></iframe>'
    },
    {
        command : "bash tail",
        description : "Reads form the last of the file.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=tail%2520main.txt%2520--lines%253D5%250Atail%2520-n5%2520main.txt"></iframe>'
    },
    {
        command : "bash > && >> && <",
        description : "> is used to write to a file, >> is used to append to a file, < use it to read a file into the input of the program",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=echo%2520line%2520one%2520%253E%2520a.txt%250A%252F%252F%2520Append%2520to%2520a%2520file%250Aecho%2520line%2520two%2520%253E%253E%2520a.txt%250A%250A%252F%252F%2520%253C%2520for%2520the%2520input%250Awc%2520-c%2520%253C%2520a.txt"></iframe>'
    },
    {
        command : "bash `` backticks",
        description : "You can use backticks for the purpose of joining a variable and constant.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=application%2Fx-sh&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=echo%2520Greeting%2520from%2520the%2520year%2520%2560date%2520%252B%2525Y%2560"</iframe>'
    },
],
[ 
    {
        command : "css Pseudo-Classes",
        description : "Link Pseudo-Classes",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=a%253Alink%2520%257Bcolor%253A%2520blue%253B%257D%250Aa%253Avisited%2520%257Bcolor%253A%2520purple%253B%257D%250Aa%253Ahover%2520%257Bcolor%253A%2520red%253B%257D%250Aa%253Aactive%2520%257Bcolor%253A%2520yellow%253B%257D"></iframe>'
    },
    {
        command : "css Center an element",
        description : "Negative margins are exactly half the height and width, which pull the element back into perfect center. Only works with elements of a fixed height/width.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=.center%2520%257B%250A%2520%2520%2520width%253A%2520300px%253B%250A%2520%2520%2520height%253A%2520300px%253B%250A%2520%2520%2520position%253A%2520absolute%253B%250A%2520%2520%2520left%253A%252050%2525%253B%250A%2520%2520%2520top%253A%252050%2525%253B%2520%250A%2520%2520%2520margin-left%253A%2520-150px%253B%250A%2520%2520%2520margin-top%253A%2520-150px%253B%250A%257D"></iframe>'
    },
    {
        command : "css Linear Gradient",
        description : "Create a background image that is a linear gradient that moves [to this direction or at this angle] and starts with [one color] and ends with [another color].",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=.gradient%2520%257B%250A%2520%2520background-image%253A%250A%2520%2520%2520%2520linear-gradient(%250A%2520%2520%2520%2520%2520%2520red%252C%2520%2523f06d06%250A%2520%2520%2520%2520)%253B%250A%257D"></iframe>'
    },
    {
        command : "css Box Shadow",
        description : "Use 'inset' to create inner box shadow",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=.shadow%2520%257B%250A%2520%2520-moz-box-shadow%253A%2520%2520%2520%25203px%25203px%25205px%25206px%2520%2523ccc%253B%250A%2520%2520-webkit-box-shadow%253A%25203px%25203px%25205px%25206px%2520%2523ccc%253B%250A%2520%2520box-shadow%253A%2520%2520%2520%2520%2520%2520%2520%2520%25203px%25203px%25205px%25206px%2520%2523ccc%253B%250A%257D"></iframe>'
    },
    {
        command : "css Flip Image",
        description : "You can flip images with CSS! Possible scenario: having only one graphic for an 'arrow', but flipping it around to point in different directions.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=img%2520%257B%250A%2520%2520%2520%2520%2520%2520%2520%2520-moz-transform%253A%2520scaleX(-1)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520-o-transform%253A%2520scaleX(-1)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520-webkit-transform%253A%2520scaleX(-1)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520transform%253A%2520scaleX(-1)%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520filter%253A%2520FlipH%253B%250A%2520%2520%2520%2520%2520%2520%2520%2520-ms-filter%253A%2520%2522FlipH%2522%253B%250A%257D"></iframe>'
    },
    {
        command : "css The radial-gradient",
        description : "The radial-gradient() notation is used on either the background or background-image property in CSS.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=.gradient%2520%257B%250A%2520%2520background-image%253A%250A%2520%2520%2520%2520radial-gradient(%250A%2520%2520%2520%2520%2520%2520circle%2520at%2520top%2520right%252C%250A%2520%2520%2520%2520%2520%2520yellow%252C%250A%2520%2520%2520%2520%2520%2520%2523f06d06%250A%2520%2520%2520%2520)%253B%250A%257D"></iframe>'
    },
    {
        command : "css Centering an element.",
        description : "To center an element with margin, it must be a block element.",
        snippet : '<iframe src="https://carbon.now.sh/embed/?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=false&pv=16px&ph=11px&ln=false&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=.center%2520%257B%250A%2509display%253A%2520block%253B%250A%2520%2520%2509margin%253A%25200%2520auto%253B%250A%257D"></iframe>'
    },
]
];

// Display random commands.
const randomArray = Math.floor(Math.random()*allCommands.length);
const randomArray2 = Math.floor(Math.random()*allCommands[randomArray].length);
const randomObject = allCommands[randomArray][randomArray2];
        
var displaySnippet = document.querySelector(".snippet");
var displayDescription = document.querySelector(".description");
        
displayDescription.textContent = randomObject.description;
displaySnippet.innerHTML = randomObject.snippet;

var language = document.querySelector("select");

function randomSnippetDisplay(e) {

    const randomArray = Math.floor(Math.random()*allCommands.length);
    const randomArray2 = Math.floor(Math.random()*allCommands[randomArray].length);
    const randomObject = allCommands[randomArray][randomArray2];

    if(e.keyCode == 32 || onload) {

        var displaySnippet = document.querySelector(".snippet");
        var displayDescription = document.querySelector(".description");

        if (language.value == "git") {

            var randomGit = Math.floor(Math.random()*allCommands[0].length);
            displayDescription.textContent = allCommands[0][randomGit].description;
            displaySnippet.innerHTML = allCommands[0][randomGit].snippet;

        } else if (language.value == "bash") {

            var randomBash = Math.floor(Math.random()*allCommands[1].length);
            displayDescription.textContent = allCommands[1][randomBash].description;
            displaySnippet.innerHTML = allCommands[1][randomBash].snippet;

        }else if (language.value == "css") {

            var randomCss = Math.floor(Math.random()*allCommands[2].length);
            displayDescription.textContent = allCommands[2][randomCss].description;
            displaySnippet.innerHTML = allCommands[2][randomCss].snippet;

        } else {

            displayDescription.textContent = randomObject.description;
            displaySnippet.innerHTML = randomObject.snippet;

        }
    }
}

document.addEventListener("keydown", randomSnippetDisplay);

// Search Functionality.
var searchInput = document.querySelector("input");

function search(e) {
    var displaysearch = document.querySelector(".displaySearch");
    displaysearch.innerHTML = "";
    if (e.keyCode == 13) {
        allCommands.forEach((element, index) => {
            for (var i = 0; i < element.length; i++) {
                if (element[i].command.toLowerCase().includes(searchInput.value.toLowerCase())) {
                    displaySnippet.style.display = "none";
                    displayDescription.style.display = "none";
            
                    var li = document.createElement("li");
                    li.classList.add("listStyle");
                    li.innerHTML = element[i].snippet;
                    
                    displaysearch.style.display = "block";
            
                    displaysearch.appendChild(li);
                }
            }
        });
        searchInput.value = "";
    }

}

searchInput.addEventListener("keydown", search);

// Changing theme on button toggle.
var theme = "light";

var btn = document.querySelector("button");
btn.addEventListener("click", function() {
    var body = document.querySelector("body");
    // body.classList.add(".dark");
    if (theme == "light") {
        theme = "dark";
        // Body
        body.classList.remove("light");
        body.classList.add("dark");

        // button
        btn.classList.remove("dark");
        btn.classList.add("light");

        // Select
        language.classList.remove("dark");
        language.classList.add("light");

        searchInput.style.color = "#ecefe7";
        searchInput.style.border = "1px solid #ecefe7";

        // store();

    } else if (theme == "dark") {
        theme = "light";
        body.classList.remove("dark");
        body.classList.add("light");

        btn.classList.remove("light");
        btn.classList.add("dark");

        language.classList.remove("light");
        language.classList.add("dark");

        searchInput.style.color = "#100d15";
        searchInput.style.border = "1px solid #100d15";

        // store();
    }
});

// Local Storage
// function store() {
//     window.localStorage.themes = theme;
// }


// function getValues() {
//     var storedTheme = window.localStorage.themes;

//     if (storedTheme == "light") {
//         theme = "light";
//     } else if (storedTheme == "dark") {
//         theme = "dark";
//     }

// }

// getValues();
