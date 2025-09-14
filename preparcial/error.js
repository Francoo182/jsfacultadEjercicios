class ErrorGenerico extends Error(){
    constructor(message,numError){
        super(message);
        this.numError=400;
    }
}
module.exports = ErrorGenerico;