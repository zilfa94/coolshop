import Commerce from '@chec/commerce.js';

let commerce = null;

function getCommerce(commercePublicKey) {
    if (commerce) {
        return commerce;
    } else {
        const publickey = commercePublicKey || process.env.COMMERCE_PUBLIC_KEY;
        const devEnvironment = process.env.NODE_ENV === 'development';
        if (devEnvironment && !publickey) {
            throw Error('Commerce public API key introuvable!');
        }
        commerce = new Commerce(publickey, devEnvironment);
        return commerce;
    }
}
export default getCommerce;