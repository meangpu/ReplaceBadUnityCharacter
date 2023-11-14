## About this repos

this is my first VScode plugin, create to solve unity font problem which not supported character below

- “ -> "
- ” -> "
- ’ -> '

the only function is to replace unsupported character with the supported one

## note to my future self

follow this tutorial [How To Create And Deploy A VSCode Extension - YouTube](https://www.youtube.com/watch?v=q5V4T3o3CXE)

## needed

- nodejs = [Download | Node.js](https://nodejs.org/en/download/current)

#### Dev package

1. install this package - run command below in bash terminal

```bash
npm install -g yo generator-code
```

2. run project build command

```bash
yo code
```

answer
? Initialize a git repository? `No` = cause already create from github
? Which package manager to use? `npm`

3. Debug by press `F5` then choose vscode debug
4. Call command in the vscode debug one after using `ctrl+shift+p`
5. Write the function I needed! That it!

#### Publishing

[Publishing Extensions | Visual Studio Code Extension API](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

My extension: [Manage Extensions | Visual Studio Marketplace](https://marketplace.visualstudio.com/manage/publishers/meangpu)

I already create organization and publisher on this first extension, so the next one won't needed it

##### website work

1. try go here [Projects - Home](https://dev.azure.com/) > user setting > Personal access token >
2. create token / edit permission to `manage marketplace`

##### In VScode work

1. make sure package is already installed

```bash
npm install -g @vscode/vsce
```

2. type

```bash
vsce login `MY_SECRET_TOKEN_HERE`
```

3. Go to file `package.json` below field display name add `"publisher": "meangpu",`

4. type

```bash
vsce publish
```

5. wait for website to verify here [Manage Extensions](https://marketplace.visualstudio.com/manage/publishers/meangpu)
