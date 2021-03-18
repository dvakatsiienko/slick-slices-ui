/* Core */
const nodemailer = require('nodemailer');
const waait = require('waait');

const { MAIL_HOST, MAIL_USER, MAIL_PASSWORD } = process.env;

const mailConfig = {
    host: MAIL_HOST,
    port: 587,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(mailConfig);

module.exports = async (req, res) => {
    await waait(2000);

    const { body } = req;

    const requiredFields = [ 'email', 'name', 'order' ];

    if (body.mapleSyrup) {
        return res
            .status(400)
            .json({ message: 'Boop beep bop zzzzstt good bye' });
    }

    for (const field of requiredFields) {
        if (!body[ field ]) {
            const message = `Oops! You are missing the ${field} field.`;

            return res.status(400).json({ message });
        }

        if (field === 'order' && !body.order.length) {
            const message = 'Why would you order nothing?!';

            return res.status(400).json({ message });
        }
    }

    try {
        await transporter.sendMail({
            from:    'Slick\'s Slices <slick@example.com>',
            to:      `${body.name} <${body.email}>, orders@example.com`,
            subject: 'New order!',
            html:    generateOrderEmail({ order: body.order, total: body.total }),
        });
    } catch (error) {
        return res.status(500).json({
            message: `Nodemailer failed: ${error.message}. :(`,
        });
    }

    return res.status(200).json({ message: 'Success' });
};

/* Helpers */
function generateOrderEmail(options) {
    const orderItemsList = options.order
        .map(orderItem => {
            const { thumbnail, name, size } = orderItem;

            return `
                <li>
                    <img src="${thumbnail}" alt="${name}" />
                    ${size} ${name} - ${size}
                </li>
            `;
        })
        .join('');

    return `
        <div>
            <h2>Your Recent Order for ${options.total}</h2>

            <p>Please start walking over, we will have your order ready in the next 20 mins.</p>

            <ul>${orderItemsList}</ul>

            <p>Your total is <strong>$${options.total}</strong> due at pickup</p>

            <style>
                ul {
                    list-style: none;
                }
            </style>
        </div>
    `;
}
