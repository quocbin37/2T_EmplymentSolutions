import * as request from '~/unlti/request' ;

export const search = async (q , type='more')=> {
    try {
        const res = await request.get(`users/search`,{
            params: {
                q,
                type
            }
        })
        return res.data
    
    } catch (error) {
        console.log(error);
        
    }
        
}


