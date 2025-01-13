
$("#oneoffevent").change(function () {
    if ($(this).val() == "weekly") {
        $("#weeklyeventDiv").show();
        $("#oneoffeventDiv").hide();
    } else if ($(this).val() == "oneoffevent") {
        $("#oneoffeventDiv").show();
        $("#weeklyeventDiv").hide();
    }
});