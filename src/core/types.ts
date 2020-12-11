export type Dictionary<T = any> = {
  [key: string]: T;
};

export type ConnectionStatus =
  | 'ERROR'
  | 'CONNECTING'
  | 'CONNFAIL'
  | 'AUTHENTICATING'
  | 'AUTHFAIL'
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'DISCONNECTING'
  | 'ATTACHED'
  | 'REDIRECT'
  | 'CONNTIMEOUT';

export type Contact = {
  jid: string;
  name?: string;
};

export type Message = {
  from: string;
  to: string;
  text: string;
};
