
import initialRender from "./core/initialRender";
import listener from "./core/listener";

class Shop {
    init(){
        console.log("Vite Shop Start!");
        
        initialRender();

        listener()
    }
}

export default Shop;