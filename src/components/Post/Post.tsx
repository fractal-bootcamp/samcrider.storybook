import s from "./styles.module.css";

export type PostType = {
  userImage: string;
  userName: string;
  time: string;
  image: string;
  description: string;
  likes: number;
  comments: number;
};

const Post = ({
  userImage,
  userName,
  likes,
  description,
  time,
  comments,
  image,
}: PostType) => {
  return (
    <div className={s.postContainer}>
      <div>
        <img src={userImage} alt={userName} className={s.userImage} />
      </div>
      <div className={s.infoContainer}>
        <div className={s.heading}>
          <div className={s.userName}>
            {userName} <span>in Group name</span>
          </div>
          <div className={s.time}>{time}</div>
        </div>
        <img src={image} alt="post image" className={s.post} />
        <div className={s.footer}>
          <div className={s.description}>{description}</div>
          <div className={s.feedBack}>
            <div className={s.data}>
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{likes} likes</span>
            </div>
            <div className={s.data}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{comments} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
