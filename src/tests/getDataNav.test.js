import { getDataNav } from "../helpers/getDataNav";

describe('prueba de datos JSON', ()=> {

    test('debe retornar objeto Json', async()  => {
    
       const objetoEsperado = {
        "id": "0",
        "name": "Qatar Airways",
        "icon": "/images/Qatar-Airways-Logo.png"           
           
          }
            const data = await getDataNav();            
            expect(objetoEsperado).toMatchObject(data[0].companias[0]);            

    })
 })