async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(
    "0xfA503495BADdD4464FdC9785e2DD4b2BF0A3f831"
  );

  console.log("Vault address:", vault.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
