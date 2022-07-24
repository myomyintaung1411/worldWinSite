export default {
    _currentDate() {
        var time_ = ""
        var date = new Date();
        var ampm = date.getHours() >= 12 ? " PM" : " AM";
        var hours = date.getHours() % 12;
        hours = hours ? hours : 12;
        hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;

        var minutes = date.getMinutes().toString();
        minutes = minutes.length == 1 ? 0 + minutes : minutes;

        var seconds = date.getSeconds().toString();
        seconds = seconds.length == 1 ? 0 + seconds : seconds;

        var month = (date.getMonth() + 1).toString();
        month = month.length == 1 ? 0 + month : month;

        var dt = date.getDate().toString();
        dt = dt.length == 1 ? 0 + dt : dt;

        var fullyear = month + "-" + dt + "-" + date.getFullYear();
        fullyear =
            fullyear + " - " + hours + ":" + minutes + ":" + seconds + " " + ampm;

        time_ = fullyear;
        return time_
    }
}