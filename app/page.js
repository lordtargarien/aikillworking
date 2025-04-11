
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AIKILLToken() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background animated code */}
      <div className="absolute inset-0 z-0 opacity-10 animate-pulse text-green-500 font-mono whitespace-pre-wrap text-xs px-4 pointer-events-none select-none">
        {"01101001 01101110 01110100 01100101 01101100 00100000 01100100 01100001 01110010 01101011\n01100100 01110010 01100101 01100001 01101101 01110011 00100000 01110111 01100001 01101011 01100101\n01110000 00100000 01100011 01110010 01111001 01110000 01110100 01101111 01100011 01110101 01110010 01110010 01100101 01101110 01100011 01111001"}
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4 text-red-600 z-10"
      >
        $AIKILL
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl mb-8 max-w-2xl text-center text-gray-300 z-10"
      >
        "Machines don’t sleep... and neither will your bags."
      </motion.p>

      <Image
        src="/aikill-cyberskull.png"
        alt="$AIKILL Promo"
        width={600}
        height={300}
        className="rounded-xl shadow-lg border border-red-800 mb-6 z-10"
      />

      <Card className="bg-gray-900 border border-red-700 w-full max-w-xl z-10">
        <CardContent className="p-6">
          <p className="text-lg text-white">
            Inspired by the dark genius of Stephen King, $AIKILL is a meme token born from a world where horror meets AI singularity.
          </p>
          <ul className="list-disc list-inside mt-4 text-sm text-gray-300">
            <li>📈 Total Supply: 666,666,666</li>
            <li>🧠 Theme: Horror x AI</li>
            <li>🧛 Quote Power: "REDRUM" infused</li>
          </ul>
          <Button className="mt-6 w-full bg-red-700 hover:bg-red-800 text-white">
            Buy (if you dare)
          </Button>
        </CardContent>
      </Card>

      <div className="mt-10 text-sm text-gray-500 text-center max-w-md z-10">
        <Sparkles className="inline-block mr-2" />Not financial advice. Pure literary fear-fueled fiction.
      </div>
    </div>
  );
}
