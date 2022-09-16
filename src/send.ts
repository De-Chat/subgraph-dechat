import { BigInt } from "@graphprotocol/graph-ts";
import {
  Send,
  SendErc1155,
  SendErc20,
  SendErc721,
  SendEth,
} from "../generated/Send/Send";
import { TransferERC1155, TransferERC20 } from "../generated/schema";

export function handleSendErc1155(event: SendErc1155): void {
  let entity = new TransferERC1155(event.transaction.hash.toHexString());
  entity.tokenId = event.params.tokenId;
  entity.amount = event.params.amount;
  entity.from = event.params.sender;
  entity.to = event.params.recipient;
  entity.timestamp = event.block.timestamp;
  entity.contractAddress = event.params.erc1155ContractAddress;

  entity.save();
}

export function handleSendErc20(event: SendErc20): void {
  let entity = new TransferERC20(event.transaction.hash.toHexString());
  entity.amount = event.params.amount;
  entity.from = event.params.sender;
  entity.to = event.params.recipient;
  entity.timestamp = event.block.timestamp;
  entity.contractAddress = event.params.erc20ContractAddress;

  entity.save();
}

export function handleSendErc721(event: SendErc721): void {
  let entity = new TransferERC1155(event.transaction.hash.toHexString());
  entity.tokenId = event.params.tokenId;
  entity.from = event.params.sender;
  entity.to = event.params.recipient;
  entity.timestamp = event.block.timestamp;
  entity.contractAddress = event.params.erc721ContractAddress;

  entity.save();
}

export function handleSendEth(event: SendEth): void {
  let entity = new TransferERC20(event.transaction.hash.toHexString());
  entity.amount = event.params.amount;
  entity.from = event.params.sender;
  entity.to = event.params.recipient;
  entity.timestamp = event.block.timestamp;

  entity.save();
}
