
const Button = ({ label = 'A label desse botão é: ', messageAlert }) => {
    const alertDoButton = () => {
        alert(label + messageAlert);
    };
    
    return (
        <>
            <button onClick={alertDoButton}>Conjurar Magia</button>
        </>
    )
};

export default Button;