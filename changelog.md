# Changelog

## 1.0.10 several small standards updates, see #8, #9, #10, #12, #13, #15, #16, #17

- several optional args for nft_transfer_payout are not optional anymore
- nft_transfer requires approval_id
odd since if you're owner you should be able to transfer without approval_id - just pass 0 if you're owner, see tests
- check diff for changes to tests if you rolled your own: https://github.com/near-apps/nft-market/commit/ba2b5ce07043061059a5482e815433101d4c455f
- check diff for changes to market, max_len_payout is required parameter now, your market may vary in how many payouts it allows

## 1.0.9 remove option on u64 for nft_transfer[_payout,_call]

- Makes NFT match standard closely, even though calls from Market/Client unaffected e.g. they could send approval_id or not

## 1.0.8 fix u64 vs. U64 for approval ids

- Makes NFT and Market contract match standard
- Re-deployment is non-breaking to existing NFT contracts, even if approvals are already added
- Recommeneded: Markets should remove all sales prior to migrating since since approval_id type is changed

## 1.0.7 fix breaking change to sale_views.rs

- Add storage_minimum_balance to market-simple 

## 1.0.7 fix breaking change to sale_views.rs

- Add storage_minimum_balance to market-simple 

## 1.0.6 fix breaking change to sale_views.rs

- Bug in market-simple storage_withdraw thanks @BenKurrek
- Add storage standard interface to market-simple 

## 1.0.5 fix breaking change to sale_views.rs

- Bug in get_sales_by_nft_contract_id

## 1.0.4 support wallet NFT pagination

- Update contracts to make limit: number (vs string)
- Update UI, api-helper was also released to accomodate this change

## 1.0.3 bug fix

- Wallet not connected

## 1.0.2 refactor and bug fix

- Refactor views and actions
- Fix for sale_conditions rename in market contract

## 1.0.1 gh ci

- Passing CI for Node 15.x

## 1.0.0 initial release

- Feature freeze
- API interface client passed args freeze
