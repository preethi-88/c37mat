class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(30)
    text('GAME START',120,100)
    Player.getplayerinfo()
    if(allplayers!==undefined){
      var display_pos = 130;
      for(var plr in allplayers){
        if(plr==="player"+player.index){
        fill("red")
        }
        else{
        fill("black")
        }
        display_pos+=30
        textSize(15)
        text(allplayers[plr].name+ ":"+allplayers[plr].distance,120,display_pos)
      }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50
      player.update()
    }
  }
}
