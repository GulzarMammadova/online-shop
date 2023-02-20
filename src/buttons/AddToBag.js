import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function AddToBag() {

  const [itemNum, setItemNum] = useState(0);
  useEffect (() => {
  console.log("did update")
  },[itemNum]);
  return (
    <div className="bag">
<button onClick={()=> setItemNum(itemNum
+1)}>Add to bag</button>
    </div>
  );
}


