/* Core */
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby';
import nodemailer from 'nodemailer';
import waait from 'waait';

/* eslint-disable prefer-destructuring */
const host = process.env.MAIL_HOST;
const user = process.env.MAIL_USER;
const pass = process.env.MAIL_PASSWORD;
/* eslint-enable prefer-destructuring */

const mailConfig = {
    host,
    port:   587,
    secure: false,
    auth:   { user, pass },
};

const REQUIRED_FIELDS = [ 'email', 'name', 'order' ];

const transporter = nodemailer.createTransport(mailConfig);

export default async function handler(
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse,
) {
    await waait(2000);

    const { body } = req;

    for (const field of REQUIRED_FIELDS) {
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
        await transporter.sendMail({
            from:    'Slick\'s Slices <slick@example.com>',
            to:      `${body.name} <${body.email}>, orders@example.com`,
            subject: 'New order!',
            html:    generateOrderEmail({ order: body.order, total: body.total }),
        });
    } catch (error) {
        return res.status(500).json(
            JSON.stringify({
                message: `Nodemailer failed: ${error.message}. :(`,
            }),
        );
    }

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
