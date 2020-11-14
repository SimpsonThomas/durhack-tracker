import styles from "../styles/course.module.css"

function Leaderboard() {
    let message;
    if (Math.random < 0.8) {
        message = "You are on track!"
    }
    else {
        message = "You are falling behind!"
    }
    return (
        <div>
            
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
            {message}
        </div>
    )
}

export default Leaderboard