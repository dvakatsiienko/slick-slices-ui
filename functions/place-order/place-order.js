/* Core */
const nodemailer = require('nodemailer');

const { MAIL_HOST, MAIL_USER, MAIL_PASSWORD } = process.env;

// const mailConfig = {
//     host: MAIL_HOST,
//     port: 587,
//     auth: {
//         user: MAIL_USER,
//         pass: MAIL_PASSWORD,
//     },
// };
const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'ramona92@ethereal.email',
        pass: 'xAt8ACr84YPBxyJSc3',
    },
    secure: true,
};

const transporter = nodemailer.createTransport(mailConfig);

exports.handler = async (event, context) => {
    const body = JSON.parse(event.body, null, 4);
    const requiredFields = [ 'email', 'name', 'order' ];

    if (body.mapleSyrup) {
        return {
            statusCode: 400,
            body:       JSON.stringify({ message: 'Boop beep bop zzzzstt good bye' }),
        };
    }

    for (const field of requiredFields) {
        if (!body[ field ]) {
            let message = `Oops! You are missing the ${field} field.`;

            if (field === 'order' && !body.order.length) {
                message = 'Why would you order nothing?!';
            }

            return {
                statusCode: 400,
                body:       JSON.stringify({ message }),
            };
        }
    }

    let info = null;

    info = await transporter.sendMail({
        from:    'Slick\'s Slices <slick@example.com>',
        // to:      `${body.name} <${body.email}>, orders@example.com`,
        to:      'orders@example.com',
        subject: 'New order!',
        html:    '<h1>hello</h1>',
        // html:    generateOrderEmail({ order: body.order, total: body.total }),
    });

    try {
        info = await transporter.sendMail({
            from:    'Slick\'s Slices <slick@example.com>',
            // to:      `${body.name} <${body.email}>, orders@example.com`,
            to:      'orders@example.com',
            subject: 'New order!',
            html:    '<h1>hello</h1>',
            // html:    generateOrderEmail({ order: body.order, total: body.total }),
        });
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            body:       JSON.stringify({ message: 'Nodemailer failed. :(' }),
        };
    }

    return {
        statusCode: 200,
        body:       JSON.stringify({ message: 'Success' }),
    };
};

/* Helpers */
function generateOrderEmail(options) {
    const orderItemsList = options.order.map(orderItem => {
        const { thumbnail, name, size } = orderItem;

        return `
            <li>
                <img src="${thumbnail}" alt="${name}" />
                ${size} ${name} - ${size}
            </li>
        `;
    });

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
