import { Form, Input, Button } from "@arco-design/web-react";
import { fetchPosts } from "../features/posts/postSlice";
import { useAppDispatch } from "../hooks";

const FormItem = Form.Item;
const AddPostForm = ({ className }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    // dispatch(addPostAsync(v.title, v.content));
    dispatch(fetchPosts());
  };
  return (
    <div className={className}>
      <Form onSubmit={handleSubmit} style={{ width: "500px" }}>
        <FormItem label="title" field="title">
          <Input placeholder="输入标题" />
        </FormItem>
        <FormItem label="content" field="content">
          <Input placeholder="输入内容" />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};
export default AddPostForm;
