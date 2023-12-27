
function checkConditions(day,subject,shift) {


    var result=
        day === "monday" ?
            subject === "physics" ?
                shift === "first" ? "We will study kinematics" : "Today we will study dynamics"
            : subject === "chemistry" ?
                shift === "first" ? "We will study chemical formulae" : "We will study atomic number"
            : subject === "maths" ?
                shift === "first" ? "We will practice algebra" : "We will do word problems"
                :"invalid subject"
        : day === "tuesday" ?
            subject === "physics" ?
                shift === "first" ? "We will study static" : "Today we will study torque"
            : subject === "chemistry" ?
                shift === "first" ? "We will study transition metals" : "We will study electronic effects"
            : subject === "maths" ?
                shift === "first" ? "We will practice trigonometry" : "We will do calculus"
                :"invalid subject"
        : day === "wednesday" ?
            subject === "physics" ?
                shift === "first" ? "We will study gravity" : "Today we will study circular motion"
            : subject === "chemistry" ?
                shift === "first" ? "We will study nanomaterials" : "We will study biochemistry"
            : subject === "maths" ?
                shift === "first" ? "We will practice statistics" : "We will do probability"
                :"invalid subject"
        : "Today is a holiday"
      
        console.log(result)
}

checkConditions(process.argv[2],process.argv[3],process.argv[4]);


function checkconditionssc(day, subject, shift) {
    var result;
    switch (day) {
        case "monday":
            switch (subject) {
                case "physics":
                    switch (shift) {
                        case "first":
                            result = "We will study kinematics";
                            break;
                        case "second":
                            result = "We will study dynamics";
                            break;
                    }
                    break;
                case "chemistry":
                    switch (shift) {
                        case "first":
                            result = "We will study transition metal";
                            break;
                        case "second":
                            result = "We will study electronic effects";
                            break;
                    }
                    break;
                default:
                    result = "Invalid subject";
                    break;
            }
            break;

        case "tuesday":
            switch (subject) {
                case "physics":
                    switch (shift) {
                        case "first":
                            result = "We will study static";
                            break;
                        case "second":
                            result = "We will study torque";
                            break;
                    }
                    break;
                case "chemistry":
                    switch (shift) {
                        case "first":
                            result = "We will study chemical formulae";
                            break;
                        case "second":
                            result = "We will conduct an experiment in the chemistry lab";
                            break;
                    }
                    break;
                default:
                    result = "Invalid subject";
                    break;
            }
            break;

        case "wednesday":
            switch (subject) {
                case "physics":
                    switch (shift) {
                        case "first":
                            result = "We will study gravity";
                            break;
                        case "second":
                            result = "We will study Circular motion";
                            break;
                    }
                    break;
                case "chemistry":
                    switch (shift) {
                        case "first":
                            result = "We will study nanomaterials";
                            break;
                        case "second":
                            result = "We will conduct an experiment in the chemistry lab";
                            break;
                    }
                    break;
                default:
                    result = "Invalid subject";
                    break;
            }
            break;

        default:
            result = "Today is a holiday";
            break;
    }
    console.log(result);
}

checkconditionssc("tuesday", "physics", "second");
