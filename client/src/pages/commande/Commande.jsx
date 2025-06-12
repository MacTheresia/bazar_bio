import ShoppingScreen from "../../components/shopping/Shopping";
import CheckoutPage from "../../components/paiement/Paiement";

export default function CommandeScreen() {
    return (
        <div style={styles.mainStyle}>
            <div style={styles.leftColumn}>
                <ShoppingScreen />
            </div>
        </div>
    );
}

const styles = {
    mainStyle: {
        display: 'flex',
        flexWrap: 'wrap', // permet d’être responsive
        gap: '20px',
        justifyContent: 'center',
    },
    leftColumn: {
        flex: '1 1 300px',
        maxWidth: '600px',
    },
    rightColumn: {
        flex: '1 1 300px',
        maxWidth: '400px',
    },
};
