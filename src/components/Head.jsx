import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constants";
import { cacheResult } from "./utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const text = await response.text();
    const cleaned = text
      .replace(/^window\.google\.ac\.h\(/, "")
      .replace(/\);?$/, "");
    const parsed = JSON.parse(cleaned);

    const suggestions = parsed[1].map((item) => item[0]);
    setSearchSuggestions(suggestions);
    dispatch(cacheResult({ [searchQuery]: suggestions }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSearchSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white fixed top-0 z-50 min-h-[64px] w-screen">
      <div className="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          alt="menu"
          className="h-6 w-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt="YouTube"
            className="h-6"
          />
        </a>
      </div>

      <div className="relative flex flex-1 justify-center max-w-2xl">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            placeholder="Search"
            className="flex-1 px-4 py-2 border border-gray-400 rounded-l-full text-sm"
          />
          <button className="px-4 py-2 border border-gray-400 border-l-0 bg-gray-100 rounded-r-full text-sm">
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="absolute top-12 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <ul>
              {searchSuggestions?.map((suggestion, i) => (
                <Link to={"/search?v=" + suggestion}>
                  <li
                    key={i}
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {suggestion}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="hidden md:block text-sm font-medium text-gray-700">
        Built with ❤️ and passion by Dhairya
      </div>
    </div>
  );
};

export default Head;
