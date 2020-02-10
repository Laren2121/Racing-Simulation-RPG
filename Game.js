const GameState = Object.freeze({
    END:Symbol("end"),
    START: Symbol("start"),
    PET: Symbol("petrol"),
    UP: Symbol("up"),
    DOWN: Symbol("down"),
    LEFT: Symbol("left"),
    RIGHT: Symbol("right"),
    NITRO: Symbol("nitro"),
    BREAKS: Symbol("breaks"),
    RUSH: Symbol("rush"),
    RACE: Symbol("race"),
    HIDE: Symbol("hide")

});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = ["Hey User, I am Samantha. This game is Hot wheels","Do you wanna Drive the car?","Make your choice by typing start or end"];
                // if(sInput.toLowerCase().match("end"))
                    this.stateCur = GameState.END;
                    break;
                
             case GameState.END:
                if(sInput.toLowerCase().match("end")){
                    sReply += "GAMEOVER"
                    this.stateCur = GameState.WELCOMING;
                }
                else if(sInput.toLowerCase().match("start")){
                    sReply+="Lets Start the Game then. Type 'up' to go forward.";
                    this.stateCur = GameState.UP;
                    
                }else{
                    sReply +="Enter the relevant character";
                }
                break;
                
                case GameState.UP:
                    if(sInput.toLowerCase().match("up")){
                        sReply += "Accelerating (gear 1) 20, 40, 80. (gear 2) 70, 100, 140... REVVVVVVV, Do you wanna use Nitro? Type 'nitro' to speed up or type 'up'"
                        this.stateCur = GameState.NITRO;
                    }
                    else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                case GameState.NITRO:
                    if(sInput.toLowerCase().match("nitro")){
                        sReply += "180, 220, 260, 320, 350 ..........infinity...... do you wanna turn left or go straight?..... type 'left' to go left or type 'up' to go straight"
                        this.stateCur = GameState.LEFT;
                    }
                    else if(sInput.toLowerCase().match("up")){
                        sReply+="150 going forward without any increase in speed... i see a right sign in the board. Type 'right' to go right or type 'up' to go forward";
                        this.stateCur = GameState.RIGHT;
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                case GameState.LEFT:
                    if(sInput.toLowerCase().match("left")){
                        sReply += "The car goes left..... I see a cat... OMG i need to stop! Puts on Breaks the car hits the tree....(the guy survived)    .......GAME OVER"
                        this.stateCur = GameState.END;
                    }
                    else if(sInput.toLowerCase().match("right")){
                        sReply+="Turns right... i see a right sign in the board. Type 'right' to go right or type 'up' to go forward";
                        this.stateCur = GameState.RIGHT;
                        
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                case GameState.RIGHT:
                    if(sInput.toLowerCase().match("right")){
                        sReply += "You drive the car and the car seems to run out of gas, type 'petrol' to go the a gas station"
                        this.stateCur = GameState.PET;
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;
                
                case GameState.PET:
                    if(sInput.toLowerCase().match("petrol")){
                        sReply += "As you go through your way you see a gas station.. do you wanna rush or go slowly? type 'rush' to accelerate"
                        this.stateCur = GameState.RUSH;
                    }
                    else{
                        this.stateCur = GameState.SLOW;
                        sReply +="Enter the relevant character";
                    }
                    break;
                
                    
                case GameState.RUSH:
                    if(sInput.toLowerCase().match("rush")){
                        sReply += "The car rushes.... OHH NOOO POlice chasing me... Should i use nitro??? type 'nitro'"
                        this.stateCur = GameState.NITRO;
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                
                case GameState.NITRO:
                    if(sInput.toLowerCase().match("nitro")){
                        sReply += "The car is super fast.... 200, 240, 260, 270, 280, 285, 290, 291....... type 'race' to challenge the police and hide"
                        this.stateCur = GameState.RACE;
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                case GameState.RACE:
                    if(sInput.toLowerCase().match("race")){
                        sReply += "Constant speed... Drilling through the road! type right to go to the opposite direction"
                        this.stateCur = GameState.RIGHT;
                    }else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                case GameState.RIGHT:
                        if(sInput.toLowerCase().match("right")){
                            sReply += "The opposite lane is challenging.. if i drive ill crash.. Ill race on the left lane. type 'race' to race in left lane"
                            this.stateCur = GameState.RACE;
                        }else{
                            sReply +="Enter the relevant character";
                        }
                    break;



                
                case GameState.RACE:
                    if(sInput.toLowerCase().match("race")){
                        sReply += "Interestingly the car performs pretty fine.. but its running out of gas... I should hide somewhere... the car goes to a field.... it rushes to a ship port.. It finds a shelter.... should i hide in the shelter? type 'hide' or type 'ride'"
                        this.stateCur = GameState.HIDE;
                    }
                    else{
                        sReply +="Enter the relevant character";
                    }
                    break;

                
                case GameState.HIDE:
                    if(sInput.toLowerCase().match("hide")){
                        sReply += "Wowwwww! the police cars ain't behind... and yesss.. i find a shelter.. They wont find me...................YOUUU WINNN "
                        this.stateCur = GameState.RACE;
                    }
                    else if(sInput.toLowerCase().match("ride")){
                        sReply += "You got caught.... GAME OVER"
                    }
                    else{
                        sReply +="Enter the relevant character";
                    }
                    break;
        }
        return([sReply]);
    }
}