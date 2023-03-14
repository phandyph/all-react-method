import "./Form.css";

const Form = ({ 
    showForm, 
    onAdd, 
    title, 
    body, 
    setTitle, 
    onButtonCancal,
    setBody 
}) => {
  if (!showForm) return <></>;

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()} action="">
      <div>
        Title
        <input
          type="text"
          className="form-control input m-1 w-full"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        Body
        <input
          type="text"
          className="form-control input m-1 w-full"
          value={body}
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
    
        <div className='btns'>
            <button onClick={() => onButtonCancal()} className="btn bg-danger text-white m-1">Cancal</button>
            <button onClick={() => onAdd()} className="btn bg-primary text-white m-1">
                Save
            </button>
        </div>
    </form>
  );
};

export default Form;
