import { useState } from "react";

export default function Folder({ handleInsertFolder = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertFolder(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  const handleFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };
  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div className="gap-6">
            <button onClick={(e) => handleFolder(e, true)} className="button">
              Folder +
            </button>
            <button onClick={(e) => handleFolder(e, false)} className="button">
              Files +
            </button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none" }} className="ml-5">
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={addFolder}
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((item) => {
            return (
              <Folder
                key={item.id}
                handleInsertFolder={handleInsertFolder}
                explorer={item}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-4">
        <span className="ml-5">📄 {explorer.name}</span>
      </div>
    );
  }
}
