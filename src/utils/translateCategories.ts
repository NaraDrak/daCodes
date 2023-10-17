export function translateValue(value: string): string {
  switch (value) {
    case 'latest':
      return 'Más reciente';
    case 'now_playing':
      return 'En reproducción';
    case 'popular':
      return 'Popular';
    case 'top_rated':
      return 'Mejor valoradas';
    case 'upcoming':
      return 'Próximas';
    default:
      return value; 
  }
}
