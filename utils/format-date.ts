import { format } from 'date-fns';

export const formatDate = (dateString: string): string => {
  const formattedDate = format(new Date(dateString), 'dd/MM/yyyy');
  return formattedDate;
};