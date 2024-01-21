import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import { cartRouter } from './routes/cart.route'
import { postRouter } from './routes/post.route'
import { productRouter } from './routes/product.route'
import { userRouter } from './routes/user.route'
import { orderRouter } from './routes/order.route'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }))

app.set('trust proxy', 1)

app.use(
	session({
		name: 'sid',
		secret: Math.random().toString(36).substring(2),
		resave: true,
		proxy: true,
		saveUninitialized: true,
		cookie: {
			httpOnly: false,
			maxAge: 8 * 60 * 60 * 1000, // 8 hours
			secure: true, // true: 只有 https 才能使用 cookie
			sameSite: false,
		},
	})
)

app.use(express.static('public'))

app.use('/api/user', userRouter)
app.use('/api/products', productRouter)
app.use('/api/posts', postRouter)
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)

mongoose
	.connect(process.env.MONGO_URI || '')
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error(err))

app.listen(process.env.PORT || 8080, () => {
	console.log(`Server started on ${process.env.BACKEND_URL}`)
})
