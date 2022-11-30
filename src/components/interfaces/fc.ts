/* eslint-disable @typescript-eslint/ban-types */
import { FC, ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface IClassName {
  className?: string;
}

export type TFCChildren<T = {}> = FC<IChildren & T>;

export type TFCClassName<T = {}> = FC<IClassName & T>;

export type TFC<T = {}> = FC<IChildren & IClassName & T>;
