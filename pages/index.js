import { useEffect, useState } from "react";

function Home() {
    const [dataHora, setDataHora] = useState("");

    useEffect(() => {
        function atualizarDataHora() {
            const agora = new Date();
            const data = agora.toLocaleDateString("pt-BR");
            const hora = agora.toLocaleTimeString("pt-BR");

            setDataHora(`Data: ${data} | Hora: ${hora}`);
        }

        atualizarDataHora();
        const intervalo = setInterval(atualizarDataHora, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div style={styles.container}>
            <table style={styles.table}>
                <thead style={styles.thead}>
                    <tr>
                        <th style={styles.th}>{dataHora}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.td}>
                            Esta é a mensagem exibida na linha inferior da tabela.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Home;