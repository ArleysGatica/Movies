import { DataProvider } from "./context/data/DataProvider";
import { UiProvider } from "./context/ui/UiProvider";
import { AppRouter } from "./router/AppRouter";

function App() {
    return (
        <DataProvider>
            <UiProvider>
                <AppRouter />
            </UiProvider>
        </DataProvider>

    );
}

export default App;