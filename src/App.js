import { Characters } from "./Characters";
import { CreateCharacter } from "./CreateCharacter";

export function App() {
    return (
        <div className="app">
            <h1 className="title">The Genshin Impact Character Archive</h1>
            <CreateCharacter />
            <Characters />
        </div>
    );
}