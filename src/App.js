import { useState } from "react"

import { CreateCharacter } from "./CreateCharacter";
import { Characters } from "./Characters";

export function App() 
{
    return(
        <div>
            <div className="top-bar">
                <h1>The Genshin Impact Character Archive</h1>
                <CreateCharacter />
            </div>
            <Characters />
        </div>
    )
}