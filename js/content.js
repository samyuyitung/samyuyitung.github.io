function getProjectBio(project) {

    var content = "<p class='project-bio'>";
    switch (project) {
    case "asciiquarium":
        content += "Inspired by the perl script <a href='http://www.robobunny.com/projects/asciiquarium/html/' target='_blank'>asciiquarium</a>, a similar experience was created for your browser or mobile device via a responsive web app!<br> Built with React.js. <br><br><a href='http://samyuyitung.com/asciiquarium 'target='_blank'>check it out!</a><br><a href='http://github.com/samyuyitung/asciiquarium' target='_blank'>github</a>";
        break;
    case "onekickturtle":
        content += "Defeat them all! In this game play as a turtle who has to fend off all the enemies and survive as long as you can. This game also makes use of an arduino to create an external controller for the game.<br>Built with an Arduino and Processing, selected as 3rd place at THacks 2016<br><br><a href='http://github.com/samyuyitung/onekickturtle' target='_blank'>github</a>";
        break;
    case "bop-it":
        content += "Test your reaction time head to head! The rules to the game are simple: when a led lights up, press the corresponding button. The fastest person wins!  Powered by a single arduino, a bunch of buttons and a whole lot of wires.<br><br><a href='http://github.com/samyuyitung/bop-it' target='_blank'>github</a>";
        break;
    case "foosbot":
        content += "At CIBC Live Labs, we played a lot of foosball and there was constant conversation about who was the best. To solve this, I built a slack bot to track users on a elo ladder to definitivly show everyones rank within the office. Other features include challenging a co-worker to a game via a single slack message. You can either call someone out specifically or it will randomly select some one.<br> Built with Node.js and firebase.<br><br><a href='http://github.com/samyuyitung/foosball-ladder' target='_blank'>github</a>";
        break;
    case "ask6god":
        content += "Ever wanted to get advice from the Toronto's very own 6God personally? We created an app for that&trade;. Powered by <a href='https://www.indico.io/' target='_blank'>Indico.io</a>'s machine learning API, this service generates relevant metadata about any question that you ask Drake, and we then serve the user with a relevant lyric as advice. <br>Built with Android and parse <br><br><a href='http://github.com/samyuyitung/askthe6god' target='_blank'>github</a><br><a href='https://play.google.com/store/apps/details?id=anojenjeyapalan.asksixgod' target='_blank'>download</a>";
        break;
    case "trakrecord":
        content += "One of the main issues with GPS based sport trackers is their inaccuracy. To improve the accuracy, we used <a href='http://estimote.com/' target='_blank' >Estimote</a> Bluetooth LE beacons to better track users. Specifically designed for an organized race, users can receive ultra-accurate split readings as they pass by a beacon. Post race, further analysis of runs are complete to show split times, speed and elevation.<br>Built with Android, firebase and estimote beacons. Selected as winner at Wearhacks Toronto 2016<br><br><a href='http://github.com/samyuyitung/trakrecord' target='_blank'>github</a>";
    }

    return content + "</p>"
}