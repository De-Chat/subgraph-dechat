import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  SendErc1155,
  SendErc20,
  SendErc721,
  SendEth
} from "../generated/Send/Send"

export function createSendErc1155Event(
  sender: Address,
  recipient: Address,
  tokenId: BigInt,
  amount: BigInt,
  erc1155ContractAddress: Address
): SendErc1155 {
  let sendErc1155Event = changetype<SendErc1155>(newMockEvent())

  sendErc1155Event.parameters = new Array()

  sendErc1155Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sendErc1155Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sendErc1155Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  sendErc1155Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  sendErc1155Event.parameters.push(
    new ethereum.EventParam(
      "erc1155ContractAddress",
      ethereum.Value.fromAddress(erc1155ContractAddress)
    )
  )

  return sendErc1155Event
}

export function createSendErc20Event(
  sender: Address,
  recipient: Address,
  amount: BigInt,
  erc20ContractAddress: Address
): SendErc20 {
  let sendErc20Event = changetype<SendErc20>(newMockEvent())

  sendErc20Event.parameters = new Array()

  sendErc20Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sendErc20Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sendErc20Event.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  sendErc20Event.parameters.push(
    new ethereum.EventParam(
      "erc20ContractAddress",
      ethereum.Value.fromAddress(erc20ContractAddress)
    )
  )

  return sendErc20Event
}

export function createSendErc721Event(
  sender: Address,
  recipient: Address,
  tokenId: BigInt,
  erc721ContractAddress: Address
): SendErc721 {
  let sendErc721Event = changetype<SendErc721>(newMockEvent())

  sendErc721Event.parameters = new Array()

  sendErc721Event.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sendErc721Event.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sendErc721Event.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  sendErc721Event.parameters.push(
    new ethereum.EventParam(
      "erc721ContractAddress",
      ethereum.Value.fromAddress(erc721ContractAddress)
    )
  )

  return sendErc721Event
}

export function createSendEthEvent(
  sender: Address,
  recipient: Address,
  amount: BigInt
): SendEth {
  let sendEthEvent = changetype<SendEth>(newMockEvent())

  sendEthEvent.parameters = new Array()

  sendEthEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  sendEthEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  sendEthEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return sendEthEvent
}
