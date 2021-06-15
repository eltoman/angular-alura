export interface Transfer {
  id?: number | string;
  value: number;
  receiver: number | string;
  data?: Date;
}
