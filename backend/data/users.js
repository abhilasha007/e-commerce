import bcrypt from 'bcryptjs'
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: 'Mikasa Y',
        email: 'mika@example.com',
        password: bcrypt.hashSync('12345', 10)
    },
    {
        name: 'Eren Yaeger',
        email: 'eren@example.com',
        password: bcrypt.hashSync('12345', 10)
    }
]

export default users