import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    boxa: {
      width: "100px",
      height: "10px",
      backgroundColor: "#DB2BBB",
    },
    tab: {
      backgroundColor: "black",
    },
    textfield: {
      width: "350px",
      marginBottom: "20px",
    },
    signbox: {
      width: "173px",
      height: "36px",
      gap: "10px",
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: "5px",
      marginBottom: "40px",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    },
    imglogo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    btn: {
      width: "72.53px",
      height: "25.5px",
      fontSize: "16px",
      textTransform: "none",
      textAlign: "start",
      backgroundColor: "#DB2BBB",
      fontSize: "16px",
      textTransform: "none",
    },
    border: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
    },
    bottomborder: {
      width: "105px",
      borderBottom: "1px solid #A39797",
    },
    socialmedia: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  export default useStyles;