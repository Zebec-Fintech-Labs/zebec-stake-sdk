import { describe, it } from "mocha";
import { createReadonlyProvider, StakeServiceBuilder } from "../../src";
import { deriveLockupAddress, deriveStakeAddress } from "../../src/pda";
import { getConnection, getWallets } from "../shared";

describe("Fetch Stake Info", () => {
	const network = "mainnet-beta";
	const connection = getConnection(network);
	const wallets = getWallets(network);
	const wallet = wallets[2];
	const provider = createReadonlyProvider(connection, wallet.publicKey);

	const service = new StakeServiceBuilder()
		.setNetwork(network)
		.setProvider(provider)
		.setProgram()
		.build();

	describe("getStakeInfo()", () => {
		it("fetch stake information of a user", async () => {
			const nonce = 87n;
			const lockupName = "ZBCN_Lockup_003";
			const lockup = deriveLockupAddress(lockupName, service.program.programId);
			console.log("lockup", lockup.toString());
			const _stake = deriveStakeAddress(
				"99Ecn3r3f4sjPXrgSdXHYfR1VaEvmkWqZQ3VBoecJHRo",
				lockup,
				nonce,
				service.program.programId,
			);
			const info = await service.getStakeInfo(
				"GL7FU6yWVm833MGRJf4YcVazV8QwdRFSvrJkpAPYSJqM",
				"6ucsPuczmg9uoq5i4SYDEEJ4ciKnuxW3za2sdBcKHwmw",
			);

			console.log("stake info:", info);
		});
	});
});
