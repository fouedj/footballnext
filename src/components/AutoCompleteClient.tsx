"use client";
import { League } from "@/utility/types/types";
import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import "../styles/autocomplete.css";
import { Input } from "./ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface AutoCompleteType {
  suggestions: Array<League>;
}

const useAutoComplete = (suggestions: Array<League>) => {
  const [item, setItem] = useState("");
  const [showAutoComplete, setShowAutoComplete] = useState(false);
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setItem(e.target.value);
      setShowAutoComplete(true);
    },
    []
  );

  const itemSearched = useMemo(() => {
    return suggestions.filter((value) =>
      value?.strLeague?.toUpperCase().includes(item?.toUpperCase())
    );
  }, [item, suggestions]);

  const hideAutoComplete = useCallback(() => {
    setShowAutoComplete(false);
  }, []);

  return {
    item,
    showAutoComplete,
    handleSearchChange,
    itemSearched,
    hideAutoComplete,
    setShowAutoComplete,
  };
};
export default function AutoCompleteClient({ suggestions }: AutoCompleteType) {
  const {
    item,
    showAutoComplete,
    handleSearchChange,
    itemSearched,
    hideAutoComplete,
    setShowAutoComplete,
  } = useAutoComplete(suggestions);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        hideAutoComplete();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideAutoComplete]);
  const onValid = async (league: string) => {};
  return (
    <div className="input-container" ref={containerRef}>
      <Input
        type="text"
        placeholder={"Search"}
        value={item}
        onChange={handleSearchChange}
        onFocus={() => setShowAutoComplete(true)}
      />
      {showAutoComplete && item && (
        <div className="autocomplete-container">
          <ul className="autocomplete-list">
            {itemSearched.map((league) => (
              <li
                key={league._id}
                onClick={() => router.push(`/leagues/${league.strLeague}`)}
              >
                <span>{league.strLeague}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
