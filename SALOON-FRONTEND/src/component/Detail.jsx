import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    Button,
    Modal,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Box,
    TextField,
    CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

function Dashboard() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [details, setDetails] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [newDetail, setNewDetail] = useState({
        id: null,
        hairstyleDesign: "",
        nailsTreatment: "",
        upcomingAppointment: "",
        banningStyle: "",
        phoneNumber: "",
    });
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setNewDetail({
            id: null,
            hairstyleDesign: "",
            nailsTreatment: "",
            upcomingAppointment: "",
            banningStyle: "",
            phoneNumber: "",
        });
        setEditMode(false);
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const fetchDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:8080/api/details");
            setDetails(response.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error("Error fetching details:", error);
            setLoading(false);
            setError("Failed to fetch details. Please try again.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDetail({
            ...newDetail,
            [name]: value,
        });
    };

    const addDetail = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/details", newDetail);
            console.log("New detail added:", response.data);
            closeModal();
            fetchDetails();
        } catch (error) {
            console.error("Error adding new detail:", error);
            setError("Failed to add new detail. Please try again.");
        }
    };

    const updateDetail = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/details/${newDetail.id}`, newDetail);
            console.log("Detail updated:", response.data);
            closeModal();
            fetchDetails();
        } catch (error) {
            console.error("Error updating detail:", error);
            setError("Failed to update detail. Please try again.");
        }
    };

    const handleSubmit = () => {
        if (editMode) {
            updateDetail();
        } else {
            addDetail();
        }
    };

    const handleEdit = (detail) => {
        setNewDetail({
            id: detail.id,
            hairstyleDesign: detail.hairstyleDesign,
            nailsTreatment: detail.nailsTreatment,
            upcomingAppointment: detail.upcomingAppointment,
            banningStyle: detail.banningStyle,
            phoneNumber: detail.phoneNumber,
        });
        setEditMode(true);
        setModalOpen(true);
    };

    const deleteDetail = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/details/${id}`);
            console.log("Detail deleted:", response.data);
            fetchDetails();
        } catch (error) {
            console.error("Error deleting detail:", error);
            setError("Failed to delete detail. Please try again.");
        }
    };

    return (
        <>
            <AppBar style={{ backgroundColor: "brown" }} position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <List>
                        <ListItem button component="a" href="/dashboard">
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component="a" href="/details">
                            <ListItemText primary="Details" />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>

            <Box p={3}>
                <Button variant="contained" color="primary" onClick={openModal}>
                    Add New Detail
                </Button>
            </Box>

            <Modal open={modalOpen} onClose={closeModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        {editMode ? "Edit Detail" : "Add New Detail"}
                    </Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Hairstyle Design"
                        name="hairstyleDesign"
                        value={newDetail.hairstyleDesign}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Nails Treatment"
                        name="nailsTreatment"
                        value={newDetail.nailsTreatment}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Upcoming Appointment"
                        name="upcomingAppointment"
                        value={newDetail.upcomingAppointment}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Banning Style"
                        name="banningStyle"
                        value={newDetail.banningStyle}
                        onChange={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Phone Number"
                        name="phoneNumber"
                        value={newDetail.phoneNumber}
                        onChange={handleInputChange}
                    />
                    <Box mt={2}>
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            {editMode ? "Save Changes" : "Add Detail"}
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={closeModal}
                            style={{ marginLeft: 10 }}
                        >
                            Cancel
                        </Button>
                    </Box>
                </Box>
            </Modal>

            <Box p={3}>
                {loading ? (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" align="center">
                        {error}
                    </Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Hairstyle Design</TableCell>
                                    <TableCell>Nails Treatment</TableCell>
                                    <TableCell>Upcoming Appointment</TableCell>
                                    <TableCell>Banning Style</TableCell>
                                    <TableCell>Phone Number</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {details.map((detail) => (
                                    <TableRow key={detail.id}>
                                        <TableCell>{detail.hairstyleDesign}</TableCell>
                                        <TableCell>{detail.nailsTreatment}</TableCell>
                                        <TableCell>{detail.upcomingAppointment}</TableCell>
                                        <TableCell>{detail.banningStyle}</TableCell>
                                        <TableCell>{detail.phoneNumber}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                onClick={() => handleEdit(detail)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={() => deleteDetail(detail.id)}
                                                style={{ marginLeft: 10 }}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </>
    );
}

export default Dashboard;
