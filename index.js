function new_function()
{
        document.getElementById("text_id").style.fontSize="2em";
}
function newfunction2()
    if(document.getElementById("FancyShmancy_button").checked==true)
    {
        document.getElementById("text_id").style.fontWeight="bold";
        document.getElementById("text_id").style.textDecoration="underline";
        document.getElementById("text_id").style.color="blue";
    }
    if(document.getElementById("BoringBetty_button").checked==true)
    {
        document.getElementById("text_id").style.fontWeight="normal";
    }
}
function moo()
{
    var text = document.getElementById("text_id").value;
    var uppercase_text=text.toUpperCase();
    var split_text= uppercase_text.split(".");
    suffixed_text=split_text.join(" Moo");
    document.getElementById("text_id").value=suffixed_text;
}
