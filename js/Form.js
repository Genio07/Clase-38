class Form{
    contructor(){
        this.input = createInput("name")
        this.button = createButton('play');
        this.greeting = createElement('h2')
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("carrera de autos");
        title.position(250,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
    

        input.position(250,160);
        button.position(350,200);
        button.mousePressed(function(){
        input.hide;
        button.hide;
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hola"+player.name);
        this.greeting.position(300,160);
        });
        
        }
    }