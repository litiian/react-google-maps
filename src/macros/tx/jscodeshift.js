import path from "path"
import fs from "fs"
import jscodeshift from "jscodeshift"

import tx from "./MapChild"

// fs.readdirSync(path.resolve(__dirname, "../"))
;["InfoWindow.jsx"].map(filename => {
  if (!filename.match(/\.jsx$/)) {
    return
  }
  const source = fs.readFileSync(
    path.resolve(__dirname, `../${filename}`),
    "utf8"
  )
  const output = tx({ source }, { jscodeshift })
  fs.writeFileSync(
    path.resolve(__dirname, `../../components/${filename}`),
    output
  )
})
