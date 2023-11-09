export const data = [
  {
    id: 47,
    title: 'react FrontEnd',
    content:
      'Hello there we are having a bit issue on FrontEnd on progress solving it',
    createdDate: '2023-11-02T07:47:20.523Z',
    editedDate: null,
    comments: [
      {
        id: 16,
        postId: 47,
        parentComment: null,
        comment: 'normal-comment-1',
        createdDate: '2023-11-02T07:48:43.108Z',
        editedDate: null,
        childComments: [
          {
            id: 18,
            postId: 47,
            comment: 'reply of comment',
            childComments: [
              {
                id: 19,
                userId: 1,
                postId: 47,
                parentCommentId: 18,
                comment: 'reply of reply',
                createdDate: '2023-11-02T07:50:23.419Z',
                editedDate: null,
              },
            ],
            createdDate: '2023-11-02T07:49:45.106Z',
            editedDate: null,
          },
        ],
      },

      {
        id: 18,
        postId: 47,
        parentComment: {
          id: 16,
          userId: 1,
          postId: 47,
          parentCommentId: null,
          comment: 'normal-comment-1',
          createdDate: '2023-11-02T07:48:43.108Z',
          editedDate: null,
        },
        comment: 'reply of comment',
        createdDate: '2023-11-02T07:49:45.106Z',
        editedDate: null,
        childComments: [
          {
            id: 19,
            postId: 47,
            comment: 'reply of reply',
            childComments: [],
            createdDate: '2023-11-02T07:50:23.419Z',
            editedDate: null,
          },
        ],
      },

      {
        id: 19,
        postId: 47,
        parentComment: {
          id: 18,
          userId: 1,
          postId: 47,
          parentCommentId: 16,
          comment: 'reply of comment',
          createdDate: '2023-11-02T07:49:45.106Z',
          editedDate: null,
        },
        comment: 'reply of reply',
        createdDate: '2023-11-02T07:50:23.419Z',
        editedDate: null,
        childComments: [],
      },
    ],
    likes: [
      {
        id: 3,
        postId: 47,
      },
    ],
  },
];
