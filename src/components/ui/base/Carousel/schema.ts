

const List: any = {
  editData: [
    // ...baseConfig,
    {
      key: 'sourceData',
      name: '数据源',
      type: 'DataList',
      cropRate: 1,
    },
    {
      key: 'round',
      name: '图片圆角',
      type: 'Number',
    },
    {
      key: 'imgSize',
      name: '图片大小',
      type: 'Select',
      range: [
        {
          key: '60',
          text: '60 x 60',
        },
        {
          key: '80',
          text: '80 x 80',
        },
        {
          key: '100',
          text: '100 x 100',
        },
        {
          key: '120',
          text: '120 x 120',
        },
        {
          key: '150',
          text: '150 x 150',
        },
      ],
    },
    {
      key: 'fontSize',
      name: '文字大小',
      type: 'Number',
    },
    {
      key: 'color',
      name: '文字颜色',
      type: 'Color',
    },
  ],
  config: {
    sourceData: [
      {
        id: '1',
        title: '趣谈小课',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '001',
            name: 'image.png',
            status: 'done',
            url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
          },
        ],
      },
      {
        id: '2',
        title: '趣谈小课',
        desc: '致力于打造优质小课程',
        link: 'xxxxx',
        imgUrl: [
          {
            uid: '002',
            name: 'image.png',
            status: 'done',
            url: 'http://49.234.61.19/uploads/1_1740c6fbcd9.png',
          },
        ],
      },
    ],
    round: 0,
    imgSize: '80',
    fontSize: 16,
    color: 'rgba(153,153,153,1)',
    // ...baseDefault,
  },
};

export default List;
