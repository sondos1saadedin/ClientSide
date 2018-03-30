import * as React from 'react';
import {
    SortingState, EditingState, PagingState,
    IntegratedPaging, IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table, TableHeaderRow, TableEditRow, TableEditColumn,
    PagingPanel, DragDropProvider, TableColumnReordering,
    SearchPanel,Toolbar
} from '@devexpress/dx-react-grid-material-ui';
import Paper from 'material-ui/Paper';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';
import {TableCell} from 'material-ui/Table';

import DeleteIcon from 'material-ui-icons/Delete';
import EditIcon from 'material-ui-icons/Edit';
import SaveIcon from 'material-ui-icons/Save';
import CancelIcon from 'material-ui-icons/Cancel';
import {withStyles} from 'material-ui/styles';

import {ProgressBarCell} from '../theme-sources/bootstrap4/components/progress-bar-cell';
import {HighlightedCell} from '../theme-sources/bootstrap4/components/highlighted-cell';
import {CurrencyTypeProvider} from '../theme-sources/bootstrap4/components/currency-type-provider';
import {PercentTypeProvider} from '../theme-sources/bootstrap4/components/percent-type-provider';


import {
    SearchState,
    IntegratedFiltering,
} from '@devexpress/dx-react-grid';

const styles = theme => ({
    lookupEditCell: {
        paddingTop: theme.spacing.unit * 0.875,
        paddingRight: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
    },
    dialog: {
        width: 'calc(100% - 16px)',
    },
    inputRoot: {
        width: '100%',
    },
});

const AddButton = ({onExecute}) => (
    <div style={{textAlign: 'center'}}>
        <Button
            color="primary"
            onClick={onExecute}
            title="Create new row"
        >
            New
        </Button>
    </div>
);

const EditButton = ({onExecute}) => (
    <IconButton onClick={onExecute} title="Edit row">
        <EditIcon />
    </IconButton>
);

const DeleteButton = ({onExecute}) => (
    <IconButton onClick={onExecute} title="Delete row">
        <DeleteIcon />
    </IconButton>
);

const CommitButton = ({onExecute}) => (
    <IconButton onClick={onExecute} title="Save changes">
        <SaveIcon />
    </IconButton>
);

const CancelButton = ({onExecute}) => (
    <IconButton color="secondary" onClick={onExecute} title="Cancel changes">
        <CancelIcon />
    </IconButton>
);

const commandComponents = {
    add: AddButton,
    edit: EditButton,
    delete: DeleteButton,
    commit: CommitButton,
    cancel: CancelButton,
};

const Command = ({id, onExecute}) => {
    const CommandButton = commandComponents[id];
    return (
        <CommandButton
            onExecute={onExecute}
        />
    );
};

const availableValues = {
    action: ["Click Link", "Press Button", "Make a Scenario"],
    subAction: ["Click Link", "Press Button", "Make a Scenario"],
    ID: ["Click Link", "Press Button", "Make a Scenario"],
};

const LookupEditCellBase = ({
                                availableColumnValues, value, onValueChange, classes,
                            }) => (
    <TableCell
        className={classes.lookupEditCell}
    >
        <Select
            value={value}
            onChange={event => onValueChange(event.target.value)}
            input={
                <Input
                    classes={{root: classes.inputRoot}}
                />
            }
        >
            {availableColumnValues.map(item => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
            ))}
        </Select>
    </TableCell>
);
export const LookupEditCell = withStyles(styles, {name: 'ControlledModeDemo'})(LookupEditCellBase);

const Cell = (props) => {
    return <Table.Cell {...props} />;
};

const EditCell = (props) => {
    const availableColumnValues = availableValues[props.column.name];
    if (availableColumnValues) {
        return <LookupEditCell {...props} availableColumnValues={availableColumnValues}/>;
    }
    return <TableEditRow.Cell {...props} />;
};

const getRowId = row => row.id;

