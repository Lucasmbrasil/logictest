import { useCreateTodo } from "../../Providers/Provider";
import { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  ContainerAnimation,
  StyledButton,
  StyledDialogTitle,
  StyledTypography,
} from "../Done/styled";

const Todo = ({ current }) => {
  const [deleteDone, setDeleteDone] = useState();
  const { addTodoList, deleteFavTodo } = useCreateTodo();
  return (
    <ContainerAnimation>
      {current}
      <div className="buttons">
        <ReplayIcon
          onClick={() => {
            addTodoList(current);
            deleteFavTodo(current);
          }}
        >
          Adicionar a lista feito
        </ReplayIcon>
        <DeleteIcon className="delete" onClick={() => setDeleteDone(true)} />
      </div>
      <Dialog
        onClose={() => setDeleteDone(false)}
        aria-labelledby="customized-dialog-title"
        open={deleteDone}
      >
        <StyledDialogTitle>Cuidado!</StyledDialogTitle>
        <DialogContent dividers>
          <StyledTypography gutterBottom>
            Você tem certeza que deseja excluir essa tarefa?
          </StyledTypography>
        </DialogContent>
        <DialogActions>
          <StyledButton
            autoFocus
            onClick={() => {
              setDeleteDone(false);
            }}
            color="primary"
          >
            Cancelar
          </StyledButton>
          <StyledButton
            autoFocus
            onClick={() => {
              deleteFavTodo(current);
              setDeleteDone(false);
            }}
            color="primary"
          >
            Confirmar
          </StyledButton>
        </DialogActions>
      </Dialog>
    </ContainerAnimation>
  );
};
export default Todo;
