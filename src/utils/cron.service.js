const cron = require("node-cron");
const { db } = require("./db.service");

const { updateMonthlyAccessCounter } = require("../book/service/book.service");

module.exports = {
    setupCronJobs() {
        cron.schedule(
            "0 3 * * *",
            async () => {
                console.log(" [CRON] Atualizando estatísticas de acesso (Query Única)...");

                try {
                    updateMonthlyAccessCounter();

                    console.log(" [CRON] Estatísticas atualizadas com sucesso...");
                } catch (err) {
                    console.error(" [CRON] Erro na query de atualização:", err);
                }
            },
            {
                scheduled: true,
                timezone: "America/Sao_Paulo"
            }
        );
    }
};
