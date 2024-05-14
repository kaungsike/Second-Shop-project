
import initialRender from "./core/initialRender";
import listener from "./core/listener";
import observer from "./core/observer";

class Shop {
    init(){
        console.log("Vite Shop Start!");
        
        initialRender();

        listener();

        observer()
    }
}

export default Shop;