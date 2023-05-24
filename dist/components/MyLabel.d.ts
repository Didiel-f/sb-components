import './mylabel.css';
export interface Props {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Si el texto debe ser mayúsculas o no
    */
    allCaps?: boolean;
    /**
    * Color de la fuente
    */
    color?: string;
    /**
    * Color CUSTOM de la fuente
    */
    fontColor?: string;
    /**
    * Color de fondo
    */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: Props) => import("react/jsx-runtime").JSX.Element;
