//Արտածել  id-ն, title-ը, translate-ը, type-ը, icon-ը console-ում առանձին - առանձին
//Արտածել children-ի dashboards id ունեցող օբյեկտի children ենթազանգվածի 2 ենթաօբյեկտներ  url-ները
//Արտածել children-ի e-commerce id ունեցող օբյեկտի children ենթազանգվածի 5 ենթաօբյեկտներ  id-ները
    const navigationConfig = [
        {
            id: 'applications',
            title: 'Applications',
            translate: 'APPLICATIONS',
            type: 'group',
            icon: 'apps',
            children: [
                {
                    id: 'dashboards',
                    title: 'Dashboards',
                    translate: 'DASHBOARDS',
                    type: 'collapse',
                    icon: 'dashboard',
                    children: [
                        {
                            id: 'analytics-dashboard',
                            title: 'Analytics',
                            type: 'item',
                            url: '/apps/dashboards/analytics'
                        },
                        {
                            id: 'project-dashboard',
                            title: 'Project',
                            type: 'item',
                            url: '/apps/dashboards/project'
                        }
                    ]
                },
                {
                    id: 'e-commerce',
                    title: 'E-Commerce',
                    translate: 'ECOMMERCE',
                    type: 'collapse',
                    icon: 'shopping_cart',
                    url: '/apps/e-commerce',
                    children: [
                        {
                            id: 'e-commerce-products',
                            title: 'Products',
                            type: 'item',
                            url: '/apps/e-commerce/products',
                            exact: true
                        },
                        {
                            id: 'e-commerce-product-detail',
                            title: 'Product Detail',
                            type: 'item',
                            url: '/apps/e-commerce/products/1/a-walk-amongst-friends-canvas-print',
                            exact: true
                        },
                        {
                            id: 'e-commerce-new-product',
                            title: 'New Product',
                            type: 'item',
                            url: '/apps/e-commerce/products/new',
                            exact: true
                        },
                        {
                            id: 'e-commerce-orders',
                            title: 'Orders',
                            type: 'item',
                            url: '/apps/e-commerce/orders',
                            exact: true
                        },
                        {
                            id: 'e-commerce-order-detail',
                            title: 'Order Detail',
                            type: 'item',
                            url: '/apps/e-commerce/orders/1',
                            exact: true
                        }
                    ]
                }
            ]
        }
    ];

    console.log(navigationConfig[0].id);
    console.log(navigationConfig[0].title);
    console.log(navigationConfig[0].translate);
    console.log(navigationConfig[0].type);
    console.log(navigationConfig[0].icon);
    console.log(navigationConfig[0].children[0].children[0].url);
    console.log(navigationConfig[0].children[0].children[1].url);
    console.log(navigationConfig[0].children[1].children[0].id);
    console.log(navigationConfig[0].children[1].children[1].id);
    console.log(navigationConfig[0].children[1].children[2].id);
    console.log(navigationConfig[0].children[1].children[3].id);
    console.log(navigationConfig[0].children[1].children[4].id);

        