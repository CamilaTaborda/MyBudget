import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

export const DataTable = ({data}) => {
    return <React.Fragment>
        <Typography variant="headline" component="h2">Add New</Typography>
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Despesas</TableCell>
                    <TableCell>Receitas</TableCell>
                    <TableCell>Origem</TableCell>
                    <TableCell>Saldo</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow Id={index}>
                            <TableCell>{item.Id}</TableCell>
                            <TableCell>
                                {item.Despesas}
                            </TableCell>
                            <TableCell>{item.Receitas}</TableCell>
                            <TableCell>{item.Origem}</TableCell>
                            <TableCell>{item.saldo}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};