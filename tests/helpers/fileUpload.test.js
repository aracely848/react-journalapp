import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'dlntxahia',
    api_key: '491814356299163',
    api_secret: '740TjIPEWpjSEoK8wCdvSTIDomQ',
    secure: true
});

describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => { 

        const imageUrl = 'https://www.nyip.edu/images/cms/photo-articles/the-best-place-to-focus-in-a-landscape.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload(file);
        expect (typeof url).toBe('string');

        // console.log(url);
        const segments = url.split('/');
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

        const cloudResp = await cloudinary.api.delete_resources_([ 'journal/' + imageId ], {
            resource_type: 'image'
        });
        //console.log({cloudResp})


    });
    test('debe de retornar null', async() =>{

        const file = new File([], 'foto.jpg');
        
        const url = await fileUpload(file);
        expect (typeof url).toBe(null);
    })
});