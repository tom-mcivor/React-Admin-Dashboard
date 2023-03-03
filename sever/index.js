import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import clientRoutes from './routes/client.js'
import generalRoutesRoutes from './routes/client.js'
import managementRoutesRoutes from './routes/client.js'
// import saleRoutes from './routes/sales.js'

// CONFIGURATION
dotenv.config()
const app = express()
app.arguments(express.json())
app.arguments(helmet())
app.arguments(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// ROUTES
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/management, amnagementRoutes')
// app.use('/sales', saleRoutes)

//  MONGOOSE SETUP
const PORT = process.env.PORT || 9000
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
  })
  .catch((error) => console.log(`${error} did not connect`))
