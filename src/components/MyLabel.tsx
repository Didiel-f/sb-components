import './mylabel.css';

export interface Props {
    /**
    * Este es el mensaje a mostrar en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño de la etiqueta
    */
    size: 'normal'|'h1'|'h2'|'h3';
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
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor
}: Props) => {
  return (
    <span 
        className={`label ${ size } text-${ color }` }
        style={{ color: fontColor}}
    >
        {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
