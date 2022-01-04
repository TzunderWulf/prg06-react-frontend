import { useState } from "react"

import { CreateCharacter } from './CreateCharacter';
import { Characters } from "./Characters";

export function App() 
{
    return(
        <div>
            <div className="top-bar">
                <p>The Genshin Impact Character Archive</p>
                <CreateCharacter />
            </div>
            <Characters />
        </div>
    )
}