import { connect } from 'mongoose';


export default async function connectdb(uri) {
    return await connect(uri).then(() => {
        console.log('mongo connected');

    }).catch(e => console.log(e)
    )
}