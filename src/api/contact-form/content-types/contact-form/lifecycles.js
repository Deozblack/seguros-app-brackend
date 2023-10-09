
module.exports = {
    async afterCreate(event) {    
        const { result } = event;

        try{
            await strapi.plugins['email'].services.email.send({
              to: `${result.email}`,
              from: 'omarsolanoxnr@gmail.com', 
              subject: ' ¡Gracias por tu interés en nuestros servicios de seguro!',
              text: `your name is: ${result.name}`,
              html: `
              
              <div style="padding:40px">
                <h1 style="color:orange; font-size: 40px;">
                    Estimado/a ${result.name},
                </h1>

                <p style="font-size: 20px; color:#212121; padding-bottom: 10px;">
                    Espero que este correo te encuentre bien. En nombre de [Nombre de tu empresa], me complace recibir tu solicitud de información sobre nuestros servicios de seguro. Agradecemos sinceramente que hayas tomado el tiempo para completar nuestro formulario en línea y considerar nuestra empresa para tus necesidades de seguro.
                </p>
                <p style="font-size: 20px; color:#212121; padding-bottom: 10px;">
                    El servicio solicitado fue:
                </p>
                <p style="color:orange; font-size: 30px; color:#212121; padding-bottom: 10px;">
                    ${result.services}
                </p>
                <p style="font-size: 20px; color:#212121; padding-bottom: 10px;">
                    Nos pondremos en contacto contigo nuevamente en breve con la información detallada que estás buscando. Si necesitas asistencia inmediata, no dudes en llamarnos al <strong>7441272949</strong> o enviarnos un correo electrónico a <strong>omarjs097@gmail.com</strong>.
                </p>
                <p style="font-size: 20px; color:#212121; padding-bottom: 10px;">
                    Gracias de nuevo por elegirnos. Estamos emocionados de tener la oportunidad de servirte y esperamos tener noticias tuyas pronto.
                </p>

                <p style="font-size: 20px; color:#212121; padding-bottom: 10px;">
                    Atentamente: Omar de jesus jimenez solano - CEO
                </p>
            </div>
              
              ` 
                
            })
        } catch(err) {
            console.log(err);
        }
    }
}