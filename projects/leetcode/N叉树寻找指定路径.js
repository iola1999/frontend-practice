const data = [
  {
    id: "1",
    sub: [
      {
        id: "2",
        sub: [
          {
            id: "3",
            sub: null,
          },
          {
            id: "4",
            sub: [
              {
                id: "6",
                sub: null,
              },
            ],
          },
          {
            id: "5",
            sub: null,
          },
        ],
      },
    ],
  },
  {
    id: "7",
    sub: [
      {
        id: "8",
        sub: [
          {
            id: "12",
            sub: null,
          },
          {
            id: "9",
            sub: [
              {
                id: "18",
                sub: null,
              },
            ],
          },
          {
            id: "10",
            sub: null,
          },
        ],
      },
      {
        id: "11",
        sub: null,
      },
    ],
  },
  {
    id: "10",
    sub: null,
  },
];

// 返回给定id在 data 里的路径
// 这个解法太乱了
function findPath(root, id) {
  function endWith(node, targetId) {
    if (node.id === targetId) return node.id;
    if (node.sub) {
      const res = node.sub
        .map(item => endWith(item, targetId))
        .flat()
        .filter(item => item);
      return [node.id, ...res];
    }
    return [false];
  }

  return root.map(item => endWith(item, id)).find(item => item.includes(id));
}

console.log(findPath(data, "9"));
