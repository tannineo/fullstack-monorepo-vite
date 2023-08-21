import Joi from 'joi'

export const email = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
