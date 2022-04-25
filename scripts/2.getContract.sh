#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Call 'getCar' functions on the contract"
echo "Step 2: Select a brand. There are ony 3 brands 'TESLA', 'AUDI', 'PORCHE' on contract. You must write one of this teams on the value of team parameter."
echo "Step 3: Add your testnet account"
echo "Step 4: Add 2 near deposit" 
echo "It must be like that"
echo "near call \$CONTRACT getCar '{\"team\":\"TESLA\"}' --accountId mycodebag.testnet --amount 2"
echo "near call \$CONTRACT getCar '{\"team\":\"AUDI\"}' --accountId mycodebag.testnet --amount 2"
echo "near call \$CONTRACT getCar '{\"team\":\"PORCHE\"}' --accountId mycodebag.testnet --amount 2"
echo ---------------------------------------------------------
echo
echo
echo
echo 
exit 0
