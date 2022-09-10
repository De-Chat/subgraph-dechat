import { BigInt } from "@graphprotocol/graph-ts"
import {
  Send,
  SendErc1155,
  SendErc20,
  SendErc721,
  SendEth
} from "../generated/Send/Send"
import { ExampleEntity } from "../generated/schema"

export function handleSendErc1155(event: SendErc1155): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.sendErc1155(...)
  // - contract.sendErc20(...)
  // - contract.sendErc721(...)
}

export function handleSendErc20(event: SendErc20): void {}

export function handleSendErc721(event: SendErc721): void {}

export function handleSendEth(event: SendEth): void {}