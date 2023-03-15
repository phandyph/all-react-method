
import "./Form.css";

const Form = ({ 
    showForm, 
    onAdd, 
    onButtonCancal,
    post,
    onInputChange
}) => {

  // Ask here

  // If condition not true, it will not render.
  if (!showForm) return <></>; 
  return (
    <div className="form" action="">
      <div>
        Title
        <input
          type="text"
          className="form-control input m-1 w-full"
          placeholder="Title"
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
          value={post.title}
          onChange={(e) => {
            onInputChange(e, "title")
          }}
        />
      </div>

      <div>
        Body
        <input
          type="text"
          className="form-control input m-1 w-full"
          placeholder="body"
          // value={body}
          // onChange={(e) => setBody(e.target.value)}
          value={post.body}
          onChange={(e) => {
            onInputChange(e, "body")
          }}
        />
      </div>
    
        <div className='btns'>
            <button onClick={() => {onButtonCancal()}} className="btn bg-danger text-white m-1">Cancal</button>
            <button onClick={() => onAdd()} className="btn bg-primary text-white m-1">
                Save
            </button>
        </div>
    </div>
  );
};

export default Form;
