const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

const electronAppDir = path.join(__dirname, 'drawio', 'src/main/webapp')
const appjsonpath = path.join(__dirname, 'drawio', 'src/main/webapp', 'package.json')

let ver = fs.readFileSync(path.join(__dirname, 'drawio', 'VERSION'), 'utf8')
//let ver = '7.0.5' // just to test autoupdate

let pj = require(appjsonpath)

pj.version = ver

fs.writeFileSync(appjsonpath, JSON.stringify(pj, null, 2), 'utf8')

child_process.spawnSync('yarn', ['install', '--production'], {cwd: electronAppDir})
