import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import {
  WAITING_CONFIRMATION,
  ORDER_PREPARED,
  OUT_FOR_DELIVERY,
  ORDER_DELIVERY,
  ORDER_CANCELED,
} from '~/constants/Status';

export const formatToBrazilianCurrency = (number: number) => number.toLocaleString('pt-BR');

export const formatUnixToTimestamp = (timestamp: number) => {
  return format(timestamp, "HH:mm - dd'/'MM'/'yyyy", { locale: ptBR });
};

export const displayCurrentStatus = (status: string) => {
  switch (status) {
    case WAITING_CONFIRMATION:
      return 'Aguardando a confirmação';

    case ORDER_PREPARED:
      return 'O pedido está sendo preparado';

    case OUT_FOR_DELIVERY:
      return 'O pedido saiu para entrega';

    case ORDER_DELIVERY:
      return 'O pedido foi entregue';

    case ORDER_CANCELED:
      return 'O pedido foi cancelado';

    default:
      return '';
  }
};
