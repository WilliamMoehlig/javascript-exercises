//export module to make it public
module.exports = {
    sum: function(value1, value2){
            //parseInt always needs 10 behind the value to avoid issues
            return parseInt(value1,10) + Number(value2);
    }
}