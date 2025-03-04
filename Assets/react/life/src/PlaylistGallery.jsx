import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const playlists = [
  { id: 1, title: "Chill Vibes", link: "https://music.apple.com/tw/playlist/03-03-2025-morning/pl.u-XkD0Y6MuDWDZ4Pq?l=en" },
  { id: 2, title: "Workout Boost", link: "https://music.apple.com/your-link-2" },
  { id: 3, title: "Late Night Jazz", link: "https://music.apple.com/your-link-3" },
  // Add more playlists manually
];

export default function PlaylistGallery() {
  const [selected, setSelected] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className="relative flex h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black"></div>
      
      {/* Playlist Gallery Layer */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div className="flex gap-8">
          {playlists.map((playlist, index) => (
            <motion.div
              key={playlist.id}
              className="cursor-pointer"
              initial={{ y: 0 }}
              animate={{ y: hoverIndex === index ? -20 : 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              onClick={() => setSelected(playlist)}
            >
              <Card className="p-4 bg-gray-700 rounded-2xl shadow-lg">
                <CardContent className="text-lg font-semibold">
                  {playlist.title}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Playlist Information Layer */}
      <div className="w-1/4 p-6 bg-gray-800 shadow-xl">
        {selected ? (
          <div>
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-400 hover:underline"
            >
              Open in Apple Music
            </a>
          </div>
        ) : (
          <p className="text-gray-400">Select a playlist to see details.</p>
        )}
      </div>
    </div>
  );
}
