import React, { useEffect, useState, useMemo } from 'react';
import topicsData from '../data/topics.json';
import TopicCard from '../components/TopicCard';


function useProgress() {
  const [progress, setProgress] = useState({});
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('topicProgress') || '{}');
    setProgress(saved);
  }, []);
  const setTopicProgress = (id, value) => {
    const next = { ...progress, [id]: value };
    setProgress(next);
    localStorage.setItem('topicProgress', JSON.stringify(next));
  };
  return { progress, setTopicProgress };
}

export default function Home() {
  const { progress } = useProgress();
  const [filteredTopics, setFilteredTopics] = useState(topicsData);

  // Create the search index once and memoize it
  const fuse = useMemo(() => createTopicSearchIndex(topicsData), []);

  const handleSearch = (query) => {
    if (!query.trim()) {
      setFilteredTopics(topicsData);
    } else {
      const results = quickSuggest(query, fuse);
      setFilteredTopics(results);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Learning Hub</h1>
          <p className="text-gray-600">
            Search with the bot or pick a topic to continue.
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Logged in as</div>
          <div className="font-semibold">Student</div>
        </div>
      </header>

      <SearchBot onSearchChange={handleSearch} />

      <section>
        <h2 className="text-xl font-semibold mb-3">Your Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTopics.map((t) => (
            <TopicCard key={t.id} topic={t} progress={progress[t.id] || 0} />
          ))}
        </div>
      </section>
    </div>
  );
}