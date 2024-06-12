import { Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Typography } from "@mui/material"
import teamsData from "../../data/teamsData"

const tableData = JSON.parse(JSON.stringify(teamsData))

export function Groups() {
    return <>
        <Box mx={2}>
            <br />
            <Typography variant='h5'>Group Table</Typography>
            <br />
            <TableContainer component={Paper}>
                <Table aria-label='points table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell>Played</TableCell>
                            <TableCell>Won</TableCell>
                            <TableCell>Lost</TableCell>
                            <TableCell>Drawn</TableCell>
                            <TableCell>Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((row, i) => (
                                <TableRow 
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{i}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.matches}</TableCell>
                                    <TableCell>{row.won}</TableCell>
                                    <TableCell>{row.lost}</TableCell>
                                    <TableCell>{row.drawn}</TableCell>
                                    <TableCell>{row.won * 2 + row.drawn}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    </>
}