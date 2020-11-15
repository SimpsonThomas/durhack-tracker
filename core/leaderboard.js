import styles from "../styles/course.module.css"

function Leaderboard(user) {
    let message;
    let x = Math.random()
    if (x < 0.5) {
        message = " You are on track! Keep going as you have been!"
    }
    else if (x<0.6) {
        message = " You could probably do with moving through the content a little faster"
    }
    else {
        message = " You are falling behind! Try finishing some more lectures and doing a few tests"
    }
    return (
        <div>
            <center>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alice</td>
                        <td>354</td>
                    </tr>
                    <tr>
                        <td>June</td>
                        <td>231</td>
                    </tr>
                    <tr>
                        <td>Bob</td>
                        <td>186</td>
                    </tr>
                </tbody>
                
            </table>
            <br/>
            <b> {user}</b>{message}
            </center>
        </div>
    )
}

export default Leaderboard