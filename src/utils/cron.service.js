const cron = require("node-cron");

const { updateMonthlyAccessCounter } = require("../book/service/book.service");

module.exports = {
    setupCronJobs() {
        cron.schedule(
            "0 3 * * *", // Uma vez por dia, às 3:00 AM (horário de menor acesso ao site)
            async () => {
                console.log(" [CRON] Atualizando estatísticas de acesso (Query Única)...");

                try {
                    await updateMonthlyAccessCounter();

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
