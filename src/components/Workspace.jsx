const Workspace = () => {
  return (
    <div className="workspace">
      <input type="text" id="title" placeholder="Write title for your note" />
      <textarea id="text" placeholder="Write your note"></textarea>
    </div>
  );
};

export default Workspace;
