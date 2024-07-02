import { useAppSelector } from "../hooks";
import { List } from "@arco-design/web-react";
const Article = ({ className }) => {
  const postList = useAppSelector((state) => state.post.posts);
  const status = useAppSelector((state) => state.post.status);
  return (
    <div className={className}>
      {status}
      <List
        style={{ width: "100%" }}
        header="post list"
        dataSource={postList}
        render={(item) => (
          <List.Item key={item.id}>
            {item.title}----{item.content}
          </List.Item>
        )}
      />
    </div>
  );
};
export default Article;
