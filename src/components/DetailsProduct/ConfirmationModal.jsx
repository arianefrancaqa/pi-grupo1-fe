import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styleModal from './confirmationModal.module.css';

const style = {
    position: 'absolute',
    backgroung: '#ed6686',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ConfirmationModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className={`${style}`} onClick={handleOpen}>Teste Confirmation Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div class={styleModal.img}>
                        <img src="https://cdn-icons-png.flaticon.com/128/5299/5299035.png" alt="" />
                    </div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Muito Obrigado!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{
                        mt: 2,
                        color: '#2b2c2c'
                    }}>
                        Sua Reserva foi feita com sucesso
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}