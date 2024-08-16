export type KeyType = {
  id: number;
  label: string;
  type: string;
  value: string;
  beingPressed: boolean;
};

export type KeyComponentProps = {
  label: string;
  type: string;
  value: string;
  color: string;
  beingPressed: boolean;
};
