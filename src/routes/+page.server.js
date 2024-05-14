import { redirect } from "@sveltejs/kit";

export const actions = {
    login: async ({cookies, request}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(email === 'ohmjezz@gmail.com' && password === 'ohmjess123!'){
            const userid = crypto.randomUUID();   
            cookies.set('userid', userid, {path: '/'});
            redirect(301, '/home');
        }
        return {success: false}
    }
}