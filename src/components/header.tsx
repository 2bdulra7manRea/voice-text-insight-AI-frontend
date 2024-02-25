"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderKL() {
  const path = usePathname();

  return (
    <div className="flex justify-center p-5">
      <ul className="flex justify-between w-1/4">
        <li className="border p-2">
          <Link
            href={"/voice"}
            className={`link ${path === "/voice" ? "line-through" : ""}`}
          >
            Voice Convertor
          </Link>
        </li>
        <li className="border p-2">
          <Link
            href={"/text"}
            className={`link ${path === "/text" ? "line-through" : ""}`}
          >
            Text Extractor
          </Link>
        </li>
      </ul>

    </div>
  );
}
