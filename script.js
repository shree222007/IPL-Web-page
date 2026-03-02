function showModal(type) {

    var title = "";
    var text = "";

    if(type === "ipl") {
        title = "Indian Premier League (IPL)";
        text = `
        <ul>
        <li>Founded in 2008 by BCCI.</li>
        <li>Professional Twenty20 cricket league.</li>
        <li>Franchise-based team structure.</li>
        <li>Introduced player auction system.</li>
        <li>Attracts top international players.</li>
        <li>Round-robin plus playoff format.</li>
        <li>Massive global viewership.</li>
        <li>Boosts young Indian talent.</li>
        <li>High commercial revenue.</li>
        <li>Modernized T20 cricket strategies.</li>
        <li>One of the richest cricket leagues globally.</li>
        </ul>
        `;
    }

    else if(type === "csk") {
        title = "Chennai Super Kings";
        text = `
        <ul>
        <li>Established in 2008.</li>
        <li>Represents Chennai, Tamil Nadu.</li>
        <li>Led by MS Dhoni.</li>
        <li>Multiple IPL championships.</li>
        <li>Home ground: M.A. Chidambaram Stadium.</li>
        <li>Strong and loyal fan base.</li>
        <li>Known for consistency.</li>
        <li>Iconic yellow jersey.</li>
        <li>Experienced squad structure.</li>
        <li>Frequent playoff appearances.</li>
        </ul>
        `;
    }

    else if(type === "mi") {
        title = "Mumbai Indians";
        text = `
        <ul>
        <li>Founded in 2008.</li>
        <li>Represents Mumbai.</li>
        <li>Owned by Reliance Industries.</li>
        <li>Multiple IPL titles.</li>
        <li>Home ground: Wankhede Stadium.</li>
        <li>Strong bowling attack.</li>
        <li>Balanced squad strategy.</li>
        <li>Develops young talent.</li>
        <li>Dominant IPL franchise.</li>
        <li>Consistent performance.</li>
        </ul>
        `;
    }

    else if(type === "rcb") {
        title = "Royal Challengers Bangalore";
        text = `
        <ul>
        <li>Established in 2008.</li>
        <li>Represents Bengaluru.</li>
        <li>Owned by United Spirits.</li>
        <li>Strong batting lineup.</li>
        <li>Home ground: M. Chinnaswamy Stadium.</li>
        <li>Passionate fan base.</li>
        <li>Multiple final appearances.</li>
        <li>Iconic red and black colors.</li>
        <li>Featured star international players.</li>
        <li>Highly popular franchise.</li>
        </ul>
        `;
    }

    else if(type === "dhoni") {
        title = "MS Dhoni";
        text = `
        <ul>
        <li>Born in Ranchi, Jharkhand.</li>
        <li>Former Indian captain.</li>
        <li>Won 2007 T20 World Cup.</li>
        <li>Won 2011 ODI World Cup.</li>
        <li>Captain of CSK.</li>
        <li>Known as 'Captain Cool'.</li>
        <li>Famous helicopter shot.</li>
        <li>Multiple IPL titles.</li>
        <li>Calm under pressure.</li>
        <li>Inspired millions of cricketers.</li>
        </ul>
        `;
    }

    else if(type === "kohli") {
        title = "Virat Kohli";
        text = `
        <ul>
        <li>Born in Delhi.</li>
        <li>Former RCB captain.</li>
        <li>One of the best modern batsmen.</li>
        <li>Multiple IPL run records.</li>
        <li>Orange Cap winner.</li>
        <li>Aggressive batting style.</li>
        <li>High fitness standards.</li>
        <li>Indian national team captain.</li>
        <li>Global cricket icon.</li>
        <li>Match-winning performances.</li>
        </ul>
        `;
    }

    else if(type === "rohit") {
        title = "Rohit Sharma";
        text = `
        <ul>
        <li>Born in Maharashtra.</li>
        <li>Captain of Mumbai Indians.</li>
        <li>Multiple IPL championships.</li>
        <li>Known as 'Hitman'.</li>
        <li>Elegant batting style.</li>
        <li>Multiple IPL centuries.</li>
        <li>Indian team captain.</li>
        <li>Strategic leader.</li>
        <li>Strong opening batsman.</li>
        <li>Key match performer.</li>
        </ul>
        `;
    }

    document.getElementById("modal-title").innerHTML = title;
    document.getElementById("modal-text").innerHTML = text;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}