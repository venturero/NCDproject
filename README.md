Car Model
==============

<p align='center'><a href="https://github.com/Musti2735/NEAR-Poject-FootballPlayer">This project is influenced from Mustafa Türk's NCD project</a></p>
This is a submission project for NCD. 
## Get Started
==============

install -g yarn

 `npm i -g near-cli`
npm i -g near-cli

clone this repo to a local folder:
git clone https://github.com/venturero/NCDproject

Run these commands in git bash:
yarn

run yarn build:release

run near dev-deploy ./build/release/simple.wasm

export CONTRACT=dev-####-####

or RUN

./scripts/1.dev-deploy.sh


## Usage
==============

There are 3 brands on the project. AUDI, PORCHE and TESLA.
There are 3 car models in each brand.

Make sure to attach 2 NEAR. If near amount is less 2 near, assert code runs.

It must be like that : 
"near call $CONTRACT getCar '{"brand":"####"}' --accountId ####.testnet --amount #"

For example : 
"near call $CONTRACT getCar '{"brand":"AUDI"}' --accountId semi.testnet --amount 2"

or RUN

./scripts/2.getContract.sh

Finally, selected player adds the storage.

You can see your selected random player on terminal and storage using from https://github.com/near-examples/near-account-utils repostories.

<p align='center'><a href="https://www.loom.com/share/49b3ae2260ff4d22a36bd2bf85c5907c">Loom videeo of usage</a></p>
<p align='center'><a href="https://github.com/orgs/Learn-NEAR/repositories?q=l1&type=all&language=typescript&sort=">Click for more example</a></p>


