var tree = [
  {
    label: "test1",
    children: [],
  },
  {
    label: "test2",
    children: [
      {
        label: "test2-1",
        children: [
          {
            label: "test2-1-1",
            children: [],
          },
        ],
      },
      {
        label: "test2-2",
        children: [],
      },
    ],
  },
]

function getMaxDepth(_tree, dep = 1) {
  if (!_tree || !_tree.length) return 0

  let result = dep

  for (let i = 0; i < _tree.length; i++) {
    const node = _tree[i]
    if (node.children) {
      result = Math.max(getMaxDepth(node.children, result + 1), result)
    }
  }

  return result
}

console.log(getMaxDepth(tree))
