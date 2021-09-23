export interface MoedasProps {
	code: string;
	codein: string;
	name: string;
	high: string;
	low: string;
	varBid: string;
	pctChange: string;
	bid: string;
	ask: string;
	timestamp: string;
	create_date: string;
}

export interface MoedasModel {
	uSDT: MoedasProps;
    USD: MoedasProps;
    CAD: MoedasProps;
    BTC: MoedasProps;
    LTC: MoedasProps
    EUR: MoedasProps
}