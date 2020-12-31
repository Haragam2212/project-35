class Food {
    
    constructor() {
        

    }
    getFoodStock(){
        var foodStockRef = database.ref('foodStock');
        foodStockRef.on("value",(data)=>{
          foodStock = data.val();
        )}
      }
    
      updateFoodStock(stock){
        database.ref('/').update({
          foodStock: stock
        });

      display(){
       fill(255,255,254);
       textSize(15);
       if(lastFed>=12){
         text("Last feed : "+lastFed%12+ "PM",350,30)
       }else if(lastFed==0){
         text("lastFeed : 12 AM",350,30);
       }else{
         text("Last Fed : "+lastFed+"AM",350,30);
       }

      }
      }      
}