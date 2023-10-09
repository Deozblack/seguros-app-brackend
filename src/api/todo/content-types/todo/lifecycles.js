
module.exports = {
    async afterCreate(event) {    
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: 'omarjs097@gmail.com',
              from: 'omarsolanoxnr@gmail.com', 
              subject: 'The Strapi Email plugin worked successfully',
              text: `your name is: ${result.name}`, 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}