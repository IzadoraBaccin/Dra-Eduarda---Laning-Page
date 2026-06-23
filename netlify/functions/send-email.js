const nodemailer = require("nodemailer");

exports.handler = async (event) => {
    try {
    const { nome, email, mensagem } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        },
    });

    // Email para você
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Novo contato pelo site",
        html: `
        <h2>Novo contato recebido</h2>

        <p><strong>Nome:</strong> ${nome}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Mensagem:</strong></p>

        <p>${mensagem}</p>
        `,
    });

    // email automatico para quem preencheu o formulario
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Recebemos sua mensagem",
        html: `
        <h2>Olá, ${nome}!</h2>

        <p>Recebemos sua mensagem com sucesso.</p>

        <p>Em breve entraremos em contato.</p>

        <hr>

        <p><strong>Sua mensagem:</strong></p>

        <p>${mensagem}</p>

        <br>

        <p>Atenciosamente,</p>

        <p><strong>Dra. Eduarda Baccin da Luz</strong></p>
        `,
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
        message: "Email enviado com sucesso!",
        }),
    };
    } catch (error) {
    console.error(error);

    return {
        statusCode: 500,
        body: JSON.stringify({
        message: "Erro ao enviar email",
        }),
    };
    }
};