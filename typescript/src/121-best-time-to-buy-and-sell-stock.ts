export function maxProfit(prices: number[]): number {
    let minVal = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let i = 0; i <= prices.length - 1; i++) {
        if(prices[i] < minVal) minVal = prices[i];
        if(maxProfit < prices[i] - minVal) maxProfit = prices[i] - minVal;
    }

    return maxProfit;
}