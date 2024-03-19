import imgs from './assets';

export const planInterval = [
    {
        id: 1,
        isChecked: true,
        label: 'monthly'
    },
    {
        id: 2,
        isChecked: false,
        label: 'yearly'
    },
];

export const plans = [
    {
        id: 1,
        plan: 'a',
        isChecked: true,
        offers: ['Offer A 1', 'Offer A 2'],
        logo: imgs.Users,
        price: {
            monthly: {
                pricingId: 'a_Monthly',
                listedPrice: 10,
                actualPrice: 20,
            },
            yearly: {
                pricingId: 'a_Yearly',
                listedPrice: 100,
                actualPrice: 200,
            },
        }
    },
    {
        id: 2,
        plan: 'b',
        isChecked: false,
        offers: ['Offer B 1', 'Offer B 2', 'Offer B 3'],
        logo: imgs.Power,
        price: {
            monthly: {
                pricingId: 'b_Monthly',
                listedPrice: 20,
                actualPrice: 40,
            },
            yearly: {
                pricingId: 'b_Yearly',
                listedPrice: 200,
                actualPrice: 400,
            },
        }
    },
    {
        id: 3,
        plan: 'C',
        isChecked: false,
        offers: ['Offer C 1'],
        logo: imgs.Settings,
        price: {
            monthly: {
                pricingId: 'c_Monthly',
                listedPrice: 30,
                actualPrice: 60,
            },
            yearly: {
                pricingId: 'c_Yearly',
                listedPrice: 300,
                actualPrice: 600,
            },
        }
    },
    // {
    //     id: 4,
    //     plan: 'D',
    //     isChecked: false,
    //     offers: ['Offer D 1', 'Offer D 2'],
    //     price: {
    //         monthly: {
    //             pricingId: 'd_Monthly',
    //             listedPrice: 40,
    //             actualPrice: 80,
    //         },
    //         yearly: {
    //             pricingId: 'd_Yearly',
    //             listedPrice: 400,
    //             actualPrice: 800,
    //         },
    //     }
    // }
];