import { Routes } from "@angular/router";

export const routes: Routes = [

{
    path:'admin',
    loadComponent:()=>import('./admin/admin.component'),
    children:[
        {
            path:'inicio',
            title:'Inicio',
            loadComponent:()=>import('./admin/pages/inicio/inicio.component')

        },
        {
            path:'nosotros',
            title:'Nosotros',
            loadComponent:()=>import('./admin/pages/nosotros/nosotros.component')

        },
        {
            path:'contacto',
            title:'Contacto',
            loadComponent:()=>import('./admin/pages/contacto/contacto.component')

        },
        {
            path:'productos',
            title:'Productos',
            loadComponent:()=>import('./admin/pages/productos/productos.component')

        },
        {
            path:'soluciones',
            title:'Soluciones',
            loadComponent:()=>import('./admin/pages/soluciones/soluciones.component')

        },
        {
            path:'', redirectTo:'inicio',  pathMatch:'full',
        }

    ]
},
{
    path:'',
    redirectTo: '/admin',
    pathMatch:'full'
}
];