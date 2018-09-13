/* @flow */

import * as interativate-analyze from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof(interativate-analyze), "object")
})