class DemoBase extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            columns: [
                {name: 'action', title: 'Action'},
                {name: 'subAction', title: 'Sub Action'},
                {name: 'name', title: 'Name'},
                {name: 'value', title: 'Value'},
                {name: 'description', title: 'Description'},
                {name: 'ID', title: 'ID'},
            ],
            tableColumnExtensions: [

            ],
            rows: [
                {action: availableValues.action[0], subAction: availableValues.subAction[0], name: "C", value: "D", description: "E", ID: availableValues.ID[0]}
            ],
            sorting: [],
            editingRowIds: [],
            addedRows: [],
            rowChanges: {},
            currentPage: 0,
            deletingRows: [],
            pageSize: 0,
            pageSizes: [5, 10, 0],
            columnOrder: ['action', 'subAction', 'name', 'value', 'description', 'ID'],
            currencyColumns: [],
            percentColumns: [],
        };

        this.changeSorting = sorting => this.setState({sorting});
        this.changeEditingRowIds = editingRowIds => this.setState({editingRowIds});
        this.changeAddedRows = addedRows => this.setState({
            addedRows: addedRows.map(row => (Object.keys(row).length ? row : {
                name: 0,
                value: 0,
                description: 0,
                action: availableValues.action[0],
                subAction: availableValues.subAction[0],
                ID: availableValues.ID[0],
            })),
        });
        this.changeRowChanges = rowChanges => this.setState({rowChanges});
        this.changeCurrentPage = currentPage => this.setState({currentPage});
        this.changePageSize = pageSize => this.setState({pageSize});
        this.commitChanges = ({added, changed, deleted}) => {
            let {rows} = this.state;
            if (added) {
                const startingAddedId = (rows.length - 1) > 0 ? rows[rows.length - 1].id + 1 : 0;
                rows = [
                    ...rows,
                    ...added.map((row, index) => ({
                        id: startingAddedId + index,
                        ...row,
                    })),
                ];
            }
            if (changed) {
                rows = rows.map(row => (changed[row.id] ? {...row, ...changed[row.id]} : row));
            }
            this.setState({rows, deletingRows: deleted || this.state.deletingRows});
        };
        this.cancelDelete = () => this.setState({deletingRows: []});
        this.deleteRows = () => {
            const rows = this.state.rows.slice();
            this.state.deletingRows.forEach((rowId) => {
                const index = rows.findIndex(row => row.id === rowId);
                if (index > -1) {
                    rows.splice(index, 1);
                }
            });
            this.setState({rows, deletingRows: []});
        };
        this.changeColumnOrder = (order) => {
            this.setState({columnOrder: order});
        };
    }

    render() {
        const {
            classes,
        } = this.props;
        const {
            rows,
            columns,
            tableColumnExtensions,
            sorting,
            editingRowIds,
            addedRows,
            rowChanges,
            currentPage,
            deletingRows,
            pageSize,
            pageSizes,
            columnOrder,
            currencyColumns,
            percentColumns,
        } = this.state;

        return (
            <Paper>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <SearchState defaultValue="" />
                    <IntegratedFiltering />

                    <SortingState
                        sorting={sorting}
                        onSortingChange={this.changeSorting}
                    />
                    <PagingState
                        currentPage={currentPage}
                        onCurrentPageChange={this.changeCurrentPage}
                        pageSize={pageSize}
                        onPageSizeChange={this.changePageSize}
                    />


                    <IntegratedSorting />
                    <IntegratedPaging />

                    <CurrencyTypeProvider for={currencyColumns}/>
                    <PercentTypeProvider for={percentColumns}/>

                    <EditingState
                        editingRowIds={editingRowIds}
                        onEditingRowIdsChange={this.changeEditingRowIds}
                        rowChanges={rowChanges}
                        onRowChangesChange={this.changeRowChanges}
                        addedRows={addedRows}
                        onAddedRowsChange={this.changeAddedRows}
                        onCommitChanges={this.commitChanges}
                    />

                    <DragDropProvider />

                    <Table
                        columnExtensions={tableColumnExtensions}
                        cellComponent={Cell}
                    />

                    <TableColumnReordering
                        order={columnOrder}
                        onOrderChange={this.changeColumnOrder}
                    />

                    <TableHeaderRow showSortingControls/>
                    <TableEditRow
                        cellComponent={EditCell}
                    />
                    <TableEditColumn
                        width={120}
                        showAddCommand={!addedRows.length}
                        showEditCommand
                        showDeleteCommand
                        commandComponent={Command}
                    />
                    <PagingPanel
                        pageSizes={pageSizes}
                    />
                    <Toolbar />
                    <SearchPanel />
                </Grid>

                <Dialog
                    open={!!deletingRows.length}
                    onClose={this.cancelDelete}
                    classes={{paper: classes.dialog}}
                >
                    <DialogTitle>Delete Row</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure to delete the following row?
                        </DialogContentText>
                        <Paper>
                            <Grid
                                rows={rows.filter(row => deletingRows.indexOf(row.id) > -1)}
                                columns={columns}
                            >
                                <Table
                                    columnExtensions={tableColumnExtensions}
                                    cellComponent={Cell}
                                />
                                <TableHeaderRow />
                            </Grid>
                        </Paper>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.cancelDelete} color="primary">Cancel</Button>
                        <Button onClick={this.deleteRows} color="secondary">Delete</Button>
                    </DialogActions>
                </Dialog>


                <IconButton  title="Save Scenario">
                    <SaveIcon />
                </IconButton>
            </Paper>
        );
    }
}

export default withStyles(styles, {name: 'ControlledModeDemo'})(DemoBase);