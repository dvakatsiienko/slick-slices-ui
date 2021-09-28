/* Core */
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';

import nodemailer from 'nodemailer';
import waait from 'waait';

// eslint-disable-next-line
const MAIL_HOST = process.env.GATSBY_MAIL_HOST;
// eslint-disable-next-line
const MAIL_USER = process.env.GATSBY_MAIL_USER;
// eslint-disable-next-line
const MAIL_PASSWORD = process.env.GATSBY_MAIL_PASSWORD;

console.log('process.env', process.env);
console.log('_', MAIL_HOST);
console.log('_', MAIL_USER);
console.log('_', MAIL_PASSWORD);

const mailConfig = {
    host:   MAIL_HOST,
    port:   587,
    secure: false,
    auth:   {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(mailConfig);

export default async function handler(
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse,
) {
    // await waait(2000);

    // const body = JSON.parse(req.body, null, 4);
    const { body } = req;
    const requiredFields = [ 'email', 'name', 'order' ];

    console.log(2, body);

    if (body.mapleSyrup) {
        return res
            .status(400)
            .json(
                JSON.stringify({ message: 'Boop beep bop zzzzstt good bye' }),
            );
    }

    for (const field of requiredFields) {
        if (!body[ field ]) {
            const message = `Oops! You are missing the ${field} field.`;

            return res.status(400).json(JSON.stringify({ message }));
        }

        if (field === 'order' && !body.order.length) {
            const message = 'Why would you order nothing?!';

            return res.status(400).json(JSON.stringify({ message }));
        }
    }

    try {
        console.log(3, 'almost...');
        await transporter.sendMail({
            from:    'Slick\'s Slices <slick@example.com>',
            to:      `${body.name} <${body.email}>, orders@example.com`,
            subject: 'New order!',
            html:    generateOrderEmail({ order: body.order, total: body.total }),
        });
    } catch (error) {
        console.log(4, error);
        return res.status(500).json(
            JSON.stringify({
                message: `Nodemailer failed: ${error.message}. :(`,
            }),
        );
    }

    console.log('SUCCESS');

    return res.status(200).json(JSON.stringify({ message: 'Success' }));
}

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
