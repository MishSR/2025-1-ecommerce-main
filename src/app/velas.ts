export type VelasInterface = {
    id: number,
    titulo: string,
    descripcion: string,
    img: string,
    precio: number,
}

export type VelasVendidas = VelasInterface & {
    cantidad: number,
}