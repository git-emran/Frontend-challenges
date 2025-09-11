'use client'
import { useState } from "react";
import explorer from "@/data/explorerData"
import Folder from "@/components/Folder"

export default function Home() {
  const [explorerData, setExplorerData] = useState(explorer)
  const [isFolder, setIsFolder] = useState(false)
  return (

    <div className="body-css">
      <Folder explorer={explorerData} />
    </div>
  );
}
