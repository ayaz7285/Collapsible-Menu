import React, { useState } from "react";

export default function Solution({ menuConfig }) {
  const [idx, setIdx] = useState(-1);

  function SubMenu({list,title}) {
    return <ul id={"ul-"+title}>
      {
        list.map((item)=>
        <li id={"li-"+title+"-"+item}>{item}</li>
        )
      }
    </ul>;
  }

  return (
    <div className="menu-wrapper">
      {menuConfig.map((item, index) => {
        if (item.subItem === undefined) return <div id={"first-level-"+item.title}> {item.title} </div>;
        else
          return (
            <div id={"first-level-"+item.title}>
              {item.title}
              <button
                id = {"button-"+item.title}
                onClick={() => (idx !== index ? setIdx(index) : setIdx(-1))}
              >
                {idx === index ? 'Hide' : 'Expand'}
              </button>
              {
                idx === index ? <SubMenu list={item.subItem} title={item.title}/> : null
              }
            </div>
          );
      })}
    </div>
  );
}
