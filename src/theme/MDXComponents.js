import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Link from "@site/src/components/Link";
import Screenshot from "@site/src/components/Screenshot";
import Playground from "@site/src/components/Playground";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Link,
  Screenshot,
  Playground
};