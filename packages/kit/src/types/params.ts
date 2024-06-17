import { SuiTransactionBlockResponse } from "@mysten/sui/client";
import {
  SignedTransaction,
  SuiSignAndExecuteTransactionOutput,
} from "@mysten/wallet-standard";

export type RpcClientExecuteTransactionResult = SuiTransactionBlockResponse;
export type GraphQLClientExecuteTransactionResult = {
  digest: string;
  effects?: {
    bcs?: string;
  };
};

export type ExecuteTransactionResult =
  | RpcClientExecuteTransactionResult
  | GraphQLClientExecuteTransactionResult;

export type ExecuteTransactionOptions = {
  execute?: (
    signedTransaction: SignedTransaction
  ) => Promise<ExecuteTransactionResult>;
};
