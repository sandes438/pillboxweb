function startConnect(){

    clientID = "clientID - "+parseInt(Math.random() * 100);

    host = "test.mosquitto.org";   
    port = "8080";  
    userId  = "";  
    passwordId = "";  

    

    client = new Paho.MQTT.Client(host,Number(port),clientID);

    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    client.connect({
        onSuccess: onConnect
//        userName: userId,
 //       passwordId: passwordId
    });


}


function onConnect(){
    topic =  "t7stuhgh^^jbjs";

   

    client.subscribe(topic);
}



function onConnectionLost(responseObject){
    
}

function onMessageArrived(message){
    console.log("OnMessageArrived: "+message.payloadString);
}

function startDisconnect(){
    client.disconnect();




}

function publishMessage(){
msg = document.getElementById("timepicker").value + ":00";
topic = "pilldispenser";
localStorage.setItem("time", msg);

Message = new Paho.MQTT.Message(msg);
Message.destinationName = topic;


client.send(Message);
alert("You successfully set the time for dispensing pills")
document.getElementById("pilltime").innerText = "You set a time for dispensing pills at: " + msg;



}

