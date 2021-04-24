import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./styles";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import ModifyOrder from "./ModifyOrder";

const ListItems = ({ rows, columns }) => {
  const classes = useStyles();
  const ROWS_PER_PAGE = 10;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE);

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [activeId, setActiveId] = useState("");

  const handleOpen = (productId) => {
    setOpen(true);
    setActiveId(productId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const RenderList = !rows ? (
    <CircularProgress color="primary" />
  ) : (
    rows.map((row) => {
      return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
          {columns.map((column) => {
            const value = row[column.id];
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === "number"
                  ? column.format(value)
                  : value}
                {column.id === "edit_order" ? (
                  <Button
                    endIcon={<EditIcon />}
                    variant="outlined"
                    size="small"
                    onClick={() => handleOpen(row.product_id)}
                    className={classes.button}
                  >
                    Order details
                  </Button>
                ) : null}
                {
                  <Modal open={open} onClose={handleClose}>
                    <div style={modalStyle} className={classes.modalPaper}>
                      {" "}
                      <ModifyOrder productId={activeId} />
                      <Button variant="outlined" onClick={handleClose}>
                        Cancel
                      </Button>
                    </div>
                  </Modal>
                }
              </TableCell>
            );
          })}
        </TableRow>
      );
    })
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{RenderList}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows ? rows.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default ListItems;
