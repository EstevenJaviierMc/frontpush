export interface Notificacion {
    id: number;
    from: string;
    texto: string;
    estado: 'DEFAULT' | 'VISTO';
}