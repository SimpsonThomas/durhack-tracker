import styles from "../styles/course.module.css"

function Leaderboard() {
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
                </tbody>
                
            </table>
        </div>
    )
}

export default Leaderboard