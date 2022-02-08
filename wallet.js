//Cüzdan bağlantısı ile güvenli giriş yöntemi
const connectWallet = async () => {
    try {
        const { ethereum } = window;

        if (!ethereum) {
            alert("Get MetaMask!");
            return;
        }

        const accounts = await ethereum.request ({
            method: "eth_requestAccounts",
        });
        console.log("Connected", accounts[0]);
        setUserETHAccount(accounts[0]);
    }   catch (error) {
        console.log(error);
    }
};