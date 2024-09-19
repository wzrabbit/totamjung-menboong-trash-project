declare module '*.svg?react' {
  import { ReactElement, SVGProps } from 'react';
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
