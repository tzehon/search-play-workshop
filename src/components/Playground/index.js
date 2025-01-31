import React from "react";
import Link from "@site/src/components/Link";

export default function Playground(props) {

  // props.url: Full Playground URL, using the pieces and adding UTMs possibly
  // props.pid: Playground ID

  // TODO:
  //   * Accept full playground url too, strip /.corp/ off
  //   * Embed as iframe? (as well as link to)
  //   * Add UTM support

  const url = props.url.replace(".corp","") || "https://search-playground.mongodb.com/tools/code-sandbox/snapshots/" + props.pid;

  return (
   <Link {...props} to={url} />
    // <div>
    //   Playground Link for this Exercise: <a href={url} target="_blank">Playground</a>

    //   <hr />
    //   <div>
    //     {props.children}
    //   </div>

    // </div>
  )
}