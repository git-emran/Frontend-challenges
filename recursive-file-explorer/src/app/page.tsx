'use client'

import { useState } from "react";
import explorer from "@/data/explorerData"
import Folder from "@/components/Folder"
import useTraverseTree from "@/hooks/use-traverse-tree"


export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertFolder } = useTraverseTree()

  const handleInsertFolder = (folderId, item, isFolder) => {
    const finalTree = insertFolder(explorerData, folderId, item, isFolder)
    setExplorerData(finalTree)
  }

  return (
    <div className="body-css">
      <Folder handleInsertFolder={handleInsertFolder} explorer={explorerData} />
    </div>
  );
}
