import type { PublicKey } from "@solana/web3.js";
import type BN from "bn.js";

export type InitLockupInstructionData = {
	rewardSchemes: ParsedRewardScheme[];
	fee: BN;
	feeVault: PublicKey;
	name: string;
	minimumStake: BN;
};

export type UpdateLockupInstructionData = {
	rewardSchemes: ParsedRewardScheme[];
	fee: BN;
	feeVault: PublicKey;
	minimumStake: BN;
};

export type ParsedRewardScheme = {
	duration: BN;
	reward: BN;
};

export type Numeric = string | number;

export type RewardScheme = {
	duration: number;
	rewardRate: Numeric;
};

export type StakeInstructionData = {
	amount: BN;
	lockPeriod: BN;
	nonce: BN;
};

export type LockupInfo = {
	address: string;
	feeInfo: {
		fee: string;
		feeVault: string;
	};
	rewardToken: {
		tokenAddress: string;
	};
	stakeToken: {
		tokenAdress: string;
		totalStaked: string;
	};
	stakeInfo: {
		name: string;
		creator: string;
		rewardSchemes: RewardScheme[];
		minimumStake: string;
	};
};

export type StakeInfo = {
	address: string;
	nonce: bigint;
	createdTime: number;
	stakedAmount: string;
	rewardAmount: string;
	stakeClaimed: boolean;
	lockPeriod: number;
	staker: string;
	lockup: string;
};

export type UserNonceInfo = {
	address: string;
	nonce: bigint;
};

export type StakeInfoWithHash = StakeInfo & {
	hash: string;
};
