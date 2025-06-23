import React, { useState } from "react";

const mockWalletData = {
  address: "0x123...abc",
  chains: ["Ethereum", "Polygon"],
  totalValue: "4,500",
  nfts: ["Pudgy Penguin #1234", "Otherdeed #987"],
  tags: ["DeFi Degen", "NFT Enthusiast"]
};

const mockClusterData = [
  { address: "0x456...def", similarity: "90%" },
  { address: "0x789...ghi", similarity: "85%" }
];

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [clusters, setClusters] = useState([]);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setWallet({ ...mockWalletData, address: input });
    setClusters(mockClusterData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold mb-6">WRM Platform Demo</h1>
      <div className="flex gap-2 mb-8">
        <input
          placeholder="Enter wallet address..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-96 px-4 py-2 rounded-lg border"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
        >
          Search
        </button>
      </div>

      {wallet && (
        <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold">Wallet: {wallet.address}</h2>
          <p className="mt-2">Chains: {wallet.chains.join(", ")}</p>
          <p>Total Value: ${wallet.totalValue}</p>
          <p>NFTs: {wallet.nfts.length}</p>
          <div className="mt-2">
            <h4 className="font-semibold">Tags:</h4>
            <div className="flex gap-2 mt-1">
              {wallet.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-purple-200 text-purple-800 px-2 py-1 rounded-xl text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {clusters.length > 0 && (
        <
